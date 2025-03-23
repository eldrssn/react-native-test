import { FC } from 'react';
import { Animated, Image, Text, View } from 'react-native';
import { PropsType } from '../../types';
import { getStatusColor } from '../../utils';
import { styles } from './styles';
import { useAnimatedNumber } from '@/hooks/use-animated-number';

export const MainContent: FC<PropsType> = ({ item }) => {
  const { homeTeam, homeScore, awayTeam, awayScore, status } = item;
  const statusColor = getStatusColor(status);

  const homeAnimated = useAnimatedNumber(homeScore);
  const awayAnimated = useAnimatedNumber(awayScore);

  return (
    <View style={styles.main}>
      <View style={styles.team}>
        <Image
          style={styles.team_img}
          source={require('../../../../assets/images/team.png')}
        />
        <Text style={styles.team_name}>{homeTeam.name}</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.score}>
          <Animated.Text
            style={{
              ...styles.score_value,
              opacity: homeAnimated.opacity,
              transform: [{ translateY: homeAnimated.translateY }],
            }}
          >
            {homeAnimated.animatedNum}
          </Animated.Text>
          <Text style={[styles.score_value, styles.score_divider]}>:</Text>
          <Animated.Text
            style={{
              ...styles.score_value,
              opacity: awayAnimated.opacity,
              transform: [{ translateY: awayAnimated.translateY }],
            }}
          >
            {awayAnimated.animatedNum}
          </Animated.Text>
        </View>
        <View style={styles.score}></View>
        <View style={{ ...styles.status, backgroundColor: statusColor }}>
          <Text style={styles.status_text}>{status}</Text>
        </View>
      </View>
      <View style={[styles.team, styles.team_away]}>
        <Text style={styles.team_name}>{awayTeam.name}</Text>
        <Image
          style={styles.team_img}
          source={require('../../../../assets/images/team.png')}
        />
      </View>
    </View>
  );
};
