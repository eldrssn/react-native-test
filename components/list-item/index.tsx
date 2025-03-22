import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { PropsType } from './types';
import { styles } from './styles';
import { MainContent } from './components/main-content';
import { DescriptionContent } from './components/description-content';
import ArrowDownIcon from '../ui/icons/arrow-down-icon';

export const ListItem: FC<PropsType> = ({ item }) => {
  return (
    <View style={styles.wrapper}>
      <MainContent item={item} />
      <DescriptionContent item={item} />
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <ArrowDownIcon />
      </TouchableOpacity>
    </View>
  );
};
