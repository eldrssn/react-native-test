import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    width: '100%',
  },
  players: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 8,
  },
  player: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: '#101318',
    padding: 7,
    marginRight: 8,
  },

  player_last: {
    marginRight: 0,
  },

  player_info: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  player_name: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 20,
    color: '#fafafa',
  },

  player_img: {
    width: 32,
    height: 32,
    marginRight: 4,
  },
  player_score: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  player_score_text: {
    fontWeight: 500,
    fontSize: 12,
    color: 'rgba(250, 250, 250, 0.4)',
    marginRight: 8,
  },
  player_score_num: {
    fontWeight: 500,
    fontSize: 14,
    color: '#f2f6f6',
  },
  general_list_wrapper: {
    backgroundColor: '#101318',
    borderRadius: 4,
  },

  general_list: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  general_item: {
    flex: 1,
    flexDirection: 'row',
    borderRightColor: '#141A21',
    borderRightWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  general_item_last: {
    borderRightWidth: 0,
  },
  general_item_name: {
    fontWeight: 500,
    fontSize: 12,
    color: 'rgba(250, 250, 250, 0.4)',
    marginRight: 8,
  },
  general_item_value: {
    fontWeight: 600,
    fontSize: 14,
    color: '#f2f6f6',
  },
});
