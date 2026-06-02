import { useGoogleAuth } from "@/components/extensions/google-auth/useGoogleAuth";
import { GoogleLoginButton } from "@/components/extensions/google-auth/GoogleLoginButton";
import { UserProfile } from "@/components/extensions/google-auth/UserProfile";

const AUTH_URL = "https://functions.poehali.dev/6173a44c-9687-4598-a813-c9df202dd34a";

export default function Index() {
  const auth = useGoogleAuth({
    apiUrls: {
      authUrl: `${AUTH_URL}?action=auth-url`,
      callback: `${AUTH_URL}?action=callback`,
      refresh: `${AUTH_URL}?action=refresh`,
      logout: `${AUTH_URL}?action=logout`,
    },
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            CONTENT LAB
          </a>
          <div className="flex items-center space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Проекты
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
            {auth.isAuthenticated && auth.user ? (
              <UserProfile user={auth.user} onLogout={auth.logout} />
            ) : (
              <GoogleLoginButton onClick={auth.login} isLoading={auth.isLoading} />
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              CON
              <br />
              TENT
            </h1>
            <p className="text-xl max-w-xl">
              Новости. Развлечения. Подкасты. Мы создаём контентные проекты, которые привлекают аудиторию и удерживают её внимание.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ПРОЕКТЫ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black group-hover:text-white text-8xl font-bold transition-colors duration-300">01</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">CityPulse — новости города</h3>
              <p className="text-neutral-400">Агрегатор локальных новостей с персонализированной лентой и рубриками по районам</p>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black group-hover:text-white text-8xl font-bold transition-colors duration-300">02</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">MemeVault — сборник мемов</h3>
              <p className="text-neutral-400">Развлекательная платформа с тестами, мемами и интерактивным контентом для молодой аудитории</p>
            </div>

            {/* Project 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black group-hover:text-white text-8xl font-bold transition-colors duration-300">03</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">WaveShow — подкаст-платформа</h3>
              <p className="text-neutral-400">Площадка для подкастов с архивом выпусков, текстовыми расшифровками и подпиской</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О НАС</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                CONTENT LAB — студия контентных проектов. Мы запускаем медиа, которые живут, растут и приносят реальную аудиторию.
              </p>
              <p className="mb-6">
                Новостные агрегаторы, развлекательные сайты, подкаст-платформы — мы строим проекты от идеи до первых тысяч читателей. Наш подход: чёткая редакционная концепция, удобный интерфейс и контент, который хочется читать и шерить.
              </p>
              <p className="mb-6">
                Работаем с командами, которые хотят занять нишу в медиапространстве — локальном или тематическом. Если у вас есть идея контентного проекта, мы знаем, как её реализовать.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Принципы</h3>
                  <ul className="space-y-2">
                    <li>Редакционная точность</li>
                    <li>Рост аудитории</li>
                    <li>Удобный UX</li>
                    <li>Виральный контент</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Форматы</h3>
                  <ul className="space-y-2">
                    <li>Новости и СМИ</li>
                    <li>Развлечения и тесты</li>
                    <li>Подкасты и видео</li>
                    <li>Тематические медиа</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ЗАПУСК</h2>
              <p className="text-xl mb-8">Есть идея контентного проекта? Расскажите — обсудим, как это реализовать.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:hello@contentlab.ru" className="hover:underline">
                    hello@contentlab.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+74951234567" className="hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Адрес</span>
                  <span>Москва, Россия</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm uppercase tracking-widest mb-2">
                    Формат проекта
                  </label>
                  <input
                    type="text"
                    id="project"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Новости, подкаст, развлечения..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Идея проекта
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Коротко опишите вашу идею"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Обсудить проект
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">2025 CONTENT LAB. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              VK
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}