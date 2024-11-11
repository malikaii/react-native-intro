import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { searchStyle } from "./Search.style";
import CardItem from "../../../components/CardItem/CardItem";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [animeData, setAnimeData] = useState("");

  async function getAnimeData() {
    try {
      const result = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchValue}`
      );
      const response = await result.json();
      setAnimeData(response?.data);
      console.log(response.data);
    } catch ({ message }) {
      console.log(message);
    }
  }

  return (
    <View style={searchStyle.container}>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <TextInput
            style={searchStyle.searchInput}
            placeholder="Enter an Anime title"
            clearButtonMode="always"
            onChangeText={(value) => {
              // e.preventDefault();
              setAnimeData("")
              setSearchValue(value);
            }}
            onSubmitEditing={(e) => getAnimeData()}
          />
        </View>
        {animeData
          ? animeData.map((result, key) => (
              <CardItem
                title={result.title}
                imageUrl={result.images.jpg.image_url}
                trailerUrl={result.trailer.url}
                episodeNum={result.episodes}
                status={result.status}
                description={result.synopsis}
                key={key}
              />
            ))
          : ""}
      </ScrollView>
    </View>
  );
}

export default Search;
