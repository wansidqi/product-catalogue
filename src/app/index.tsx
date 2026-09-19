import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./components/card";
import { Color } from "./constant/color";
import { useDebounce } from "./hooks/useDebounce";
import { useGetProducts, useSearchProducts } from "./services/product-service";

export default function Index() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const debouncedSearch = useDebounce(query);

  const { data, fetchNextPage, refetch, isLoading, isError } = useGetProducts();
  const { data: result } = useSearchProducts(debouncedSearch);
  const products =
    result !== undefined
      ? result?.products
      : data?.pages.map((page) => page.products).flat();

  console.log(products);

  const handleChange = (text: string) => {
    setQuery(text);
  };

  const handleClear = () => {
    setQuery("");
  };

  const containerClass = focused
    ? "flex-row items-center h-12 rounded-full border border-[#FF6B4A] bg-[#221E1A] px-4 mx-4 my-3"
    : "flex-row items-center h-12 rounded-full border border-white/10 bg-[#221E1A] px-4 mx-4 my-3";

  return (
    <SafeAreaView className={`flex-1 ${Color.PAGE} text-slate-200`}>
      <View className="mt-4 mb-6">
        <Text className="text-2xl font-bold text-blue-500 text-center">
          Product Catalog
        </Text>
      </View>

      <View className={containerClass}>
        <Text className="text-base mr-2 opacity-60">🔍</Text>

        <TextInput
          className="flex-1 text-[15px] text-white p-0 outline-none"
          value={query}
          onChangeText={handleChange}
          placeholder={"Search product here..."}
          placeholderTextColor="#6b7280"
          returnKeyType="search"
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {query.length > 0 && (
          <Pressable
            onPress={handleClear}
            hitSlop={10}
            className="h-5 w-5 items-center justify-center rounded-full bg-white/15"
          >
            <Text className="text-[11px] text-white font-bold">✕</Text>
          </Pressable>
        )}
      </View>

      {(products?.length === 0 && query.length > 0) && (
        <View
          className={`flex-1 ${Color.PAGE} text-slate-200 flex-1 h-screen justify-center items-center`}
        >
          <Text className="text-slate-200 text-center">Product not found</Text>
        </View>
      )}

      {isLoading && (
        <View
          className={`flex-1 ${Color.PAGE} text-slate-200 flex-1 h-screen justify-center items-center`}
        >
          <Text className="text-slate-200 text-center">Loading...</Text>
        </View>
      )}

      {isError && (
        <View
          className={`flex-1 ${Color.PAGE} text-slate-200 flex-1 h-screen justify-center items-center`}
        >
          <Text className="text-slate-200 text-center">Error load data</Text>
          <Button title="Retry" onPress={() => refetch()} />
        </View>
      )}

      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        data={products}
        renderItem={({ item }) => <Card key={item} item={item} />}
        keyExtractor={(item) => item.id}
        onEndReached={() => fetchNextPage()}
      />
    </SafeAreaView>
  );
}
