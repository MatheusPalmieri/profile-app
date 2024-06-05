import { View } from "react-native";
import { Title } from "@/components/Title";
import { Option } from "@/components/Option";
import { Switch } from "@/components/Switch";
import { useState } from "react";
import { Checkbox } from "@/components/Checkbox";

export const Preferences = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <View className="w-full">
      <Title>Preferences</Title>

      <Option>
        <Option.Icon icon="light-mode" />
        <Option.Title>Dark Mode</Option.Title>
        <Switch onValueChange={setDarkMode} value={darkMode} />
      </Option>

      <Option>
        <Option.Icon icon="email" />
        <Option.Title>Public Email</Option.Title>
        <Checkbox />
      </Option>
    </View>
  );
};
