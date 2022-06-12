import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="tmdb-footer flex h-48 items-center pl-10 pr-10 bg-tmdb-header-blue text-slate-50">
      <div className="tmdb-footer__logo mt-2 mr-10 cursor-pointer">
        <Link href="/" passHref>
          <a>
            <Image src="/logo.svg" height={40} width={140} alt="TMDB" />
          </a>
        </Link>
      </div>
    </div>
  );
}
