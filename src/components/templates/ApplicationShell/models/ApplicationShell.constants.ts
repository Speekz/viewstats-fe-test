import {
  HomeIcon,
  RectangleStackIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
  { name: "Tasks", href: "/tasks", icon: RectangleStackIcon, current: false },
  { name: "Tags", href: "/tags", icon: TagIcon, current: false },
];
