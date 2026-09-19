import { Button, FlatList, Text, View } from "react-native";
import Card from "./components/card";
import { Color } from "./constant/color";
import { useGetProducts } from "./services/product-service";

export default function Index() {
  const { data, fetchNextPage, refetch } = useGetProducts();

  return (
    <View className={`flex-1 ${Color.PAGE} text-slate-200`}>
      <Text className="text-2xl font-bold text-blue-500 text-center">
        Product Catalog
      </Text>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        data={data?.pages.map((page) => page.products).flat()}
        renderItem={({ item }) => <Card key={item} item={item} />}
        keyExtractor={(item) => item.id}
        onEndReached={() => fetchNextPage()}
      />
    </View>
  );
}
