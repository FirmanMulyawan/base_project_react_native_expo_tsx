import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface DetailProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Detail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [data, setData] = useState<DetailProps | null>(null);
  const [loading, setloading] = useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        setData(response.data);
      } catch (error: any) {
        console.error("Error fetching data:", error);
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, [id]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable onPress={() => router.back()}>
        <Text style={{ fontSize: 20, padding: 10 }}>Back</Text>
      </Pressable>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{data?.id}</Text>
        <Text>{data?.userId}</Text>
        <Text>{data?.title}</Text>
        <Text>{data?.body}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({});
