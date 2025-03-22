import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 4,
    padding: 8,
    width: '100%',
    backgroundColor: '#0b0e12',
    marginBottom: 12,
  },
  button: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    transform: [{ rotate: '0deg' }],
  },
  button_opened: {
    transform: [{ rotate: '180deg' }],
  },
});
