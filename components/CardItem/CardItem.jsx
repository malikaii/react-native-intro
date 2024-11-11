import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { cItemStyle } from "./CardItem.style";
import { useRouter } from "expo-router";

function CardItem({ title, imageUrl, description, episodeNum, trailerUrl, status }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/CardDescription/CardDescription",
          params: { title, description, status, trailerUrl, imageUrl },
        })
      }
    >
      <View style={cItemStyle.container}>
        <View style={cItemStyle.heading}>
          <View>
            <Image src={imageUrl} style={cItemStyle.image} />
          </View>
          <View style={cItemStyle.textGroup}>
            <Text style={cItemStyle.title}>{title}</Text>
            {episodeNum ? <Text>Episodes: {episodeNum}</Text> : <></>}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CardItem;
