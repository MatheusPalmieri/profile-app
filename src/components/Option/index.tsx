import { Text, TextProps, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

interface Props {
  children: React.ReactNode;
}

const Option = ({ children }: Props) => (
  <View className="w-full flex-row items-center gap-2 border-b border-gray-500 py-3">
    {children}
  </View>
);

interface IconProps {
  icon: keyof typeof MaterialIcons.glyphMap;
}

const Icon = ({ icon }: IconProps) => (
  <MaterialIcons name={icon} size={20} color={colors.white} />
);

const Title = (props: TextProps) => (
  <Text className="text-white text-lg flex-1" {...props} />
);

Option.Title = Title;
Option.Icon = Icon;

export { Option };
