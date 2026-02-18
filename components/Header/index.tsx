"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuData from "./menuData";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-defaultBg/95 backdrop-blur-sm">
      <div className="container">
        <div className="flex flex-wrap items-center gap-8 py-4 md:gap-10 md:py-5">
              <Link href="/" 
            className="flex shrink-0 items-center focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 rounded">
                <Image
                  src="/images/logo/logo-corso-uomini.png"
                  alt="logo"
                  width={80}
                  height={20}
                />
              </Link>
          <nav className="flex items-center">
            <ul className="flex flex-wrap items-center gap-6 md:gap-8">
              {menuData.map((menuItem) => (
                <li key={menuItem.id}>
                  <Link
                    href={menuItem.path}
                    className={`whitespace-nowrap text-xs font-medium uppercase tracking-wide transition-colors md:text-sm ${
                      pathname === menuItem.path
                        ? "text-primary"
                        : "text-dark hover:text-primary"
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
