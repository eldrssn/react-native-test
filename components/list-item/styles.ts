import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 4,
    padding: 8,
    width: '100%',
    minHeight: 87,
    backgroundColor: '#0b0e12',
    marginBottom: 12,
    justifyContent: 'space-between',
    position: 'relative',
    flexDirection: 'row',
  },
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
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: 14,
    color: '#fff',
    marginBottom: 4,
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
