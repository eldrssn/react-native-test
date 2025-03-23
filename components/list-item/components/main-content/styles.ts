import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
  },
  team: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  team_away: {
    justifyContent: 'flex-end',
  },
  team_name: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: 14,
    color: '#fff',
    padding: 6,
  },
  team_img: {
    width: 28,
    height: 28,
    objectFit: 'contain',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 44,
  },
  score: {
    marginBottom: 4,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  score_value: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: 14,
    color: '#fff',
  },
  score_divider: {
    paddingHorizontal: 4,
  },
  status: {
    borderRadius: 4,
    width: 70,
    height: 23,
    backgroundColor: '#43ad28',
    justifyContent: 'center',
    alignItems: 'center',
  },

  status_text: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: 12,
    color: '#fff',
  },
});
