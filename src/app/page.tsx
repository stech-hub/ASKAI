"use client";

import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([
    {
      role: "assistant",
      content:
        "👋 Welcome to ASKAI! I am your smart assistant. Ask me anything.",
    },
  ]);

  const signUp = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    setUser(result.user);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input },
    ];

    setMessages(newMessages);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      { role: "assistant", content: data.reply },
    ]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-red-700 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 p-4 text-center">
          <h1 className="text-2xl font-black text-yellow-900">ASKAI</h1>
          <p className="text-xs text-yellow-800">
            Created by Akin S. Sokpah 🇱🇷
          </p>
        </div>

        {/* Auth */}
        {!user && (
          <div className="p-4">
            <button
              onClick={signUp}
              className="w-full bg-yellow-400 text-yellow-900 font-bold py-2 rounded-xl"
            >
              Sign in with Google
            </button>
          </div>
        )}

        {/* Chat */}
        {user && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl text-sm max-w-[85%] ${
                    m.role === "user"
                      ? "ml-auto bg-gradient-to-r from-blue-700 to-red-600 text-white"
                      : "bg-white border-l-4 border-yellow-400"
                  }`}
                >
                  {m.content}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 p-3 border-t">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask ASKAI anything..."
                className="flex-1 p-2 border rounded-xl"
              />
              <button
                onClick={sendMessage}
                className="bg-yellow-400 px-4 rounded-xl font-bold"
              >
                Send
              </button>
            </div>
          </>
        )}

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 p-2">
          Support ASKAI ❤️ MoMo: +231889183557 | UBA Liberia
        </div>
      </div>
    </main>
  );
}
