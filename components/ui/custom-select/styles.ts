import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    paddingHorizontal: 8,
    marginBottom: 32,
  },

  selectButton: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#0b0e12',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectButton_text: {
    fontWeight: '500',
    fontSize: 16,
    color: '#b4b5b6',
  },
  optionsList: {
    marginHorizontal: 8,
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    borderRadius: 4,
    marginTop: 8,
    backgroundColor: '#0f1318',
    zIndex: 2,
    shadowColor: '#0D1013',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 4,
    paddingVertical: 6,
  },
  option: {
    padding: 12,
  },
  option_text: {
    fontWeight: 500,
    fontSize: 16,
    color: '#b4b5b6',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
});
