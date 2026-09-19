import { StyleSheet } from "react-native";

export const palette = {
  page: "#14120F",
  card: "#221E1A",
  border: "rgba(255,255,255,0.08)",
  heading: "#F8FAFC",
  body: "#CBD5E1",
  muted: "#94A3B8",
  faint: "#64748B",
  accent: "#FF6B4A",
  star: "#FACC15",
  discount: "#4ADE80",
  starBg: "rgba(250,204,21,0.12)",
  discountBg: "rgba(74,222,128,0.12)",
  thumbBg: "#2A251F",
};

export const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: palette.page },
  centered: { flex: 1, backgroundColor: palette.page, justifyContent: "center", alignItems: "center" },
  body: { color: palette.body },
  muted: { color: palette.muted, fontSize: 13 },

  gallery: { alignItems: "center", paddingTop: 24, paddingBottom: 16 },
  thumbnail: { width: 240, height: 240, borderRadius: 24, borderWidth: 1, borderColor: palette.border, backgroundColor: palette.thumbBg },
  thumbRow: { paddingHorizontal: 16, marginTop: 12, gap: 8 },
  thumbSmall: { width: 56, height: 56, borderRadius: 12, borderWidth: 1, borderColor: palette.border, backgroundColor: palette.thumbBg },

  content: { paddingHorizontal: 16 },
  card: { backgroundColor: palette.card, borderWidth: 1, borderColor: palette.border, borderRadius: 16, padding: 16, marginTop: 16 },
  cardTitle: { color: palette.heading, fontSize: 15, fontWeight: "700", marginBottom: 10 },

  brand: { color: palette.accent, fontSize: 12, fontWeight: "700", letterSpacing: 1, textTransform: "uppercase" },
  title: { color: palette.heading, fontSize: 20, fontWeight: "700", marginTop: 4 },

  ratingRow: { flexDirection: "row", alignItems: "center", marginTop: 10, gap: 8 },
  ratingPill: { flexDirection: "row", alignItems: "center", backgroundColor: palette.starBg, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 999 },
  star: { color: palette.star, fontSize: 12, fontWeight: "700" },

  priceRow: { flexDirection: "row", alignItems: "center", marginTop: 16, flexWrap: "wrap", gap: 10 },
  price: { color: palette.heading, fontSize: 24, fontWeight: "700" },
  originalPrice: { color: palette.faint, fontSize: 14, textDecorationLine: "line-through" },
  discountPill: { backgroundColor: palette.discountBg, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6 },
  discount: { color: palette.discount, fontSize: 12, fontWeight: "700" },

  description: { color: palette.body, fontSize: 13, lineHeight: 20 },

  detailRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 8 },
  detailValue: { color: palette.heading, fontSize: 13, fontWeight: "600" },

  review: { paddingVertical: 12, borderTopWidth: 1, borderTopColor: palette.border },
  reviewHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  reviewerName: { color: palette.heading, fontSize: 13, fontWeight: "700" },
});
