"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export default function Home() {
  const signUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Welcome to ASKAI by Akin S. Sokpah 🇱🇷");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-red-700 p-6">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-2xl overflow-hidden">
        
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-center p-6">
          <h1 className="text-3xl font-black text-yellow-900">ASKAI</h1>
          <p className="text-sm text-yellow-800">
            Created by Akin S. Sokpah 🇱🇷
          </p>
        </div>

        <div className="p-6 space-y-4 bg-gray-50">
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full p-3 rounded-xl border-2"
          />

          <button
            onClick={signUp}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-yellow-900 font-bold py-3 rounded-xl shadow-lg"
          >
            Sign up with Google
          </button>

          <div className="text-xs text-gray-600 bg-white p-3 rounded-xl border-l-4 border-yellow-400">
            💛 Support ASKAI<br />
            MoMo: <b>+231889183557</b><br />
            Bank: <b>53020710015394</b><br />
            UBA Liberia
          </div>
        </div>

        <footer className="text-center text-xs text-gray-500 p-3">
          Facebook:{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61583456361691"
            className="text-blue-700"
          >
            Akin S. Sokpah
          </a>
        </footer>
      </div>
    </main>
  );
}
