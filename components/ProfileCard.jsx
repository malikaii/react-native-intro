import React from "react";
import { Button, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../App.style";
import { View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function ProfileCard({ onPressSocialMediaIcon}) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://media.licdn.com/dms/image/v2/D5603AQHAgFr8hzzKcg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1684200278387?e=1736380800&v=beta&t=Tkas45_og-QTcbjj6uA1oJHeNHSLRywygYNnQ0f3JYg",
              }}
            />
          </View>
          <View style={styles.texts}>
            <Text style={styles.name}>Malick Ouedraogo</Text>
            <Text>Hey I'm a React Developer for IBM, let's get in touch!</Text>
          </View>
        </View>

        <View style={styles.social}>
          <TouchableOpacity
            onPress={() => onPressSocialMediaIcon("twitter")}
            style={styles.socialBtn}
          >
            <FontAwesome name="twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressSocialMediaIcon("linkedin")}
            style={styles.socialBtn}
          >
            <FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressSocialMediaIcon("instagram")}
            style={styles.socialBtn}
          >
            <FontAwesome name="instagram" size={24} color="#e1306c" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default ProfileCard;
