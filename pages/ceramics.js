import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// ColorButton Component for reusable color button rendering
const ColorButton = ({ color }) => {
  const colorClasses = {
    red: "border-red-300 bg-red-700",
    blue: "border-blue-300 bg-blue-700",
    pink: "border-pink-300 bg-pink-700",
    green: "border-green-300 bg-green-700",
    yellow: "border-yellow-300 bg-yellow-700",
  };

  return (
    color && colorClasses[color] && (
      <button
        className={`border-2 ${colorClasses[color]} ml-1 rounded-full w-6 h-6 focus:outline-none`}
      ></button>
    )
  );
};

const Ceramics = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Ceramics - Crafted Treasures</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container md:ml-32 px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Object.keys(products).length === 0 && (
              <p className="md:mx-96">Sorry!! All Ceramics are out of stock.</p>
            )}
            {Object.keys(products).map((key) => {
              const item = products[key];
              return (
                <Link key={item._id} href={`/product/${item.slug}`}>
                  <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-2">
                    <div className="flex justify-center rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                        src={item.img}
                      />
                    </div>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-1">₹ {item.price}</p>
                      <div className="flex">
                        <span className="mr-3">Color</span>
                        {item.colour?.map((color) => (
                          <ColorButton key={color} color={color} />
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getProducts`);
    const data = await res.json();

    if (!data.products || !Array.isArray(data.products)) {
      console.warn("⚠️ No products received from API.");
      return { props: { products: {} } };
    }

    let products = data.products.filter((x) => x.category === "ceramics");
    let variants = {};

    // Organizing products by title and handling color variants
    for (let item of products) {
      if (variants[item.title]) {
        if (!variants[item.title].colour.includes(item.colour) && item.availableQty > 0) {
          variants[item.title].colour.push(item.colour);
        }
      } else {
        variants[item.title] = { 
          ...item, 
          colour: item.availableQty > 0 ? [item.colour] : [] 
        };
      }
    }

    return { props: { products: variants } };

  } catch (error) {
    console.error("❌ Error fetching products:", error);
    return { props: { products: {} } };
  }
}

export default Ceramics;
