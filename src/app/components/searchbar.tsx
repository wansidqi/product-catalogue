import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onChangeText?: (query: string) => void;
};

export default function SearchBar({
  placeholder = "Search...",
  onSearch,
  onChangeText,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const handleChange = (text: string) => {
    setQuery(text);
    onChangeText?.(text);
  };

  const handleClear = () => {
    setQuery("");
    onChangeText?.("");
    onSearch?.("");
  };

  const containerClass = focused
    ? "flex-row items-center h-12 rounded-full border border-[#FF6B4A] bg-[#221E1A] px-4 mx-4 my-3"
    : "flex-row items-center h-12 rounded-full border border-white/10 bg-[#221E1A] px-4 mx-4 my-3";

  return (
    <View className={containerClass}>
      <Text className="text-base mr-2 opacity-60">🔍</Text>

      <TextInput
        className="flex-1 text-[15px] text-white p-0 outline-none"
        value={query}
        onChangeText={handleChange}
        placeholder={placeholder}
        placeholderTextColor="#6b7280"
        returnKeyType="search"
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onSubmitEditing={() => onSearch?.(query.trim())}
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
  );
}
