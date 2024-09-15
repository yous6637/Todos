import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { NavLink } from "@/components/ui/navlinks";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Href } from "expo-router";
import { Collapsible } from "@/components/Collapsible";
type Props = {};

interface SideItem {
  label: string;
  Icon: React.ReactNode;
  href: Href<string>;
}

const categories: Array<SideItem> = [
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

const index = (props: Props) => {
  const sideItems: Array<SideItem> = [
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
  return (
    <SafeAreaView className="w-3/4 h-screen bg-white">
      <View className="flex flex-col gap-3">
        <Image
          alt="logo"
          height={200}
          width={100}
          source={{
            uri: "assets/images/To-do List.png",
            "height": 200
          }}
        />
        {sideItems.map((item, id) => (
          <NavLink
            variant={"ghost"}
            className="justify-start gap-4"
            key={id}
            {...item}
          />
        ))}
        <Collapsible title={"Category"}>
          {categories.map((item, id) => (
            <NavLink
              variant={"ghost"}
              className="justify-start"
              key={id}
              {...item}
            />
          ))}
        </Collapsible>
      </View>
    </SafeAreaView>
  );
};

export default index;
