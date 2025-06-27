"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname(); // Например: "/pvp/interlude"
  const segments = pathname.split("/").filter(Boolean);

  const labelMap = {
    announces: "Анонсы серверов Lineage 2",
    pvp: "PVP-сервера",
    interlude: "Интерлюд хроники",
    faq: "Частые вопросы",
    about: "О проекте",
    blog: "Блог",
    // Добавить по необходимости
  };

  // Хлебные крошки:
  // 1) Иконка домика → ссылка на '/'
  // 2) 'Анонсы серверов Lineage 2' → тоже ссылка на '/'
  // 3) Остальные сегменты (если есть)

  const crumbs = [
    { label: "Анонсы серверов Lineage 2", href: "/" },
    ...segments.map((seg, i) => {
      const href = "/" + segments.slice(0, i + 1).join("/");
      return {
        label: labelMap[seg] || decodeURIComponent(seg),
        href,
      };
    }),
  ];

  return (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500">
      <div className="max-w-[75rem] mx-auto py-4 text-base leading-6">
        <ol className="flex items-center space-x-1 flex-wrap">
          {/* Иконка домика с ссылкой */}
          <li>
            <Link
              href="/"
              className="flex items-center text-gray-500 hover:text-gray-700"
            >
              <Image
                src="/icon-home.svg"
                alt="Домой"
                width={24}
                height={24}
                className="inline-block"
              />
            </Link>
          </li>

          <li>
            <span className="mx-1 text-gray-400">/</span>
          </li>

          {/* Анонсы серверов Lineage 2 */}
          <li>
            <Link href="/" className="hover:underline text-[var(--white)]">
              Анонсы серверов Lineage 2
            </Link>
          </li>

          {/* Если есть сегменты - показываем после */}
          {segments.length > 0 && (
            <li>
              <span className="mx-1 text-gray-400">/</span>
            </li>
          )}

          {segments.map((crumb, i) => {
            const isLast = i === segments.length - 1;
            return (
              <li key={crumb}>
                {!isLast ? (
                  <Link
                    href={"/" + segments.slice(0, i + 1).join("/")}
                    className="hover:underline text-[var(--white)]"
                  >
                    {labelMap[crumb] || decodeURIComponent(crumb)}
                  </Link>
                ) : (
                  <span className="text-gray-900">
                    {labelMap[crumb] || decodeURIComponent(crumb)}
                  </span>
                )}
                {!isLast && <span className="mx-1 text-gray-400">/</span>}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
