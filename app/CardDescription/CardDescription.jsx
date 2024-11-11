import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Linking, Image } from 'react-native';
import { descStyle } from './Description.style';
import { Link, useLocalSearchParams } from 'expo-router';
function CardDescription() {

  const {description, title, status, trailerUrl, imageUrl} = useLocalSearchParams();

  console.log(imageUrl);

  return (
    <View style={descStyle.container}>
      
      <View style={descStyle.header}>
        <Image
          style={descStyle.avatar}
          source={{
            uri: imageUrl,
          }}
        />
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          {"\n"}
          {title}
          {"\n"}
        </Text>
        <Text style={{ textAlign: "center" }}>
          Status: {status}
          {"\n"}
        </Text>
        {/* <br /> */}
        {/* <Linking >Trailer: {trailerUrl}</Linking> */}
      </View>
      <View>
        <Text>Description: {description}</Text>
      </View>
    </View>
  );
}

export default CardDescription;