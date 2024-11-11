import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { LogBox } from "react-native";
import CardItem from "../../../components/CardItem/CardItem";
function HomeFeed() {
  const [animeSchedule, setAnimeSchedule] = useState([]);
  // const [animeContent, setAnimeContent] = useState("");

  const today = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekday = daysOfWeek[today.getDay()];
  useEffect(() => {
    async function getAnimeRecs() {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/schedules/${weekday}`
        );

        const result = await response.json();
        setAnimeSchedule(result?.data);
        console.log(animeSchedule);
      } catch ({ message }) {
        console.log(message);
      }
    }
    getAnimeRecs();
  }, []);

  return (
    <View style={{ padding: 10 }}>
      <ScrollView>
        <Text style={{ fontWeight: "bold", fontSize: 20, padding: 10 }}>
          Anime Schedule for {weekday}:{" "}
        </Text>
        <View>
          {animeSchedule ? (
            animeSchedule.map((result, key) => (
              <CardItem
                title={result.title}
                imageUrl={result.images.jpg.image_url}
                trailerUrl={result.trailer.url}
                key={key}
              />
            ))
          ) : (
            <Text>None</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeFeed;
