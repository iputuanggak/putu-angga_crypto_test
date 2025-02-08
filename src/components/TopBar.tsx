import Button from "./Button";

export default function TopBar() {
  return (
    <nav className="py-6  bg-[#13213F]/20 backdrop-blur-xl  sticky top-0 ">
      <div className="flex justify-between items-center w-10/12 mx-auto">
        <div className="flex gap-8 items-center ">
          <img src="/images/logo.png" alt="" className="size-16" />
          <ListItem href="#pasar">Pasar</ListItem>
          <ListItem href="#tentang-kami">Tentang Kami</ListItem>
          <ListItem href="#kontak-kami">Kontak Kami</ListItem>
        </div>
        <div className="flex gap-6">
          <Button variant="secondary">Sign In</Button>
          <Button variant="primary">Sign Up</Button>
        </div>
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
      className="px-2 py-1 cursor-pointer hover:bg-[#121b2e] rounded"
    >
      {children}
    </a>
  );
}
