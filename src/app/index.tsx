import { RootState } from "@/redux/store";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchPostsRequest,
  selectedPost,
  setSearchQuery,
} from "../redux/reducers/postSlices";

const App = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { posts, loading, error, searchQuery } = useSelector(
    (state: RootState) => state.posts,
  );

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  const filteredposts = posts.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (loading && posts.length === 0) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />
    );
  }

  if (error) {
    return (
      <Text style={{ flex: 1, textAlign: "center", marginTop: 20 }}>
        {error}
      </Text>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search Post..."
        style={styles.input}
        onChangeText={(text) => dispatch(setSearchQuery(text))}
        value={searchQuery}
        autoComplete="off"
        autoCorrect={false}
      />

      <FlatList
        data={filteredposts}
        keyExtractor={(item) => item.id.toString()}
        refreshing={loading}
        onRefresh={() => dispatch(fetchPostsRequest())}
        renderItem={({ item }) => {
          console.log("Item:", item.id);

          return (
            <TouchableOpacity
              onPress={() => {
                dispatch(selectedPost(item));
                router.push(`/detail/${item.id}`);
              }}
              activeOpacity={0.7}
            >
              <View style={styles.card}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>{item.id}</Text>
                </View>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 8,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  circleText: {
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
