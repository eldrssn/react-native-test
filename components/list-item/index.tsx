import { FC } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';

import { PropsType } from './types';
import { styles } from './styles';
import { MainContent } from './components/main-content';
import { DescriptionContent } from './components/description-content';
import ArrowDownIcon from '../ui/icons/arrow-down-icon';
import { useAnimatedToggleList } from '@/hooks/use-animated-toggle-list';

export const ListItem: FC<PropsType> = ({ item }) => {
  const { isOpened, toggle, animatedHeight, onLayout } =
    useAnimatedToggleList();

  return (
    <View style={styles.wrapper}>
      <MainContent item={item} />
      <Animated.View style={{ height: animatedHeight, overflow: 'hidden' }}>
        <View style={styles.hiddenContent} onLayout={onLayout}>
          <DescriptionContent item={item} />
        </View>
      </Animated.View>

      <TouchableOpacity
        onPress={toggle}
        style={[styles.button, isOpened && styles.button_opened]}
      >
        <ArrowDownIcon />
      </TouchableOpacity>
    </View>
  );
};
