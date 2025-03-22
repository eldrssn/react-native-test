import { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { PropsType } from './types';

export const TeamDetails: FC<PropsType> = ({ team }) => {
  const generalTeamContent = [
    { name: 'Points:', value: `+${team.points}` },
    { name: 'Место:', value: team.place },
    { name: 'Всего убийств:', value: team.total_kills },
  ];

  return (
    <View style={styles.content}>
      <View style={styles.players}>
        {team.players.map((player, i, arr) => (
          <View
            style={[styles.player, i === arr.length - 1 && styles.player_last]}
            key={player.username}
          >
            <View style={styles.player_info}>
              <Image
                style={styles.player_img}
                source={require('../../../../assets/images/avatar_global.png')}
              />
              <Text style={styles.player_name}>{player.username}</Text>
            </View>
            <View style={styles.player_score}>
              <Text style={styles.player_score_text}>Убийств:</Text>
              <Text style={styles.player_score_num}>{player.kills}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.general_list_wrapper}>
        <View style={styles.general_list}>
          {generalTeamContent.map(({ name, value }, i, arr) => (
            <View
              style={[
                styles.general_item,
                i === arr.length - 1 && styles.general_item_last,
              ]}
            >
              <Text style={styles.general_item_name}>{name}</Text>
              <Text style={styles.general_item_value}>{value}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
