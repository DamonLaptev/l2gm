import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-white text-[1rem] leading-[1.25rem] pt-12">
      <div className="max-w-[75rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Лого */}
        <a href="/">
          <Image src="/logo.svg" alt="Логотип" width={157} height={28} />
        </a>

        {/* Рекламодателям */}
        <div>
          <h4 className="text-[var(--text-tertiary)] font-bold uppercase mb-4">
            Рекламодателям
          </h4>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-[var(--orange)]">
                Размещение
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--orange)]">
                Добавить сервер
              </a>
            </li>
          </ul>
        </div>

        {/* Информация */}
        <div>
          <h4 className="text-[var(--text-tertiary)] font-bold uppercase mb-4">
            Информация
          </h4>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-[var(--orange)]">
                Анонс серверов
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--orange)]">
                Блог
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--orange)]">
                О нас
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--orange)]">
                Faq
              </a>
            </li>
          </ul>
        </div>

        {/* Телеграм */}
        <div>
          <div className="bg-[var(--gray)] p-2 rounded-lg inline-flex items-start gap-2">
            <Image
              src="/icon-tg.png"
              alt="Иконка Telegram"
              width={24}
              height={24}
            />
            <div>
              <p className="text-white font-medium">Телеграм-канал (1k+)</p>
              <a href="#" className="text-[var(--orange)] hover:underline">
                Подписаться
              </a>
            </div>
          </div>
          <p className="mt-3">
            <a href="#" className="hover:text-[var(--orange)]">
              Поддержка в Телеграм
            </a>
          </p>
        </div>
      </div>

      {/* Нижняя строка */}
      <div className="max-w-[75rem] mx-auto pt-8 pb-8 flex flex-wrap justify-between text-[var(--text-tertiary)]">
        <span>© 2025. L2GM.COM</span>
        <a href="/cookie-policy" className="hover:underline">
          Файлы Cookie
        </a>
        <a href="/privacy-policy" className="hover:underline">
          Политика конфиденциальности
        </a>
        <a href="/user-agreement" className="hover:underline">
          Пользовательское соглашение
        </a>
        <a href="/sitemap" className="hover:underline">
          Карта сайта
        </a>
      </div>
    </footer>
  );
}
