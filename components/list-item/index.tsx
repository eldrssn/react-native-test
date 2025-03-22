import { FC, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { PropsType } from './types';
import { styles } from './styles';
import { MainContent } from './components/main-content';
import { DescriptionContent } from './components/description-content';
import ArrowDownIcon from '../ui/icons/arrow-down-icon';

export const ListItem: FC<PropsType> = ({ item }) => {
  const [isOpenedDescriptions, setIsOpenDescriptions] = useState(false);

  const toggleDesctiptions = () =>
    setIsOpenDescriptions((isOpenedDescriptions) => !isOpenedDescriptions);

  return (
    <View style={styles.wrapper}>
      <MainContent item={item} />
      {isOpenedDescriptions && <DescriptionContent item={item} />}
      <TouchableOpacity
        onPress={toggleDesctiptions}
        style={[styles.button, isOpenedDescriptions && styles.button_opened]}
      >
        <ArrowDownIcon />
      </TouchableOpacity>
    </View>
  );
};
