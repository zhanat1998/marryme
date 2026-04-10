import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    href: "/proposal",
    src: "/hero-bg.png",
    emoji: "💍",
    title: "Предложение руки и сердца",
    desc: "Создадим незабываемый романтический вечер",
    badge: "Хит",
  },
  {
    href: "/mama",
    src: "/mama.png",
    emoji: "💐",
    title: "Сюрприз для мамы",
    desc: "Подарите маме момент, который она запомнит навсегда",
    badge: null,
  },
  {
    href: "/birthday",
    src: "/bday3.png",
    emoji: "🎂",
    title: "День рождения",
    desc: "Яркое оформление и сюрпризы для именинника",
    badge: null,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold gradient-text">marryme_007</span>
            <span className="text-gray-500 text-xs ml-2 hidden sm:inline">Бишкек</span>
          </div>
          <a
            href="https://wa.me/996502454647"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors flex items-center gap-2"
          >
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
      <section className="relative pt-32 pb-12 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl mx-auto">
          <div className="text-5xl mb-4 animate-float">✨</div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Какие услуги вас
            <br />
            <span className="gradient-text">интересуют?</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Выберите категорию — мы создадим незабываемый момент
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-4 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.href + cat.title}
              href={cat.href}
              className="relative rounded-3xl overflow-hidden group cursor-pointer block card-hover"
            >
              <div className="relative h-96 w-full">
                <Image
                  src={cat.src}
                  alt={cat.title}
                  fill
                  className={`object-cover group-hover:scale-105 transition-transform duration-500 ${cat.src === "/mama.png" ? "object-bottom" : "object-center"}`}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  quality={100}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                {/* Badge */}
                {cat.badge && (
                  <div className="absolute top-4 left-4 gradient-bg text-white text-xs font-bold px-3 py-1 rounded-full">
                    {cat.badge}
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-4xl mb-3">{cat.emoji}</div>
                  <h2 className="text-white font-extrabold text-2xl mb-2">{cat.title}</h2>
                  <p className="text-gray-300 text-base">{cat.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-white text-base font-semibold">
                    Подробнее
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold mb-2">
              Как это <span className="gradient-text">работает</span>
            </h2>
            <p className="text-gray-400">Всего 4 простых шага</p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { num: "01", title: "Пишете нам", desc: "Напишите в WhatsApp — обсудим детали, дату и место." },
              { num: "02", title: "Выбираете пакет", desc: "Подберём оформление под ваш бюджет и пожелания." },
              { num: "03", title: "Мы всё делаем", desc: "Приезжаем, устанавливаем декор, настраиваем музыку." },
              { num: "04", title: "Вы наслаждаетесь", desc: "Вам остаётся только сказать главные слова 💍" },
            ].map((step) => (
              <div key={step.num} className="glass rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold gradient-text mb-2">{step.num}</div>
                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bold gradient-text text-xl">marryme_007</span>
          <p className="text-gray-500 text-sm">© 2025 Merry Me. Бишкек, Кыргызстан</p>
          <a
            href="https://www.instagram.com/marryme_007_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-fuchsia-400 transition-colors text-sm"
          >
            @marryme_007
          </a>
        </div>
      </footer>
    </main>
  );
}
