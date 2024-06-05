import { Switch as NativeSwitch } from "react-native";

import { colors } from "@/styles/colors";

function Switch({
  ...props
}: React.ComponentPropsWithoutRef<typeof NativeSwitch>) {
  return (
    <NativeSwitch
      trackColor={{
        false: colors.gray[500],
        true: colors.green[400],
      }}
      thumbColor={colors.green[500]}
      {...props}
    />
  );
}

export { Switch };
