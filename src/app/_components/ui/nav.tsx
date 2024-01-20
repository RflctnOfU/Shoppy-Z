import { ListPlus, Home, CookingPot } from "lucide-react";
import { siteNav } from "@/app/lib/data";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="flex w-full justify-around">
      {siteNav.map((item) => {
        const Icon = item.icon;
        return (
          <Link href={item.route} key={item.id}>
            <Icon size={35} className="text-main-tertiary" />
          </Link>
        );
      })}

      {/* <Home size={35} className="text-main-tertiary" />
      <CookingPot size={35} className="text-main-tertiary" />
      <ListPlus size={35} className="text-main-tertiary" /> */}
    </nav>
  );
}
