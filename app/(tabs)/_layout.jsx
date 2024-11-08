import { Tabs } from "expo-router";
import React from "react";

function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="feed/HomeFeed"
        options={{ headerTitle: "Home", title: "Home" }}
      />
      <Tabs.Screen
        name="search/Search"
        options={{ headerTitle: "Search", title: "Search" }}
      />

      <Tabs.Screen
        name="index"
        options={{ headerTitle: "About", title: "About" }}
      />
    </Tabs>
  );
}

export default TabsLayout;
