// import { ImageAssets } from "assets/images";
// import { router } from "expo-router";
// import React, { FC } from "react";
// import {
//     Image,
//     ImageStyle,
//     TextStyle,
//     useWindowDimensions,
//     View,
//     ViewStyle,
// } from "react-native";
// import { Button, Screen, Text } from "src/components/core/atoms";
// import useAuthentication from "src/hooks/useAuthentication";
// import { moderateScale } from "src/models/helpers/functionList";
// import { colors, typography } from "src/theme";

// const NotFoundScreen: FC = () => {
//   const { width } = useWindowDimensions();
//   const { isAuthenticated } = useAuthentication();
//   const goToHome = () => {
//     router.dismissTo({
//       pathname: isAuthenticated ? "/home" : "/AuthSignInPhoneScreen",
//     });
//   };

//   return (
//     <Screen
//       preset="fixed"
//       safeAreaEdges={["top", "bottom"]}
//       backgroundColor={colors.palette.neutral100}
//       style={$root}
//     >
//       <Image
//         source={ImageAssets.branchNotFound}
//         resizeMode="contain"
//         style={$image(width)}
//       />

//       <View style={$textContainer}>
//         <Text tx="notFound:title" size="lg" weight="bold" align="center" />
//         <Text tx="notFound:description" size="xs" align="center" />
//       </View>

//       <Button
//         tx={isAuthenticated ? "notFound:backToHome" : "notFound:login"}
//         onPress={goToHome}
//         style={$button}
//         textProps={{ weight: "bold" }}
//         buttonLabelTextStyle={$buttonLabelText}
//       />
//     </Screen>
//   );
// };

// const $center: ViewStyle = { justifyContent: "center", alignItems: "center" };

// const $root: ViewStyle = { ...$center, padding: moderateScale(16) };

// const $image = (width: number): ImageStyle => ({
//   width: width / 2,
//   height: width / 2,
//   margin: "auto",
// });

// const $textContainer: ViewStyle = {
//   justifyContent: "center",
//   alignItems: "center",
//   gap: moderateScale(8),
//   marginTop: moderateScale(20),
//   marginBottom: moderateScale(24),
// };

// const $button: ViewStyle = { borderColor: colors.palette.black };

// const $buttonLabelText: TextStyle = { fontFamily: typography.primary.bold };

// export default NotFoundScreen;
