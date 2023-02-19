// import { StatusBar } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";

import "./languages/i18n";

const languages = [
  { key: "en", label: "English" },
  { key: "fr", label: "French" },
  { key: "es", label: "Spanish" },
  { key: "ar", label: "Arabic" },
];

export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: "#ddd",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        {languages.map((language) => (
          <Text
            key={language.key}
            onPress={() => i18n.changeLanguage(language.key)}
            style={{
              paddingVertical: 20,
              flex: 1,
              backgroundColor:
                i18n.language === language.key ? "#00FA00" : "transparent",
              textAlign: "center",
            }}
          >
            {language.label}
          </Text>
        ))}
      </View>
      <Text
        style={{
          textAlign: "center",
          textAlignVertical: "center",
          flex: 1,
          width: "100%",
          fontSize: 30,
        }}
      >
        {t("hello")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
