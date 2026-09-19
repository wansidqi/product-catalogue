import { Image } from "expo-image";
import { Text, View } from "react-native";
import { Color } from "../constant/color";

export default function Card() {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  return (
    <View
      className={`border-2 border-transparent p-6 rounded-3xl ${Color.PAGE} flex items-center justify-center`}
    >
      <View>
        <Image
          className={`w-24 h-24 flex items-center justify-center ${Color.IMAGE_PLACEHOLDER} m-4`}
          source="https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp"
          placeholder={{ blurhash }}
          transition={1000}
        />
      </View>
      <Text className="text-slate-200">this is product name</Text>
      <Text className={`${Color.TEXT}`}>this is product price</Text>
    </View>
  );
}
