export default function App()
{

  const products = [

    {
      id: 1,
      name: 'Harmony Harvest',
      desc: 'Smooth • Balanced',
      price: '₹335',
      image:
        'https://media.licdn.com/dms/image/v2/D5622AQEQnke_OHWHTA/feedshare-shrink_800/B56ZwaZHaLJIAg-/0/1769969317769?e=2147483647&v=beta&t=cQ45Kq2fdNy-1Q0V_VT5HBbVqTyPXac8i_A59jBNueU',
      roast: 'Dark Roast',
    },

    {
      id: 2,
      name: 'Amber Blend',
      desc: 'Chocolate • Nutty',
      price: '₹285',
      image:
        'https://media.licdn.com/dms/image/v2/D5622AQFTqrZZAIEkWQ/feedshare-shrink_800/B56ZwaZHanJEAg-/0/1769969317813?e=2147483647&v=beta&t=tPrd5xQwH4uqzFuznANZKZzFVCjtgfQp_o_SSPGhDAs',
      roast: 'Medium Roast',
    },

    {
      id: 3,
      name: 'Washed Valley',
      desc: 'Fruity • Sweet',
      price: '₹375',
      image:
        'https://media.licdn.com/dms/image/v2/D5622AQF4T8CWAuzldg/feedshare-shrink_800/B56ZwaZHaLK8Ag-/0/1769969317772?e=2147483647&v=beta&t=7mXADZBYhGIJ2gfrqNenPT9BVvAWn3vjA8LiKlpAXRQ',
      roast: 'Light Roast',
    },

  ]

  const categories = [
    'Coffee Beans',
    'Instant Coffee',
    'Drip Bags',
    'Coffee Machines',
  ]

  const coffeeTypes = [

    {
      name: 'Espresso',
      image:
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop',
    },

    {
      name: 'Latte',
      image:
        'https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1200&auto=format&fit=crop',
    },

    {
      name: 'Cappuccino',
      image:
        'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1200&auto=format&fit=crop',
    },

    {
      name: 'Americano',
      image:
        'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop',
    },

  ]

  const reviews = [

    {
      name: 'Riya Madan',
      text: 'The smell is incredible as soon as you open the bag, and the taste is really smooth and fresh. It is now the only coffee beans I use at home',
    },

    {
      name: 'Akshay Thakur',
      text: 'I honestly look forward to my first cup every single day. It’s the kind of drink that actually makes you want to sit down and enjoy it for a minute before starting your day.',
    },

    {
      name: 'Mohit Singh',
      text: "I finally decided to upgrade my setup and I'm so glad I did. Everything equipment is well-made and sturdy. It’s easy to use and it has made a huge difference in how my coffee tastes.",
    },

  ]

  return (

    <div className="bg-white text-gray-900 overflow-hidden">

      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          <a href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BU5JVIlcCDAicHKoQawjM7rxp7YK_671gQ&s" alt="My Coffee Co Logo" className="h-10 sm:h-12 lg:h-14 w-auto object-contain cursor-pointer hover:scale-105 transition-all duration-300"/>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

            <a href="#" className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
              Shop
            </a>

            <a href="#" className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
              Coffee
            </a>

            <a href="#" className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
              Machines
            </a>

            <a href="#" className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
              Reviews
            </a>

            <a href="#" className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>

          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-5 py-2 rounded-full text-sm font-semibold">
            Cart (0)
          </button>

        </div>

      </nav>

      <section className="bg-[#F8F5F0] py-14 sm:py-16 lg:py-28 fade-up">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Freshly Roasted Premium Coffee
            </span>

            <h1 className="text-4xl sm:text-3xl sm:text-4xl lg:text-5xl lg:text-7xl font-bold leading-tight mt-6 tracking-tight">
              Brew Better
              <span className="text-blue-600 block">Mornings.</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
              Discover specialty coffee crafted for meaningful moments.
              Freshly roasted beans, premium brewing gear, and café-quality
              experiences delivered to your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105">
                Shop Coffee
              </button>

              <button className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all">
                Explore Machines
              </button>

            </div>

            <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-700 font-medium">

              <div>⭐ 4.8 Rating</div>
              <div>🚚 Free Shipping</div>
              <div>☕ Freshly Roasted</div>

            </div>

          </div>

          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-orange-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>

            <img
              src="https://mycoffeeco.com/cdn/shop/files/2_2a9618f9-f94b-47a2-a6e0-ba6d525518a4.jpg?v=1767379703&width=800"
              alt="Coffee"
              className="relative rounded-[24px] sm:rounded-[40px] shadow-2xl w-full object-cover h-[350px] sm:h-[450px] lg:h-[550px] float-animation hover:scale-[1.02] transition-all duration-500"
            />

          </div>

        </div>

      </section>

      <section className="py-14 sm:py-16 lg:py-20 fade up">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold tracking-tight">
              Shop By Category
            </h2>

            <p className="text-gray-600 mt-4">
              Everything you need for the perfect brew.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {categories.map((item, index) => (
              <div
                key={index}
                className="bg-[#F8F5F0] hover:bg-blue-600 hover:text-white rounded-3xl p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <div className="text-4xl mb-4">
                  {index === 0
                    ? '☕'
                    : index === 1
                    ? '🧊'
                    : index === 2
                    ? '📦'
                    : '⚙️'}
                </div>

                <h3 className="font-bold text-base sm:text-lg">{item}</h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="py-14 sm:py-16 lg:py-20 bg-[#F8F5F0] fade-up">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">

            <div>

              <h2 className="text-4xl font-bold tracking-tight">
                Best Sellers
              </h2>
              <p className="text-gray-600 mt-3">
                Freshly roasted and loved by coffee enthusiasts.
              </p>

            </div>

            <button className="text-blue-600 font-semibold hover:underline">
              View All Products →
            </button>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-[32px] overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-2xl"
              >
                <div className="overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 sm:h-60 sm:h-72 lg:h-80 w-full object-cover hover:scale-110 hover:scale-105 transition-all duration-500"
                  />

                </div>

                <div className="p-6">

                  <div className="flex items-center justify-between mb-4">

                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.roast}
                    </span>

                    <span className="text-sm font-medium text-gray-500">
                      ⭐ 4.8
                    </span>

                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold">{product.name}</h3>

                  <p className="text-gray-500 mt-2">{product.desc}</p>

                  <div className="flex items-center justify-between mt-6">

                    <p className="text-xl sm:text-2xl font-bold text-blue-600">
                      {product.price}
                    </p>

                    <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 text-white px-5 py-3 rounded-full text-sm font-semibold transition-all">
                      Add To Cart
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="py-24 bg-gray-900 text-white fade-up">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div>

            <img src="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg" alt="Coffee Machine" className="rounded-[24px] sm:rounded-[40px] w-full h-[320px] sm:h-[450px] lg:h-[320px] sm:h-[450px] lg:h-[500px] object-cover"/>

          </div>

          <div>

            <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-semibold">
              Premium Brewing Equipment
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 leading-tight tracking-tight">
              Brew Café Style Coffee At Home.
            </h2>

            <p className="text-gray-300 mt-6 text-base sm:text-lg leading-relaxed">
              Discover premium espresso machines, grinders, and brewing
              essentials designed for coffee lovers who value quality and
              precision.
            </p>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105">
              Explore Machines
            </button>

          </div>

        </div>

      </section>

      <section className="py-14 sm:py-16 lg:py-20 fade-up">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold tracking-tight">
              Coffee Types
            </h2>

            <p className="text-gray-600 mt-4">
              Find your perfect cup.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {coffeeTypes.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] hover:-translate-y-2 hover:shadow-2xl bg-[#F8F5F0]"
              >

                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-60 sm:h-72 w-full object-cover group-hover:scale-105 transition-all duration-500"
                  />

                </div>

                <div className="p-6 text-center">

                  <h3 className="text-xl sm:text-2xl font-bold">{item.name}</h3>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="py-14 sm:py-16 lg:py-20 bg-[#F8F5F0] fade-up">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold tracking-tight">
              What Customers Say
            </h2>

            <p className="text-gray-600 mt-4">
              Loved by coffee enthusiasts across India.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] hover:-translate-y-3 hover:shadow-2xl p-8 shadow-sm"
              >
                <div className="text-yellow-500 text-xl">★★★★★</div>

                <p className="text-gray-600 mt-5 leading-relaxed text-base sm:text-lg">
                  “{review.text}”
                </p>

                <h4 className="font-bold mt-6 text-base sm:text-lg">{review.name}</h4>

              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="py-24 fade-up">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop"
              alt="Coffee Beans"
              className="rounded-[24px] sm:rounded-[40px] h-[320px] sm:h-[450px] lg:h-[320px] sm:h-[450px] lg:h-[500px] object-cover w-full"
            />

          </div>

          <div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 leading-tight tracking-tight">
              Ethically Sourced.
              <span className="text-blue-600 block">
                Freshly Roasted.
              </span>
            </h2>

            <p className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed">
              We partner with passionate coffee growers to bring premium,
              sustainable coffee directly to your cup. Every roast is crafted
              to create memorable everyday moments.
            </p>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105">
              Learn More
            </button>

          </div>

        </div>

      </section>

      <section className="py-14 sm:py-16 lg:py-20 fade-up">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-blue-600 rounded-[24px] sm:rounded-[40px] p-6 sm:p-10 lg:p-16 text-center text-white hover:shadow-[0_0_60px_rgba(37,99,235,0.4)]">

            <h2 className="text-4xl lg:text-3xl sm:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Get 10% Off Your First Order
            </h2>

            <p className="mt-5 text-blue-100 text-base sm:text-lg">
              Subscribe to receive updates, special offers, and fresh coffee
              drops.
            </p>

            <div className="mt-10 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 outline-none"
              />

              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </section>

      <footer className="bg-gray-950 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqs1IKKFYYYbny0UB_GOOegzGeoBMmLfF5cQ&s" alt="Logo" className="h-10 sm:h-12 w-auto object-contain"/>
            
            <p className="text-gray-400 mt-5 leading-relaxed">
              Premium coffee crafted for meaningful mornings and everyday moments.
            </p>

          </div>

          <div>

            <h3 className="font-bold text-base sm:text-lg mb-5">Shop</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white hover:translate-x-2 cursor-pointer">Coffee Beans</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer">Machines</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer">Drip Bags</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer">Instant Coffee</li>
            </ul>

          </div>

          <div>

            <h3 className="font-bold text-base sm:text-lg mb-5">Company</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white hover:translate-x-2 cursor-pointer">About Us</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer">Reviews</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer">Contact</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer">FAQs</li>
            </ul>

          </div>

          <div>

            <h3 className="font-bold text-base sm:text-lg mb-5">Follow Us</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white hover:translate-x-2 cursor-pointer">Instagram</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer">Facebook</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer">Twitter</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer">YouTube</li>
            </ul>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          © 2026 My Coffee Co. All rights reserved.
        </div>

      </footer>

    </div>
    
  )
}
