import { ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, View } from 'react-native';

export const useAnimatedToggleList = () => {
  const [isOpened, setIsOpened] = useState(false);
  const currentContentHeight = useRef(new Animated.Value(0)).current;
  const contentHeightRef = useRef(0);

  const toggle = useCallback(() => {
    const toValue = isOpened ? 0 : 1;

    Animated.timing(currentContentHeight, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsOpened(!isOpened);
  }, [isOpened]);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    contentHeightRef.current = height;
  }, []);

  const animatedHeight = useMemo(
    () =>
      currentContentHeight.interpolate({
        inputRange: [0, 1],
        outputRange: [0, contentHeightRef.current],
      }),
    [contentHeightRef.current],
  );

  const value = useMemo(
    () => ({ isOpened, toggle, animatedHeight, onLayout }),
    [isOpened, toggle, animatedHeight, onLayout],
  );

  return value;
};
