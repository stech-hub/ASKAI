"use client";

import { useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-600 via-white to-blue-600 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-8 text-center">
        
        {/* Logo / Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          ASK<span className="text-yellow-500">AI</span>
        </h1>

        <p className="mt-3 text-gray-600 text-lg">
          Smart AI Assistant for Learning, Coding & Creativity
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Created by <strong>Akin S. Sokpah</strong> from Liberia 🇱🇷
        </p>

        {/* Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {[
            "AI Chat Assistant",
            "Free Computer Science Courses",
            "Google Authentication",
            "Email Notifications",
            "Firebase Powered",
            "OpenAI Integration",
            "Mobile Friendly UI",
            "Fast & Secure",
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-100 rounded-lg p-3"
            >
              <span className="text-green-600 text-xl">✔</span>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-10">
          <button
            onClick={() => setLoading(true)}
            className="w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold text-lg shadow-lg hover:scale-105 transition"
          >
            {loading ? "Loading..." : "Start Using ASKAI"}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} ASKAI • Built with ❤️ in Liberia
        </div>
      </div>
    </main>
  );
}
