import { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useMatches } from '@/hooks/use-matches';
import UpdateIcon from '../ui/icons/update-icon';
import { styles } from './styles';

export const Header: FC = () => {
  const { refetch, isFetching, error } = useMatches();

  const handleRefetch = () => refetch();

  return (
    <View style={styles.header_wrap}>
      <Text style={styles.header_title}>Match Tracker</Text>
      <View style={styles.header_info}>
        <TouchableOpacity
          style={styles.header_refreshButton}
          onPress={handleRefetch}
          disabled={isFetching}
        >
          <Text style={styles.header_refreshButton_text}>Обновить</Text>
          <UpdateIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};
