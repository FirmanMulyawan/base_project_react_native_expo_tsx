import { fetchProductsRequest } from "@/slices/postSlices";
import { RootState } from "@/store";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

interface AppProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const dispatch = useDispatch();
  const [query, setquery] = useState("");
  // const [data, setdata] = useState<AppProps[]>([]);
  // const [filtered, setFiltered] = useState<AppProps[]>([]);
  const { items, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setloading(true);
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );
  //       setdata(response.data);
  //       setFiltered(response.data);
  //     } catch (error: any) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setloading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleSearch = (text: string) => {
    setquery(text);
    // const filteredData = data.filter((item) =>
    //   item.title.toLowerCase().includes(text.toLowerCase())
    // );
    // setFiltered(filteredData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search..."
        style={styles.input}
        onChangeText={handleSearch}
        value={query}
        autoComplete="off"
        autoCorrect={false}
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              router.push(`/detail/${item.id}`);
            }}
            activeOpacity={0.7}
          >
            <View style={styles.card}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
  card: { padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
});
