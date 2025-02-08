"use client";

import { useState } from "react";
import Button from "./Button";
import { FaBars } from "react-icons/fa6";
import { createPortal } from "react-dom";
import { FaRegWindowClose } from "react-icons/fa";

export default function TopBar() {
  return (
    <nav className="sticky top-0 w-full bg-[#13213F]/20 py-6 backdrop-blur-xl">
      <div className="mx-auto flex items-center justify-between px-4 lg:w-10/12 lg:px-0">
        <div className="flex items-center gap-8">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="size-12 lg:size-16"
          />
          <ListItem href="#pasar">Pasar</ListItem>
          <ListItem href="#tentang-kami">Tentang Kami</ListItem>
          <ListItem href="#kontak-kami">Kontak Kami</ListItem>
        </div>
        <div className="hidden gap-6 lg:flex">
          <Button variant="secondary">Sign In</Button>
          <Button variant="primary">Sign Up</Button>
        </div>
        <MoreButton />
      </div>
    </nav>
  );
}

function ListItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="hidden cursor-pointer rounded px-2 py-1 hover:bg-[#121b2e] lg:block"
    >
      {children}
    </a>
  );
}

function MoreButton() {
  const [expandTopBar, setExpandTopbar] = useState<boolean>(false);

  function handleMoreButton() {
    setExpandTopbar((prev) => !prev);
  }

  return (
    <div className="lg:hidden">
      <button onClick={handleMoreButton} aria-label="Toggle Menu">
        {expandTopBar ? (
          <FaRegWindowClose className="size-6" />
        ) : (
          <FaBars className="size-6" />
        )}
      </button>

      {expandTopBar &&
        createPortal(
          <div className="fixed inset-0 z-50 flex flex-col items-center bg-[#121b2e] py-8 text-white">
            <div className="top-0 flex w-full justify-between px-4">
              <p>Menu</p>
              <FaRegWindowClose className="size-6" onClick={handleMoreButton} />
            </div>
            <div className="flex h-full flex-col justify-center">
              <ListItemMobile href="#pasar">Pasar</ListItemMobile>
              <ListItemMobile href="#tentang-kami">Tentang Kami</ListItemMobile>
              <ListItemMobile href="#kontak-kami">Kontak Kami</ListItemMobile>
            </div>

            <div className="fixed bottom-4 flex w-full gap-6 px-4">
              <Button variant="secondary" extraClassName="w-full ">
                Sign In
              </Button>
              <Button variant="primary" extraClassName="w-full ">
                Sign Up
              </Button>
            </div>
          </div>,

          document.body,
        )}
    </div>
  );
}

function ListItemMobile({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="cursor-pointer py-3 text-center text-lg hover:text-[#DBA623]"
    >
      {children}
    </a>
  );
}
