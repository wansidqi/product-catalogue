import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from "@tanstack/react-query";
import { Stack } from "expo-router";
import { Platform } from "react-native";
import "../global.css";

export default function RootLayout() {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }

  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "Product Catalogue" }}
        />
        <Stack.Screen
          name="[id]"
          options={{
            title: "Product Detail",
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
