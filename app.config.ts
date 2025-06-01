import { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.ritankar.findmynest.dev";
  }

  if (IS_PREVIEW) {
    return "com.ritankar.findmynest.preview";
  }

  return "com.ritankar.findmynest";
};

const getAppName = () => {
  if (IS_DEV) {
    return "FindMyNest (Dev)";
  }

  if (IS_PREVIEW) {
    return "FindMyNest (Preview)";
  }

  return "FindMyNest";
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: "findmynest",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "findmynest",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    edgeToEdgeEnabled: true,
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      monochromeImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: getUniqueIdentifier(),
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon-dark.png",
        resizeMode: "contain",
        imageWidth: 200,
        backgroundColor: "#ffffff",
        dark: {
          image: "./assets/images/splash-icon-light.png",
          backgroundColor: "#000000",
        },
        enableFullScreenImage_legacy: true,
      },
    ],
    [
      "expo-font",
      {
        fonts: [
          "./assets/fonts/Rubik-Bold.ttf",
          "./assets/fonts/Rubik-ExtraBold.ttf",
          "./assets/fonts/Rubik-Light.ttf",
          "./assets/fonts/Rubik-Medium.ttf",
          "./assets/fonts/Rubik-Regular.ttf",
          "./assets/fonts/Rubik-SemiBold.ttf",
        ],
      },
    ],
    "expo-secure-store",
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: "7c7d2c48-08c1-48e0-b6e0-37830202ede3",
    },
  },
  updates: {
    url: "https://u.expo.dev/7c7d2c48-08c1-48e0-b6e0-37830202ede3",
    checkAutomatically: "ON_LOAD",
  },
  runtimeVersion: {
    policy: "appVersion",
  },
  owner: "ritankar",
});
