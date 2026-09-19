import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { cssInterop } from "nativewind";
import { Color } from "../constant/color";
import { ProductInterface } from "../interface/product-interface";

cssInterop(Image, { className: "style" });

export default function Card({ item }: { item: Partial<ProductInterface> }) {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  return (
    <Link href={`/${item.id}`}>
      <View
        className={`w-40 p-6 ${Color.CARD} flex items-center justify-center m-4`}
      >
        <View>
          <Image
            className={`w-24 h-24 flex items-center justify-center ${Color.IMAGE_PLACEHOLDER} rounded-lg m-2`}
            source={item.thumbnail}
            placeholder={{ blurhash }}
            transition={1000}
          />
        </View>
        <Text className="text-slate-200 text-xs font-bold">{item.title}</Text>
        <Text className={`${Color.TEXT} font-bold text-sm`}>${item.price}</Text>
      </View>
    </Link>
  );
}
