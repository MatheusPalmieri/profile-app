import { Image, ScrollView, View } from "react-native";

import { User } from "@/components/User";
import { Skills } from "@/components/Skills";
import { Preferences } from "@/components/Preferences";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export const Profile = () => (
  <View className="flex-1 bg-gray-700">
    <ScrollView>
      <Image
        source={require("../../assets/banner.png")}
        className="bg-sky-600 w-full h-52 -mb-16"
        onError={(error) => console.log("Erro ao carregar a imagem", error)}
      />

      <View className="flex-1 px-4 pb-4">
        <User />
        <Skills />
        <Preferences />

        <View className="w0full mt-6 flex-1">
          <Input label="Company" placeholder="Company" inputClasses="mb-6" />

          <Button label="Save" />
        </View>
      </View>
    </ScrollView>
  </View>
);
