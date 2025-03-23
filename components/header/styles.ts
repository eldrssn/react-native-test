import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header_wrap: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header_title: {
    fontFamily: 'TacticSans-BlkIt',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
    marginBottom: 14,
  },
  header_info: {
    flexDirection: 'row',
  },
  header_status: {
    borderRadius: 4,
    padding: 16,
    height: 56,
    backgroundColor: '#0f1318',
    marginLeft: 12,
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 18,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    opacity: 0,
  },
  header_statusActive: {
    opacity: 1,
  },
  header_refreshButton: {
    borderRadius: 4,
    padding: 16,
    width: '100%',
    height: 56,
    backgroundColor: '#eb0237',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 18,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    flexDirection: 'row',
  },
  header_refreshButton_text: {
    color: '#fff',
    marginRight: 10,
  },
  header_refreshButton_disabled: {
    opacity: 0.8,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  iconAfter: {
    width: 28,
    height: 28,
    marginLeft: 10,
  },
});
