import { Text, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar";

export const User = () => (
  <View className="items-center">
    <Avatar className="w-32 h-32 border-4 border-gray-600">
      <AvatarImage source={{ uri: "https://github.com/matheuspalmieri.png" }} />
      <AvatarFallback>MP</AvatarFallback>
    </Avatar>

    <Text className="text-white font-bold text-2xl mt-4">Matheus Palmieri</Text>
    <Text className="text-gray-400 text-lg">@matheuspalmieri</Text>
  </View>
);
