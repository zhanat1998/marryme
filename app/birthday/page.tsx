import Image from "next/image";
import Link from "next/link";

const WHATSAPP = "https://wa.me/996502454647";

export default function BirthdayPage() {
  const packages = [
    {
      tag: "Эконом",
      name: "Happy Birthday!",
      oldPrice: "10 000",
      price: "6 900",
      highlight: false,
      border: "border-pink-800/40",
      includes: [
        { icon: "🤍", text: "Большое сердце (красное или белое)" },
        { icon: "🥳", text: "Надпись Happy Birthday" },
        { icon: "🧨", text: "Холодные фонтаны — 4 шт." },
        { icon: "⬜️", text: "Дорожка (белая или красная)" },
        { icon: "🌹", text: "Живые лепестки роз" },
        { icon: "🕯️", text: "Декоративные свечи" },
        { icon: "💐", text: "Декоративные цветы" },
        { icon: "🪟", text: "Стеклянные подставки" },
        { icon: "🎼", text: "Музыкальное сопровождение" },
      ],

    },
    {
      tag: "Премиум",
      name: "Happy Birthday!",
      oldPrice: "13 000",
      price: "8 900",
      highlight: true,
      border: "border-fuchsia-500",
      includes: [
        { icon: "🤍", text: "Большое сердце (красное или белое)" },
        { icon: "🥳", text: "Надпись Happy Birthday" },
        { icon: "🌀", text: "Вертушка с холодными фонтанами" },
        { icon: "🧨", text: "Холодные фонтаны — 4 шт." },
        { icon: "⬜️", text: "Дорожка (белая или красная)" },
        { icon: "🌹", text: "Живые лепестки роз" },
        { icon: "🕯️", text: "Декоративные свечи" },
        { icon: "💐", text: "Декоративные цветы" },
        { icon: "🪟", text: "Стеклянные подставки" },
        { icon: "🎼", text: "Музыкальное сопровождение" },
      ],

    },
  ];

  const reels = [
    {
      src: "/bday1.png",
      label: "Сюрприз с огромным мишкой 🧸",
      desc: "Большой белый медведь, розы и сердце у воды — она точно не ожидала",
    },
    {
      src: "/bday2.png",
      video: "/bday-video",
      label: "Подарок от близких 🎁",
      desc: "Самые родные устроили незабываемый сюрприз — холодные фонтаны, свет и любовь",
    },
    {
      src: "/bday3.png",
      label: "Торт с живыми цветами 🌸",
      desc: "Нежный розовый торт с розами и золотым декором — деталь, которая запомнится",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 glass px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-semibold text-sm">Назад</span>
          </Link>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.856L.054 23.447a.75.75 0 00.902.902l5.591-1.478A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.953-1.355l-.355-.211-3.676.971.977-3.565-.23-.368A9.716 9.716 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            <span className="hidden sm:inline">+996 502 454 647</span>
            <span className="sm:hidden">Написать</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="/birthday-hero.png" alt="День рождения" fill
            className="object-cover object-center" priority  />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-6xl mb-6 animate-float">🎂</div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Сделайте день рождения
            <br />
            <span className="gradient-text">по-настоящему особым</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            marryme_007 — оформим праздник под ключ. Сердце Happy Birthday,
            живые лепестки, холодные фонтаны, свечи и музыка — всё будет идеально.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="gradient-bg text-white font-bold px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity">
              Посмотреть пакеты
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="glass text-white font-bold px-8 py-4 rounded-2xl text-lg hover:bg-white/10 transition-colors border border-white/10">
              Бесплатная консультация
            </a>
          </div>
          <div className="inline-flex items-center gap-3 mt-8 glass rounded-2xl px-6 py-3">
            <span className="text-white font-bold text-lg">Выезд и установка по городу — бесплатно</span>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-8 px-0">
        <div className="w-full">
          <div className="text-center mb-6 px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Наши <span className="gradient-text">работы</span>
            </h2>
            <p className="text-gray-400">Каждый праздник — с душой и вниманием к деталям</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {reels.map((r) => (
              <div key={r.label} className="relative overflow-hidden card-hover">
                <div className="relative aspect-[4/3] w-full">
                  {r.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    >
                      <source src={`${r.video}.webm`} type="video/webm" />
                      <source src={`${r.video}.mp4`} type="video/mp4" />
                    </video>
                  ) : (
                    <Image src={r.src} alt={r.label} fill
                      className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-bold text-2xl leading-tight">{r.label}</p>
                    <p className="text-gray-300 text-sm mt-1">{r.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a href="https://www.instagram.com/marryme_007_/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 glass px-6 py-3 rounded-2xl hover:opacity-80 transition-opacity">
              <span className="text-white font-semibold">Больше фото и видео</span>
              <span className="gradient-text font-bold">@marryme_007</span>
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="gradient-text">Пакеты и цены</span>
            </h2>
            <p className="text-gray-400 text-lg">Выберите оформление — мы позаботимся обо всём остальном</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.tag}
                className={`relative rounded-3xl p-8 border ${pkg.border} card-hover ${
                  pkg.highlight ? "bg-gradient-to-b from-fuchsia-900/60 to-purple-900/60" : "glass"
                }`}>
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-bg text-white text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap">
                    ✨ ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className="mb-6">
                  <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider">{pkg.tag}</span>
                  <h3 className="text-2xl font-extrabold mt-1">{pkg.name}</h3>
                </div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-5xl font-extrabold">{pkg.price}</span>
                  <div>
                    <div className="text-gray-400 text-sm">сом</div>
                    <div className="text-gray-400 text-sm line-through">{pkg.oldPrice} сом</div>
                  </div>
                </div>
                <div className="mb-8">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">Что входит:</p>
                  <ul className="space-y-2.5">
                    {pkg.includes.map((item) => (
                      <li key={item.text} className="flex items-start gap-3 text-sm">
                        <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                        <span className="text-gray-200">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className={`block text-center font-bold py-3.5 rounded-2xl transition-opacity hover:opacity-90 ${
                    pkg.highlight ? "bg-white text-purple-700" : "gradient-bg text-white"
                  }`}>
                  Заказать этот пакет
                </a>
                <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mt-3">
                  <span>🚗</span>
                  <span>Выезд и установка по городу — бесплатно</span>
                </div>
              </div>
            ))}
          </div>

          {/* Доп. услуги */}
          <div className="mt-8 glass rounded-3xl p-8 border border-fuchsia-800/30">
            <p className="text-fuchsia-400 text-xs uppercase tracking-wider font-bold mb-4">✨ Дополнительные услуги</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-5 py-3">
                <span className="text-2xl">🎆</span>
                <div>
                  <p className="text-white font-semibold">Салют</p>
                  <p className="text-fuchsia-400 font-bold">от 3 000 сом</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-5 py-3">
                <span className="text-2xl">🧨</span>
                <div>
                  <p className="text-white font-semibold">Холодные фонтаны</p>
                  <p className="text-fuchsia-400 font-bold">500 сом/шт</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-5 py-3">
                <span className="text-2xl">🌀</span>
                <div>
                  <p className="text-white font-semibold">Вертушка</p>
                  <p className="text-fuchsia-400 font-bold">2 500 сом</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-600/10 to-purple-600/10 pointer-events-none" />
            <div className="relative">
              <div className="text-6xl mb-4 animate-float">🎂</div>
              <h2 className="text-4xl font-extrabold mb-4">
                Готовы устроить <span className="gradient-text">незабываемый праздник?</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Напишите нам — обсудим детали и создадим день рождения, который запомнится навсегда.
              </p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 gradient-bg text-white font-bold px-10 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity">
                💬 Написать в WhatsApp
              </a>
              <p className="text-gray-600 text-sm mt-4">Ответим в течение 5 минут</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bold gradient-text text-xl">marryme_007</span>
          <p className="text-gray-400 text-sm">© 2025 marryme_007. Бишкек, Кыргызстан</p>
          <a href="https://www.instagram.com/marryme_007_/" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-fuchsia-400 transition-colors text-sm">
            @marryme_007
          </a>
        </div>
      </footer>
    </main>
  );
}
