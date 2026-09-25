"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi! How can I help with your project today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, threadId }),
      });
      const data = await res.json();

      if (data.threadId) setThreadId(data.threadId);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply ?? "Sorry, something went wrong." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble connecting right now." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-navy-700 text-gold-400 shadow-lg transition-colors hover:bg-navy-600 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-white sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[480px] sm:w-[340px] sm:max-w-[calc(100vw-2rem)] sm:rounded-lg sm:border sm:border-navy-900/10 sm:shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-navy-900/10 bg-navy-700 px-4 py-3 sm:py-3">
            <p className="text-sm font-semibold text-white">Brunswick Builders</p>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="p-1">
              <X className="h-5 w-5 text-white/70 hover:text-white sm:h-4 sm:w-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-white px-4 py-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed sm:max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-navy-700 text-white"
                      : "bg-navy-900/10 text-navy-900"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-lg bg-navy-900/10 px-3 py-2 text-sm text-navy-900/60">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-navy-900/10 bg-white px-3 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:pb-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              disabled={isLoading}
              className="flex-1 rounded-md border border-navy-900/15 bg-navy-900/[0.03] px-3 py-2 text-sm text-navy-900 placeholder:text-navy-900/40 focus:outline-none focus:ring-1 focus:ring-gold-400"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gold-400 text-navy-900 transition-colors hover:bg-gold-400/90 disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}