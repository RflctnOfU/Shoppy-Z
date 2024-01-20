import { Home, ListPlus, CookingPot } from "lucide-react";
export const siteNav = [
  {
    id: 1,
    name: "Home",
    route: "/dashboard",
    icon: Home,
  },
  {
    id: 2,
    name: "Meal",
    route: "/dashboard/meals/create",
    icon: CookingPot,
  },
  {
    id: 3,
    name: "List",
    route: "/dashboard/list",
    icon: ListPlus,
  },
];
