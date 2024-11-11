import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "../../App.style";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { Linking } from "react-native";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  function goToSocialMedia(socialMedia) {
    let url = "";
    switch (socialMedia) {
      case "twitter":
        url = "";
        break;
      case "instagram":
        url = "https://www.instagram.com/?deoia=1";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/malick-ouedraogo-23b121191/";
        break;
      default:
        break;
    }

    Linking.openURL(url);
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.app}>
          {/* <StatusBar style="auto" /> */} 
          <View style={styles.body}>
            <ProfileCard onPressSocialMediaIcon={goToSocialMedia} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
