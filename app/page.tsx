'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
const [loginOpen, setLoginOpen] = useState(false)
const [cartOpen, setCartOpen] = useState(false)
const [productOpen, setProductOpen] = useState(false)
const [cartCount, setCartCount] = useState(0)
const [cartItems, setCartItems] = useState<any[]>([])
const [selectedSize, setSelectedSize] = useState('M')
const products = [
  { name: 'Signature Merino', price: 89, image: '/product-1.jpg' },
  { name: 'Performance Blend', price: 109, image: '/product-2.jpg' },
  { name: 'Cashmere Classic', price: 149, image: '/product-3.jpg' },
  { name: 'Everyday Essential', price: 69, image: '/product-4.jpg' },
]

const [selectedProduct, setSelectedProduct] = useState(products[0])
const [language, setLanguage] = useState('EN')
  return (
    <motion.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
  className="min-h-screen bg-[#0d0a07] text-[#f8f1e9] relative overflow-hidden"
>
<div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#3a2414] opacity-20 blur-[180px] rounded-full"></div>

<div className="absolute bottom-[-300px] right-[-200px] w-[500px] h-[500px] bg-[#6b3e1d] opacity-10 blur-[200px] rounded-full"></div>
<div className="fixed top-0 left-0 w-full z-50 bg-[#f8f1e9] text-black text-[10px] uppercase tracking-[0.3em] py-2 text-center">
  Free shipping from €60 · Premium quality · 14-day return policy
</div>
<nav className="fixed top-8 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10 transition-all duration-700">
  <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
    
    <h1 className="tracking-[0.3em] text-sm uppercase">
      SOLENNECLUB
    </h1>

    <div className="flex gap-8 text-xs uppercase tracking-[0.2em] items-center">
 <a href="#collection">Collection</a>
<a href="#about">About</a>
<a href="#journal">Journal</a>
<a href="#contact">Contact</a>
 <button onClick={() => setLoginOpen(true)}>Account</button>
  <button onClick={() => setCartOpen(true)}>Cart ({cartCount})</button>

  <select
  value={language}
  onChange={(e) => setLanguage(e.target.value)}
  className="bg-transparent border border-[#f8f1e9]/30 px-3 py-2 text-xs uppercase tracking-[0.2em] outline-none"
>
    <option>EN</option>
    <option>DE</option>
    <option>FR</option>
    <option>ES</option>
  </select>
</div>

  </div>
</nav>
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
>
<img
  src="/hero.jpg"
  className="absolute inset-0 w-full h-full object-cover opacity-20"
  alt=""
/>
        <p className="uppercase tracking-[0.4em] text-xs mb-6 text-[#c8b8a8]">
          {
  language === 'EN'
    ? 'Premium Socks. Designed to move. Made to stay.'
    : language === 'DE'
    ? 'Premium Socken. Entwickelt für Bewegung.'
    : language === 'FR'
    ? 'Chaussettes premium. Conçues pour bouger.'
    : 'Calcetines premium. Diseñados para moverse.'
}
        </p>

        <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-[0.25em] font-light">
          SOLENNECLUB
        </h1>

        <button className="mt-12 px-10 py-4 border border-[#f8f1e9]/60 text-sm tracking-[0.3em] uppercase hover:bg-[#f8f1e9] hover:text-black transition-all duration-500 hover:scale-105">
          Enter
        </button>
      </motion.section>

      <section id="about" className="border-t border-[#f8f1e9]/20 px-8 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-[#c8b8a8] mb-6">
            Our Philosophy
          </p>
          <h2 className="text-5xl md:text-6xl font-light leading-tight">
            Not loud.
            <br />
            Not perfect.
            <br />
            Only real.
          </h2>
<p className="mt-8 max-w-xl text-[#c8b8a8] leading-relaxed">
  SOLENNECLUB is built around movement, texture and quiet confidence.
  Each piece is designed as a subtle extension of personal style — not to shout,
  but to stay.
</p>
<div className="mt-10 grid grid-cols-3 gap-4 text-xs uppercase tracking-[0.25em] text-[#c8b8a8]">
  <div className="border-t border-[#f8f1e9]/20 pt-4">
    Quiet luxury
  </div>
  <div className="border-t border-[#f8f1e9]/20 pt-4">
    Made to move
  </div>
  <div className="border-t border-[#f8f1e9]/20 pt-4">
    Built to stay
  </div>
</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {['Core Collection', 'Performance', 'Retro Collection', 'Limited Editions'].map((item, index) => (
            <div
  key={item}
  onClick={() => {
  setSelectedProduct(products[index])
  setProductOpen(true)
}}
  className="h-56 border border-[#f8f1e9]/20 p-6 flex items-end relative overflow-hidden hover:-translate-y-2 hover:border-[#f8f1e9]/50 transition-all duration-700 group"
>
  <img
    src={`/product-${index + 1}.jpg`}
    alt={item}
    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-700"
  />

  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-700"></div>

  <div className="relative z-10">
              <div>
                <h3 className="uppercase tracking-[0.2em] text-sm">{item}</h3>
                <p className="mt-3 text-xs text-[#c8b8a8] uppercase tracking-[0.2em]">
                  Discover
                </p>
              </div>
            </div>
</div>
          ))}
        </div>
      </section>
    <section id="collection" className="px-8 py-24 border-t border-[#f8f1e9]/20">
  <div className="max-w-7xl mx-auto">
    <div className="flex justify-between items-end mb-12">
      <div>
        <p className="uppercase tracking-[0.3em] text-xs text-[#c8b8a8] mb-4">
          Featured Products
        </p>
        <h2 className="text-4xl md:text-6xl font-light">
          Made to move.
        </h2>
      </div>

      <a className="text-xs uppercase tracking-[0.25em] text-[#c8b8a8] hover:text-[#f8f1e9] transition">
        View all
      </a>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {products.map((product, index) => (
      <div
  key={product.name}
  onClick={() => {
  setSelectedProduct(product)
  setProductOpen(true)
}}
  className="cursor-pointer group border border-[#f8f1e9]/20 bg-[#160f0a] hover:bg-[#24170f] hover:-translate-y-2 hover:scale-[1.01] hover:border-[#f8f1e9]/50 transition-all duration-700"
>
          <div className="h-72 bg-[#2a1d14] flex items-center justify-center overflow-hidden">
            <img
  src={product.image}
alt={product.name}
  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
/>
          </div>

          <div className="p-5">
            <div className="flex justify-between gap-4">
              <h3 className="text-sm uppercase tracking-[0.18em]">
                {product.name}
              </h3>
              <button className="text-[#c8b8a8] hover:text-[#f8f1e9] hover:scale-125 transition duration-300">
                ♥
              </button>
            </div>

            <p className="mt-3 text-[#c8b8a8]">
              €{index === 0 ? '89' : index === 1 ? '109' : index === 2 ? '149' : '69'}
            </p>

            <div className="mt-5 flex justify-between items-center">
              <div className="flex gap-3 text-xs text-[#c8b8a8]">
                <span>S</span>
                <span>M</span>
                <span>L</span>
              </div>

              <button className="text-xs uppercase tracking-[0.2em] border border-[#f8f1e9]/30 px-4 py-2 hover:bg-[#f8f1e9] hover:text-black transition">
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section id="journal" className="px-8 py-24 border-t border-[#f8f1e9]/20">
  <div className="max-w-7xl mx-auto">
    <p className="uppercase tracking-[0.3em] text-xs text-[#c8b8a8] mb-4">
      Journal
    </p>

    <h2 className="text-4xl md:text-6xl font-light mb-12">
      Notes on movement.
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        'The quiet language of essentials',
        'Why texture matters',
        'Designed to stay'
      ].map((post, index) => (
        <div
  key={post}
  className="border border-[#f8f1e9]/20 p-8 min-h-64 flex flex-col justify-between relative overflow-hidden group transition duration-700"
>

<img
  src={`/product-${index + 1}.jpg`}
  alt={post}
  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition duration-700"
/>

<div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-700"></div>

<div className="relative z-10 flex flex-col justify-between h-full">

  <p className="uppercase tracking-[0.25em] text-xs text-[#c8b8a8]">
    Editorial
  </p>

  <h3 className="text-2xl font-light">
    {post}
  </h3>

  <p className="uppercase tracking-[0.2em] text-xs text-[#c8b8a8]">
    Read more
  </p>

</div>
</div>
      ))}
    </div>
  </div>
</section>
<section id="contact" className="px-8 py-24 border-t border-[#f8f1e9]/20">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <p className="uppercase tracking-[0.3em] text-xs text-[#c8b8a8] mb-4">
        Join the movement
      </p>
      <h2 className="text-4xl md:text-6xl font-light">
        Stay connected.
      </h2>
    </div>

    <div className="flex gap-3">
      <input
        type="email"
        placeholder="Your email address"
        className="w-full bg-transparent border border-[#f8f1e9]/30 px-5 py-4 text-sm outline-none placeholder:text-[#c8b8a8] focus:border-[#f8f1e9]"
      />
      <button className="border border-[#f8f1e9]/40 px-6 py-4 uppercase tracking-[0.2em] text-xs hover:bg-[#f8f1e9] hover:text-black transition">
        Subscribe
      </button>
    </div>
  </div>
</section>

<footer className="px-8 py-12 border-t border-[#f8f1e9]/20 text-xs uppercase tracking-[0.2em] text-[#c8b8a8]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
    <div>
      SOLENNECLUB © 2026
    </div>

    <div className="flex gap-6">
      <a href="#">Shipping</a>
      <a href="#">Returns</a>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>

    <div className="flex gap-6">
      <a href="#">Instagram</a>
      <a href="#">TikTok</a>
      <a href="#">Pinterest</a>
    </div>
  </div>
</footer>
{loginOpen && (
  <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-6">
    <div className="w-full max-w-md border border-[#f8f1e9]/30 bg-[#0d0a07] p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="uppercase tracking-[0.25em] text-sm">Account Login</h2>
        <button onClick={() => setLoginOpen(false)}>✕</button>
      </div>

      <input
        type="email"
        placeholder="Email address"
        className="w-full mb-4 bg-transparent border border-[#f8f1e9]/30 px-4 py-4 outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 bg-transparent border border-[#f8f1e9]/30 px-4 py-4 outline-none"
      />

<button className="w-full border border-[#f8f1e9]/40 py-4 uppercase tracking-[0.25em] text-xs hover:bg-[#f8f1e9] hover:text-black transition">
  Login
</button>

      <p className="mt-6 text-xs text-[#c8b8a8] text-center">
        Create account · Forgot password
      </p>
    </div>
  </div>
)}
{productOpen && (
  <div className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
    <div className="w-full max-w-5xl border border-[#f8f1e9]/20 bg-[#0d0a07] grid md:grid-cols-2">
      
      <div className="min-h-[520px] bg-[#1a140f] flex items-center justify-center">
        <img
  src={selectedProduct.image}
  alt="Signature Merino"
  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
/>
      </div>

      <div className="p-12 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-10">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-[#c8b8a8] mb-4">
                SOLENNECLUB
              </p>

              <h2 className="text-4xl font-light">
  {selectedProduct.name}
</h2>
            </div>

            <button onClick={() => setProductOpen(false)} className="text-2xl">
              ×
            </button>
          </div>

          <div className="space-y-6 mb-10">

  <p className="text-[#c8b8a8] leading-relaxed text-lg">
    Designed for movement, silence and presence.
    Every SOLENNECLUB piece balances comfort with understated luxury.
  </p>

  <div className="space-y-2 text-sm uppercase tracking-[0.2em] text-[#c8b8a8]">

    <div className="flex justify-between border-b border-[#f8f1e9]/10 pb-2">
      <span>Material</span>
      <span>Merino Blend</span>
    </div>

    <div className="flex justify-between border-b border-[#f8f1e9]/10 pb-2">
      <span>Fit</span>
      <span>Relaxed</span>
    </div>

    <div className="flex justify-between border-b border-[#f8f1e9]/10 pb-2">
      <span>Origin</span>
      <span>Germany</span>
    </div>

    <div className="flex justify-between border-b border-[#f8f1e9]/10 pb-2">
      <span>Shipping</span>
      <span>2–4 Days</span>
    </div>

  </div>

</div>

          <p className="text-2xl mb-10">
            €{selectedProduct.price}
          </p>
<p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#c8b8a8]">
  In stock · Ready to ship
</p>

          <div className="flex gap-4 mb-10">
          {['S', 'M', 'L'].map((size) => (
  <button
    key={size}
    onClick={() => setSelectedSize(size)}
    className={`w-14 h-14 border transition ${
      selectedSize === size
        ? 'border-[#f8f1e9] bg-[#f8f1e9] text-black'
        : 'border-[#f8f1e9]/20 hover:border-[#f8f1e9]'
    }`}
  >
    {size}
  </button>
))}
          </div>
        </div>

        <button
  onClick={() => {
    setCartCount(cartCount + 1)
    setCartItems([
      ...cartItems,
      {
        name: selectedProduct.name,
price: selectedProduct.price,
image: selectedProduct.image,
size: selectedSize
      }
    ])
    setProductOpen(false)
    setCartOpen(true)
  }}
  className="w-full border border-[#f8f1e9]/40 py-5 uppercase tracking-[0.3em] text-sm hover:bg-[#f8f1e9] hover:text-black transition-all duration-700 hover:scale-[1.02] active:scale-[0.98]"
>
  Add To Cart
</button>
      </div>
    </div>
  </div>
)}
{cartOpen && (
  <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex justify-end">
    <div className="w-full max-w-md h-full border-l border-[#f8f1e9]/30 bg-[#0d0a07] p-8">
      <div className="flex justify-between items-center mb-10">
        <h2 className="uppercase tracking-[0.25em] text-sm">Your Cart</h2>
        <button onClick={() => setCartOpen(false)}>✕</button>
      </div>

     {cartItems.length === 0 ? (
  <div className="border border-[#f8f1e9]/20 p-6 mb-6">
    <p className="uppercase tracking-[0.2em] text-sm">
      Your cart is empty.
    </p>

    <p className="mt-3 text-sm text-[#c8b8a8]">
      Add products to begin your SOLENNECLUB journey.
    </p>
  </div>
) : (
  <div className="space-y-4 mb-6">
    {cartItems.map((item, index) => (
      <div
        key={index}
        className="border border-[#f8f1e9]/20 p-4"
      >
        <div className="flex justify-between mb-2">
          <h3 className="uppercase tracking-[0.15em]">
            {item.name}
          </h3>

          <p>€{item.price}</p>
        </div>

        <p className="text-sm text-[#c8b8a8]">
          Size: {item.size}
        </p>
<button
  onClick={() => {
    setCartItems(cartItems.filter((_, itemIndex) => itemIndex !== index))
    setCartCount(cartCount - 1)
  }}
  className="mt-4 text-xs uppercase tracking-[0.2em] text-[#c8b8a8] hover:text-[#f8f1e9] transition"
>
  Remove
</button>
      </div>
    ))}
  </div>
)}
{cartItems.length > 0 && (
  <div className="border-t border-[#f8f1e9]/20 pt-6 mb-6">
    <div className="flex justify-between text-sm uppercase tracking-[0.2em]">
      <span>Total</span>

      <span>
        €{cartItems.reduce((total, item) => total + item.price, 0)}
      </span>
    </div>
  </div>
)}
      <button className="w-full border border-[#f8f1e9]/40 py-4 uppercase tracking-[0.25em] text-xs hover:bg-[#f8f1e9] hover:text-black transition">
        Continue Shopping
      </button>
<button
  className="w-full mt-4 bg-[#f8f1e9] text-black py-4 uppercase tracking-[0.25em] text-xs hover:opacity-80 transition"
>
  Checkout
</button>
    </div>
  </div>
)}
</motion.main>
  )
}