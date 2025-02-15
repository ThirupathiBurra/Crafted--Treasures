import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>The Crafted Treasures | Handmade Wonders</title>
        <meta name="description" content="Discover exquisite handcrafted treasures, made with passion and love." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/wallpaperbetter.com_1920x1200.jpg"
          layout="fill"
          objectFit="cover"
          alt="Handmade Craft Background"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Welcome to Crafted Treasures
          </h1>
          <p className="text-lg md:text-xl text-white mt-4 max-w-2xl">
            Unique, handcrafted, and eco-friendly products made with love and care.
          </p>
          <Link href="/homedecor">
            <a className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
              Shop Now
            </a>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Why Choose Crafted Treasures?
            </h2>
            <p className="text-gray-600 mt-3">
              We offer high-quality, sustainable, and uniquely crafted handmade products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Free Delivery',
                description: 'Enjoy free shipping all across India with fast & reliable delivery.',
                icon: '🚚',
              },
              {
                title: 'Handmade & Eco-Friendly',
                description: '100% natural, handmade, and environmentally sustainable products.',
                icon: '🌱',
              },
              {
                title: 'Verified & Quality Assured',
                description: 'Each product is carefully inspected and verified for top-notch quality.',
                icon: '✅',
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center">
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-xl font-medium text-gray-900 mt-4">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-700 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Ready to find your perfect handcrafted treasure?
        </h2>
        <p className="text-lg mt-3">Explore our collection and bring home something truly special.</p>
        <Link href="/pottery">
          <a className="mt-6 inline-block px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            Browse Collection
          </a>
        </Link>
      </section>
    </div>
  );
}
