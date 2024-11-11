import { Tabs } from "expo-router";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="feed/HomeFeed"
        options={{
          headerTitle: "Home",
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name="home" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="search/Search"
        options={{
          headerTitle: "Search",
          title: "Search",
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name="search" size={size} color={color} />;
          },
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Profile",
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name="user" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
