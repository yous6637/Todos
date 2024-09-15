import { Tabs, useRouter } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Drawer from "expo-router/drawer";
import { categories, sideItems } from "@/constants/links";
import { NavLink } from "@/components/ui/navlinks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@/components/ui/button";
import { useSignIn, SignedOut, useAuth } from "@clerk/clerk-expo";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const route = useRouter();

  const { signOut } = useAuth();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{ title: "Welcome", drawerPosition: "left" }}
        drawerContent={(props) => (
          <View className="flex flex-col gap-3">
            <Image
              alt="logo"
              style={{ aspectRatio: 7 / 4 }}
              width={100}
              source={{
                uri: "assets/images/To-do List.png",
                height: 200,
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
            <Button
              onPress={(e) => {
                signOut({ redirectUrl: "/(auth)/sign-in" });
              }}
              variant={"ghost"}
            >
              <View className="flex gap-2 flex-1">
                <MaterialCommunityIcons name="logout" size={24} color="#000" />
                <Text> Log out</Text>
              </View>
            </Button>
          </View>
        )}
      />
      <View className="flex-row justify-around bg-white items-center py-4 border-t border-gray-200">
        <TouchableOpacity
          onPress={(e) => {
            route.push("/(tabs)/tasks");
          }}
        >
          <MaterialCommunityIcons name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="star" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="plus" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e) => {
            route.push("/(tabs)/addtask");
          }}
        >
          <MaterialCommunityIcons name="bell" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="account" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarShowLabel: false,
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            tabBarShowLabel: false,

            title: "Menu",
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="menu" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            tabBarShowLabel: false,
            title: "Menu",
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="add-task" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            tabBarShowLabel: false,
            title: "Calendar",
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="calendar-month" size={24} color={color} />
            ),
          }}
        />
      </Tabs> */}
    </GestureHandlerRootView>
  );
}
