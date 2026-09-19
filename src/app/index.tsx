import { Button, Text, View } from "react-native";
import Card from "./components/card";
import {
  useGetProductById,
  useGetProducts,
  useSearchProducts,
} from "./services/product-service";
import { Color } from "./constant/color";

export default function Index() {
  const { data, fetchNextPage } = useGetProducts();
  const { data: product } = useGetProductById(1);
  const { data: result } = useSearchProducts("phone");

  console.log(product);
  console.log(data);
  console.log(result);

  return (
    <View className={`flex-1 items-center items justify-center text-slate-200`}>
      <Text className="text-5xl font-bold text-blue-500 text-center">
        Product Catalog
      </Text>
      <View className="my-20">
        <Card />
      </View>
      <Button title="fetch next product" onPress={() => fetchNextPage()} />
    </View>
  );
}
