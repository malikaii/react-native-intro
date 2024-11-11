import React, { useState } from "react";
import { s } from "./Footer.style";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
function Footer() {
  const [linkColor, setLinkColor] = useState("black");

  function onPressNavButton(navLocation) {
    switch (navLocation) {
      case "home":
        router.push("/feed/HomeFeed");

        break;
      case "search":
        router.push("/feed/HomeFeed");

        break;
      case "settings":
        router.push("/feed/HomeFeed");

        break;

      default:
        break;
    }
  }

  function onLocation() {}

  return (
    <>
      <View style={s.container}>
        <TouchableOpacity
          onPress={() => onPressNavButton("home")}
          style={s.navButtons}
        >
          <FontAwesome name="home" size={24} color={linkColor} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressNavButton("search")}
          style={s.navButtons}
        >
          <FontAwesome name="search" size={24} color={linkColor} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressNavButton("settings")}
          style={s.navButtons}
        >
          <Ionicons name="settings-sharp" size={24} color={linkColor} />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Footer;
