import { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export const Header: FC = () => {
  return (
    <View style={styles.header_wrap}>
      <Text style={styles.header_title}>Match Tracker</Text>
    </View>
  );
};
