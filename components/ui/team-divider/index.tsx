import { FC } from 'react';
import { Text, View } from 'react-native';

import { PropsType } from './types';
import { styles } from './styles';

const TeamDivider: FC<PropsType> = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      {text && <Text style={styles.text}>{text}</Text>}
      <View style={styles.line} />
    </View>
  );
};

export default TeamDivider;
