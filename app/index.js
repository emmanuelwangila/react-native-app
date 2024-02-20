import { useState } from "react";

import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, images, icons } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  Welcome,
  ScreenHeaderbtn,
} from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
