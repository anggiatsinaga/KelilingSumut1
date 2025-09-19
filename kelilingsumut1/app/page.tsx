"use client";

import { JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-yellow-600 select-none">
              Keliling<span className="text-gray-800">Sumut</span>
            </h1>

            {/* Tombol ☰ / ✕ */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-3xl text-gray-700"
              aria-label="Toggle Menu"
            >
              {open ? "✕" : "☰"}
            </button>

            {/* Menu Desktop */}
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#destinasi" className="hover:text-blue-600">
                Destinasi
              </a>
              <a href="#paket" className="hover:text-blue-600">
                Paket
              </a>
              <a href="#testimoni" className="hover:text-blue-600">
                Testimoni
              </a>
              <a href="#booking" className="hover:text-blue-600">
                Booking
              </a>
              <a href="#struktur" className="hover:text-blue-600">
                Struktur Organisasi
              </a>
              <Link href="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </div>

            <button className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Masuk
            </button>
          </div>

          {/* Menu Mobile */}
          {open && (
            <div className="flex flex-col gap-4 mt-4 bg-white shadow-md rounded-lg p-4 md:hidden animate-fadeIn">
              <a href="#destinasi" className="hover:text-blue-600">
                Destinasi
              </a>
              <a href="#paket" className="hover:text-blue-600">
                Paket
              </a>
              <a href="#testimoni" className="hover:text-blue-600">
                Testimoni
              </a>
              <a href="#booking" className="hover:text-blue-600">
                Booking
              </a>
              <a href="#struktur" className="hover:text-blue-600">
                Struktur Organisasi
              </a>
              <Link href="/about" className="hover:text-blue-600">
                About Us
              </Link>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Masuk
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-32 pb-16 max-w-6xl mx-auto">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-blue-700">
            Jelajahi Keindahan Sumut
          </h2>
          <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto md:mx-0">
            Temukan pantai, danau, dan pegunungan eksotis bersama kami.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-xl shadow-md hover:scale-105 transition">
            Mulai Petualangan
          </button>
        </div>
        <div className="flex-1 mt-12 md:mt-0">
          <Image
            src="/logoxx.svg"
            alt="Wisata Indonesia"
            width={420}
            height={320}
            className="mx-auto animate-pulse"
          />
        </div>
      </section>

      {/* DESTINASI */}
      <section id="destinasi" className="px-6 md:px-16 mt-20 max-w-6xl mx-auto">
  <h3 className="text-3xl font-bold text-center mb-10 text-blue-700">
    Destinasi Populer
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        name: "Pantai Bali",
       img: "/balian.jpg"
      },
      {
        name: "Danau Toba",
        img: "/danautoba.png"
      },
      {
        name: "Gunung Bromo",
        img: "/bromo.png"
      }
    ].map((place) => (
      <div
        key={place.name}
        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition hover:-translate-y-1"
      >
        <Image
          src={place.img}
          alt={place.name}
          width={600}
          height={400}
          className="h-56 w-full object-cover group-hover:scale-105 transition"
        />
        <div className="p-4 text-center">
          <h4 className="font-semibold text-lg">{place.name}</h4>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* PAKET */}
      <section id="paket" className="px-6 md:px-16 mt-28 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Paket Wisata Terbaik
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Paket Hemat",
              price: "Rp1.500.000",
              days: "3 Hari 2 Malam",
            },
            {
              title: "Paket Keluarga",
              price: "Rp3.000.000",
              days: "5 Hari 4 Malam",
            },
            {
              title: "Paket Premium",
              price: "Rp5.000.000",
              days: "7 Hari 6 Malam",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center"
            >
              <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
              <p className="text-blue-600 font-bold text-2xl mb-2">{p.price}</p>
              <p className="text-gray-600 mb-6">{p.days}</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONI */}
      <section id="testimoni" className="px-6 md:px-16 mt-28 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Apa Kata Mereka
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Rina",
              text: "Perjalanan sangat menyenangkan! Semua tertata rapi.",
            },
            {
              name: "Budi",
              text: "Pemandu wisata ramah dan tempatnya indah banget.",
            },
            {
              name: "Sari",
              text: "Worth it banget! Mau ikut lagi tahun depan.",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <p className="text-gray-600 mb-4 text-sm italic">“{t.text}”</p>
              <h4 className="font-semibold text-blue-600">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="px-6 md:px-16 mt-28 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Booking Sekarang
        </h3>
        <form className="bg-white shadow-xl rounded-2xl p-8 space-y-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full border rounded-lg p-3"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3"
          />
          <select className="w-full border rounded-lg p-3">
            <option>Pilih Paket</option>
            <option>Paket Hemat</option>
            <option>Paket Keluarga</option>
            <option>Paket Premium</option>
          </select>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Kirim Booking
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="mt-28 py-8 text-center text-sm text-gray-500 border-t">
        © 2025 KelilingSumut. Semua Hak Dilindungi.
      </footer>
    </main>
  );
}
