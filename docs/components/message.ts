import {
  darkTheme,
  lightTheme,
  createDiscreteApi,
  ConfigProviderProps
} from "naive-ui";
import { computed } from "vue";
import { useData } from "vitepress";

export function useMessage() {
  const { isDark } = useData();

  const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
    theme: isDark.value ? darkTheme : lightTheme
  }));

  const { message } = createDiscreteApi(["message"], {
    configProviderProps: configProviderPropsRef
  });

  return {
    message
  };
}
