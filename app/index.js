import { useState } from "react";

import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, images, icons } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  Welcome,
  ScreenHeaderBtn,
} from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => {
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />;
          },
          headerRight: () => {
            <ScreenHeaderBtn iconUrl={icons.header} dimension="100%" />;
          },
          headerBackTitle: "",
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
