import { FC } from 'react';
import { Image, Text, View } from 'react-native';

import { PropsType } from './types';
import { getStatusColor } from './utils';
import { styles } from './styles';

export const ListItem: FC<PropsType> = ({ item }) => {
  const { homeTeam, homeScore, awayTeam, awayScore, status } = item;

  const statusColor = getStatusColor(status);

  return (
    <View style={styles.wrapper}>
      <View style={styles.main}>
        <View style={styles.team}>
          <Image
            style={styles.team_img}
            source={require('../../assets/images/team.png')}
          />
          <Text style={styles.team_name}>{homeTeam.name}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.score}>
            {homeScore} : {awayScore}
          </Text>
          <View style={{ ...styles.status, backgroundColor: statusColor }}>
            <Text style={styles.status_text}>{status}</Text>
          </View>
        </View>
        <View style={[styles.team, styles.team_away]}>
          <Text style={styles.team_name}>{awayTeam.name}</Text>
          <Image
            style={styles.team_img}
            source={require('../../assets/images/team.png')}
          />
        </View>
      </View>
    </View>
  );
};
