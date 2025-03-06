import {
  Bell,
  Home,
  LucideProps,
  MessageCircle,
  Search,
  User,
  Video,
} from "lucide-react";
import { useUserSelector } from "../hooks/selectorHook";

const useNavigationLinks = (): {
  name: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  href?: string;
}[] => {
  const { user } = useUserSelector();
  return [
    {
      name: "Home",
      href: "/",
      Icon: Home,
    },
    {
      name: "Search",
      Icon: Search,
    },
    {
      name: "Reels",
      Icon: Video,
      href: "/reels",
    },
    {
      name: "Messages",
      Icon: MessageCircle,
      href: "/direct/inbox",
    },
    {
      name: "Notifications",
      Icon: Bell,
    },
    {
      name: "Profile",
      Icon: User,
      href: `/${user.username}`,
    },
  ];
};

export { useNavigationLinks };
