"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface WorkNavbarProps {
  current: string;
}

interface NavItem {
  label: string;
  href: string;
  key: string;
}

const creativeWorks: NavItem[] = [
  { label: "Films", href: "/films-and-pitch-decks/Films", key: "films" },
  { label: "Set Design", href: "/portfolio/SetDesign", key: "setdesign" },
  { label: "Makeup", href: "/portfolio/Makeup", key: "makeup" },
  { label: "Magazine", href: "/portfolio/Magazine", key: "magazine" },
];

const marketing: NavItem[] = [
  { label: "Marketing Internships", href: "/portfolio/Marketing", key: "marketing" },
  { label: "Pitch Decks", href: "/films-and-pitch-decks/pitch-decks", key: "pitch-decks" },
];

const linkClass = (active: boolean) =>
  active
    ? "text-3xl underline font-pt-serif text-red-500"
    : "text-3xl font-pt-serif hover:text-red-400";

interface DropdownProps {
  label: string;
  items: NavItem[];
  current: string;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function Dropdown({ label, items, current, open, onToggle, onClose }: DropdownProps) {
  const active = items.some((item) => item.key === current);

  return (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={onToggle}
        className={`${linkClass(active)} flex items-center gap-1 cursor-pointer`}
      >
        {label}
        <ChevronDown className={`size-6 duration-150 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul
          role="menu"
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 min-w-full w-max bg-neutral-900 text-white border border-neutral-700 rounded-lg shadow-lg py-2 z-20"
        >
          {items.map((item) => (
            <li key={item.key} role="none">
              <Link
                role="menuitem"
                href={item.href}
                onClick={onClose}
                className={`block px-5 py-2 text-xl font-pt-serif hover:bg-neutral-800 hover:text-red-400 ${
                  item.key === current ? "underline text-red-400" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function WorkNavbar({ current }: WorkNavbarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const toggle = (name: string) => setOpenMenu((prev) => (prev === name ? null : name));

  return (
    <nav
      ref={navRef}
      className="flex md:flex-row flex-col gap-4 items-center justify-center z-10 md:mt-40 mt-20 mb-20"
    >
      <Link href="/portfolio/all" className={linkClass(current === "all")}>
        All
      </Link>
      <Dropdown
        label="Creative Works"
        items={creativeWorks}
        current={current}
        open={openMenu === "creative"}
        onToggle={() => toggle("creative")}
        onClose={() => setOpenMenu(null)}
      />
      <Dropdown
        label="Marketing"
        items={marketing}
        current={current}
        open={openMenu === "marketing"}
        onToggle={() => toggle("marketing")}
        onClose={() => setOpenMenu(null)}
      />
    </nav>
  );
}
