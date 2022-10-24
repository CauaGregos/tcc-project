import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import React, { useRef } from "react";
import { Animated } from "react-native";
import { View } from "react-native";
import styles from "./style";

const SplashForgot = (props) => {
  // medidas de tamanho da tela em que o componente esta sendo renderizado
  const navigate = useNavigation();
  const animationProgress = useRef(new Animated.Value(0));

  return (
    <View style={{ backgroundColor: "#ffffff" }}>
      <LottieView
        style={styles.Animation}
        source={require("../assets/animForgot.json")}
        progress={animationProgress.current}
        onAnimationFinish={() => navigate.navigate(props.route.params?.screen)}
        loop={false}
        autoPlay
        speed={2}
      />
    </View>
  );
};

export default SplashForgot;
