"use client";

import Image from "next/image";
import { useState } from "react";

type Reel = {
  src: string;
  caption: string;
  date: string;
  label: string;
  link: string;
};

export default function ReelsGallery({ reels }: { reels: Reel[] }) {
  const [active, setActive] = useState<Reel | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reels.map((r) => (
          <button
            key={r.link + r.date}
            onClick={() => setActive(r)}
            className="relative rounded-2xl overflow-hidden card-hover group cursor-pointer block text-left w-full"
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={r.src}
                alt={r.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={100}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Instagram icon */}
              <div className="absolute top-4 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7 drop-shadow-lg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-lg leading-tight">{r.label}</p>
                <p className="text-gray-300 text-sm mt-1">{r.date}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* MODAL */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <div
            className="relative z-10 w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            >
              ✕
            </button>

            {/* Instagram embed */}
            <iframe
              src={`${active.link}embed/`}
              className="w-full"
              style={{ height: "600px", border: "none" }}
              allowFullScreen
              scrolling="no"
            />

            {/* Open in Instagram button */}
            <a
              href={active.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-bold py-4 text-white"
              style={{ background: "linear-gradient(90deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
            >
              Открыть в Instagram →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
