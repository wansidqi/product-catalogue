import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Button, ScrollView, Text, View } from "react-native";
import { styles } from "../styles/product-detail.styles";
import { useGetProductById } from "./services/product-service";

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, isError, refetch } = useGetProductById(Number(id));

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <Text style={styles.body}>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={[styles.centered, { gap: 12 }]}>
        <Text style={styles.body}>Error load data</Text>
        <Button title="Retry" onPress={() => refetch()} />
      </View>
    );
  }

  const discountedPrice = data
    ? (data.price - (data.price * data.discountPercentage) / 100).toFixed(2)
    : "0";
  const hasDiscount = data?.discountPercentage;

  const details = [
    { label: "Category", value: data?.category },
    { label: "Availability", value: data?.availabilityStatus },
    { label: "Warranty", value: data?.warrantyInformation },
    { label: "Shipping", value: data?.shippingInformation },
    { label: "Return policy", value: data?.returnPolicy },
  ] as const;

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      <View style={styles.gallery}>
        <Image
          style={styles.thumbnail}
          source={{ uri: data?.thumbnail }}
          contentFit="cover"
          transition={1000}
        />

        {data?.images && data.images.length > 1 && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.thumbRow}
          >
            {data.images.map((img, index) => (
              <Image
                key={index}
                style={styles.thumbSmall}
                source={{ uri: img }}
                contentFit="cover"
                transition={500}
              />
            ))}
          </ScrollView>
        )}
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          {data?.brand && <Text style={styles.brand}>{data.brand}</Text>}

          <Text style={styles.title}>{data?.title}</Text>

          <View style={styles.ratingRow}>
            <View style={styles.ratingPill}>
              <Text style={styles.star}>★ {data?.rating}</Text>
            </View>
            <Text style={styles.muted}>{data?.stock} in stock</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.price}>${discountedPrice}</Text>
            {hasDiscount && (
              <>
                <Text style={styles.originalPrice}>${data?.price}</Text>
                <View style={styles.discountPill}>
                  <Text style={styles.discount}>
                    -{data?.discountPercentage}%
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Description</Text>
          <Text style={styles.description}>{data?.description}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Details</Text>

          {details.map((detail) =>
            detail.value ? (
              <View key={detail.label} style={styles.detailRow}>
                <Text style={styles.muted}>{detail.label}</Text>
                <Text style={styles.detailValue}>{detail.value}</Text>
              </View>
            ) : null,
          )}
        </View>

        {data?.reviews && data.reviews.length > 0 && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Reviews</Text>
            {data.reviews.map((review, index) => (
              <View
                key={index}
                style={[styles.review, index === 0 && { borderTopWidth: 0 }]}
              >
                <View style={styles.reviewHeader}>
                  <Text style={styles.reviewerName}>
                    {String(review.reviewerName)}
                  </Text>
                  <Text style={styles.star}>★ {review.rating}</Text>
                </View>
                <Text style={[styles.muted, { marginTop: 4 }]}>
                  {review.comment}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
