import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Href } from "expo-router";








interface SideItem {
    label: string;
    Icon: React.ReactNode;
    href: Href<string>;
  }
  
export const categories: Array<SideItem> = [
    {
      label: "Personal",
      href: "/?catoegory=personal",
      Icon: <MaterialCommunityIcons name="star" size={24} />,
    },
    {
      label: "Project",
      href: "/?catoegory=project",
      Icon: <MaterialCommunityIcons name="star" size={24} />,
    },
    {
      label: "Study",
      href: "/?catoegory=personal",
      Icon: <MaterialCommunityIcons name="star" size={24} />,
    },
  
    {
      label: "Work",
      href: "/?catoegory=personal",
      Icon: <MaterialCommunityIcons name="account" size={24} />,
    },
  ];

export const sideItems: Array<SideItem> = [
    {
      label: "Star Tasks",
      href: "/",
      Icon: <MaterialCommunityIcons name="star" size={24} color={"#0ea5e9"} />,
    },
    {
      label: "Category",
      href: "/",
      Icon: <MaterialCommunityIcons name="star" size={24} color={"#0ea5e9"} />,
    },
    {
      label: "Donate",
      href: "/donate",
      Icon: <MaterialCommunityIcons name="heart" size={24} color={"#0ea5e9"} />,
    },
    {
      label: "Feedback",
      href: "/",
      Icon: <MaterialCommunityIcons name="star" size={24} color={"#0ea5e9"} />,
    },
    {
      label: "FAQ",
      href: "/",
      Icon: (
        <MaterialCommunityIcons
          name="puzzle-star"
          size={24}
          color={"#0ea5e9"}
        />
      ),
    },
    {
      label: "Home",
      href: "/",
      Icon: <MaterialCommunityIcons name="star" size={24} color={"#0ea5e9"} />,
    },
  ];
