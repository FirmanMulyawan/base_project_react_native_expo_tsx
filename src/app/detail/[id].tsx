import { RootState } from "@/redux/store";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const Detail = () => {
  const router = useRouter();
  const { selectedPost } = useSelector((state: RootState) => state.posts);

  if (!selectedPost) return <Text>No Post selected.</Text>;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="#fff"
          onPress={() => router.back()}
        />
        <Text style={styles.headerTitle}>Post Detail</Text>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.metaBox}>
          <Text style={styles.metaText}>Post #{selectedPost.id}</Text>
          <Text style={styles.metaText}>User ID: {selectedPost.userId}</Text>
        </View>
        <Text style={styles.title}>{selectedPost.title}</Text>
        <Text style={styles.body}>{selectedPost.body}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4a90e2",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  metaBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    backgroundColor: "#e6f0fa",
    padding: 10,
    borderRadius: 8,
  },
  metaText: {
    fontSize: 14,
    color: "#333",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#222",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
  },
});
