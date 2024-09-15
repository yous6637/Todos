import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";

const Home = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-2 h-2 rounded-full bg-gray-300 mx-2" />
        }
        activeDot={
          <View className="w-2 h-2 rounded-full bg-purple-600 mx-2" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className={'flex-1 justify-center items-center bg-white p-4'}>
          <View className={'mb-8'}>
            <Image
              source={{ uri: '/assets/images/start-logo.png' }}
              className={'w-64 h-48'}
            />
          </View>
          <Text className={'text-2xl font-bold mb-2'}>TaskMaster</Text>
          <Text className={'text-base text-gray-600 text-center mb-8'}>
            Organize and prioritize your tasks efficiently
          </Text>
          {/* <View className={'flex-row justify-center items-center'}>
            <View className={'w-2 h-2 rounded-full bg-purple-600 mr-2'} />
            <View className={'w-2 h-2 rounded-full bg-gray-300'} />
          </View> */}
        </View>
        ))}
      </Swiper>

      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-10 mb-5"
      />
    </SafeAreaView>
  );
};

export default Home;
