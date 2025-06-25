import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[var(--foreground)] text-white">
      <div className="max-w-[75rem] mx-auto flex items-center justify-between h-16">
        {/* Логотип слева */}
        <div className="flex-shrink-0">
          <a href="/">
            <Image src="/logo.svg" alt="Логотип" width={157} height={28} />
          </a>
        </div>

        {/* Меню по центру */}
        <nav className="hidden md:flex space-x-[1.5rem] text-[1rem] leading-[1.25rem]">
          <a href="#" className="hover:text-[var(--orange)]">
            Главная
          </a>
          <a href="#" className="hover:text-[var(--orange)]">
            Размещение
          </a>
          <a href="#" className="hover:text-[var(--orange)]">
            Блог
          </a>
          <a href="#" className="hover:text-[var(--orange)]">
            О нас
          </a>
          <a href="#" className="hover:text-[var(--orange)]">
            Faq
          </a>
        </nav>

        {/* Кнопка справа */}
        <div>
          <button className="bg-[var(--gray)] text-[var(--white)] text-[0.875rem] leading-[1.25rem] uppercase px-[1rem] py-[0.5rem] rounded-full font-bold hover:bg-[var(--white)] hover:text-[var(--background)]">
            Разместить сервер
          </button>
        </div>
      </div>
    </header>
  );
}
