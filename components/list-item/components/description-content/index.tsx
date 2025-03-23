import { FC } from 'react';
import { View } from 'react-native';
import TeamDivider from '@/components/ui/team-divider';
import { PropsType } from '../../types';
import { TeamDetails } from '../team-details';
import { styles } from './styles';

export const DescriptionContent: FC<PropsType> = ({ item }) => {
  const { homeTeam, awayTeam } = item;

  return (
    <View style={styles.container}>
      <TeamDetails team={homeTeam} />
      <TeamDivider text="VS" />
      <TeamDetails team={awayTeam} />
    </View>
  );
};
