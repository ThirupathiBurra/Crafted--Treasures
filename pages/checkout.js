import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiFillCloseSquare, AiOutlineShoppingCart, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import Head from 'next/head';
import Script from 'next/script';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = ({ cart, clearCart, subtotal, addtoCart, removeFromCart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem('myuser'));
    if (myuser?.token) {
      setUser(myuser);
      setEmail(myuser.email);
      fetchData(myuser.token);
    }
  }, []);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (name === 'pincode' && value.length === 6) {
      getPincode(value);
    }

    switch (name) {
      case 'name': setName(value); break;
      case 'email': setEmail(value); break;
      case 'phone': setPhone(value); break;
      case 'address': setAddress(value); break;
      case 'pincode': setPincode(value); break;
      default: break;
    }
    setDisabled(!(name.length > 3 && email.length > 3 && phone.length > 3 && address.length > 3 && pincode.length > 3));
  };

  const getPincode = async (pincode) => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let pinData = await res.json();
    if (pinData[pincode]) {
      setCity(pinData[pincode][0]);
      setState(pinData[pincode][1]);
    } else {
      setCity('');
      setState('');
    }
  };

  const fetchData = async (token) => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    let data = await res.json();
    setName(data.name);
    setAddress(data.address);
    setPincode(data.pincode);
    setPhone(data.phone);
  };

  return (
    <div className='container mx-auto md:px-48'>
      <ToastContainer position='top-left' autoClose={2500} hideProgressBar pauseOnHover draggable />
      <Head>
        <title>Checkout - The Crafted Treasures</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <h1 className='font-bold text-4xl text-center my-8'>Checkout</h1>
      <h2 className='font-bold text-xl py-4'>1. Delivery Details</h2>
      <div className='mx-auto flex'>
        <input onChange={handleChange} value={name} name='name' placeholder='Name' className='input-field' />
        <input value={user?.email || email} name='email' placeholder='Email' className='input-field' readOnly={!!user} />
      </div>
      <textarea onChange={handleChange} value={address} name='address' placeholder='Address' className='input-field'></textarea>
      <div className='mx-auto flex'>
        <input onChange={handleChange} value={phone} name='phone' placeholder='Phone' className='input-field' />
        <input onChange={handleChange} value={pincode} name='pincode' placeholder='Pincode' className='input-field' />
      </div>
      <div className='mx-auto flex'>
        <input value={state} name='state' placeholder='State' className='input-field' readOnly />
        <input value={city} name='city' placeholder='City' className='input-field' readOnly />
      </div>
      <h2 className='font-bold text-xl py-4'>2. Review Cart Items</h2>
      <div className='sideCart p-4 bg-blue-100'>
        <span className='absolute top-2 right-3 cursor-pointer text-red-700'>
          <AiFillCloseSquare className='text-2xl' />
        </span>
        <ol className='list-decimal font-semibold px-4'>
          {Object.keys(cart).length === 0 && <div className='mt-8'>No items in cart.</div>}
          {Object.keys(cart).map((k) => (
            <li key={k} className='px-2'>
              <div className='item flex my-2'>
                <div>{cart[k].name} ({cart[k].variant})</div>
                <div className='flex items-center text-xl justify-center w-1/3'>
                  <AiOutlinePlusCircle onClick={() => addtoCart(k, 1, cart[k].price, cart[k].name, cart[k].variant)} className='mx-1 cursor-pointer text-pink-500' />
                  {cart[k].qty}
                  <AiOutlineMinusCircle onClick={() => removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].variant)} className='mx-1 cursor-pointer text-pink-500' />
                </div>
              </div>
            </li>
          ))}
        </ol>
        <span className='font-bold mx-8'>Subtotal: ₹ {subtotal}</span>
      </div>
      <div className='pay'>
        <button disabled={disabled} className='pay-button'>
          <BsFillBagCheckFill className='mt-1 mx-1' /> Pay ₹ {subtotal}
        </button>
        <h3 className='text-red-500 mt-3 font-bold'>Currently, we only accept card payments.</h3>
      </div>
    </div>
  );
};

export default Checkout;
