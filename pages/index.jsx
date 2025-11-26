 
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [form, setForm] = useState({ name: "", contact: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signup submitted for ${form.name}');
  };

  const categories = [
    { name: "Fruits", emoji: "🍎" },
    { name: "Seeds", emoji: "🌱" },
    { name: "Tools", emoji: "🔧" },
    { name: "Fertilizers", emoji: "🧪" },
  ];

  const listings = [
    {
      title: "Fresh Tomatoes - 25kg",
      price: "₱35/kg",
      image: "https://images.unsplash.com/photo-1604908177077-fdb2f04b30d9?auto=format&fit=crop&w=600&q=60",
    },
    {
      title: "Hybrid Corn Seeds - 10 packs",
      price: "₱350/pack",
      image: "https://images.unsplash.com/photo-1615486364131-86d9336bf907?auto=format&fit=crop&w=600&q=60",
    },
    {
      title: "Hand Tiller",
      price: "₱1,200",
      image: "https://images.unsplash.com/photo-1604147706283-08e7f79d3101?auto=format&fit=crop&w=600&q=60",
    },
    {
      title: "Organic Fertilizer - 5kg",
      price: "₱500",
      image: "https://images.unsplash.com/photo-1602526218273-2d9f7a2c8a41?auto=format&fit=crop&w=600&q=60",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 px-4 py-6">
      <header className="flex items-center justify-between max-w-5xl mx-auto mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-slate-800 to-emerald-600 text-white font-bold rounded-lg">
            TZ
          </div>
          <div>
            <h1 className="text-xl font-bold">TradeZone</h1>
            <p className="text-slate-500 text-sm">Connect. Trade. Grow.</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="rounded-2xl p-6 bg-cover bg-center text-white mb-8"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1602526218273-2d9f7a2c8a41?auto=format&fit=crop&w=1200&q=60')",
        }}
      >
        <div className="bg-black/40 p-4 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">Fast, Local Agri-Commerce</h2>
          <p>Buy, sell, and connect with local farmers and traders instantly.</p>
        </div>
      </motion.section>

      {/* Categories */}
      <section className="max-w-5xl mx-auto mb-8">
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="flex flex-col items-center justify-center border border-slate-200 rounded-xl py-4 hover:bg-emerald-50"
            >
              <span className="text-3xl mb-1">{cat.emoji}</span>
              <span className="text-sm font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Listings */}
      <section className="max-w-5xl mx-auto mb-8">
        <h3 className="text-lg font-semibold mb-3">Latest Listings</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {listings.map((item, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <img src={item.image} alt={item.title} className="w-full h-28 object-cover" />
              <div className="p-2">
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-emerald-600 text-sm">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="max-w-5xl mx-auto">
        <h3 className="text-lg font-semibold mb-3">Create your TradeZone account</h3>
        <form onSubmit={handleSubmit} className="grid gap-3 max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            className="border border-slate-200 p-2 rounded-lg"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact number"
            className="border border-slate-200 p-2 rounded-lg"
            value={form.contact}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create password"
            className="border border-slate-200 p-2 rounded-lg"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-emerald-600 text-white py-2 rounded-lg font-medium hover:bg-emerald-700"
          >
            Create Account
          </button>
        </form>
      </section>

      <footer className="text-slate-500 text-sm text-center mt-12">
        © 2025 TradeZone — Connect. Trade. Grow.
      </footer>
    </div>
  );
}
images.unsplash.com
You sent
old

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [form, setForm] = useState({ name: "", contact: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(Signup submitted for ${form.name});
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 px-4 py-6">
      <header className="flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-slate-800 to-emerald-600 text-white font-bold rounded-lg">
            TZ
          </div>
          <div>
            <h1 className="text-xl font-bold">TradeZone</h1>
            <p className="text-slate-500 text-sm">Connect. Trade. Grow.</p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto mt-8 space-y-16">
        <motion.section className="bg-slate-50 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold">Fast, lightweight agri-commerce</h2>
          <p className="text-slate-600 mt-2">
            Post produce, search listings, message sellers, and meet via Google Maps — built for mobile users.
          </p>
        </motion.section>

        <motion.section>
          <h3 className="text-xl font-semibold mb-3">Create your TradeZone account</h3>
          <form onSubmit={handleSubmit} className="grid gap-3 max-w-md">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="border border-slate-200 p-2 rounded-lg"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact number"
              className="border border-slate-200 p-2 rounded-lg"
              value={form.contact}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Create password"
              className="border border-slate-200 p-2 rounded-lg"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="bg-emerald-600 text-white py-2 rounded-lg font-medium hover:bg-emerald-700">
              Create Account
            </button>
          </form>
        </motion.section>
      </main>
    </div>
  );
}
