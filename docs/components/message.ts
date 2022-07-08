import {
  darkTheme,
  lightTheme,
  createDiscreteApi,
  ConfigProviderProps,
} from "naive-ui";
import { computed } from "vue";
import { useDark } from "@pureadmin/utils";

export function useMessage() {
  const { isDark } = useDark();

  const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
    theme: isDark.value ? darkTheme : lightTheme,
  }));

  const { message } = createDiscreteApi(["message"], {
    configProviderProps: configProviderPropsRef,
  });

  return {
    message,
  };
}
