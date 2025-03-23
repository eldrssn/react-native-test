import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

export const useAnimatedNumber = (num: number) => {
  const [animatedNum, setAnimatedNum] = useState(num);

  const opacity = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (num !== animatedNum) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 10,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setAnimatedNum(num);
        translateY.setValue(-10);
        opacity.setValue(0);

        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start();
      });
    }
  }, [num]);

  return {
    animatedNum,
    opacity,
    translateY,
  };
};
