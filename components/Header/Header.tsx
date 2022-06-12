import React from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems: { id: number; href: string; name: string }[] = [
  { id: 1, href: "/", name: "Popular" },
  { id: 2, href: "/upcoming", name: "Upcoming" },
  { id: 3, href: "/toprated", name: "Top Rated" },
];

export default function Header() {
  return (
    <div className="tmdb-header flex h-16 items-center pl-10 pr-10 bg-tmdb-header-blue text-slate-50">
      <div className="tmdb-header__logo mt-2 mr-10 cursor-pointer">
        <Link href="/" passHref>
          <a>
            <Image src="/logo.svg" height={40} width={140} alt="TMDB" />
          </a>
        </Link>
      </div>

      <div className="tmdb-header__menu">
        <ul className="flex">
          {menuItems.map(({ id, name, href }: any) => {
            return (
              <li className="mr-5" key={id}>
                <Link href={href}>
                  <a>{name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
