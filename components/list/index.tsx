import { useAppContext } from '@/hooks/use-app-context';
import { useMatches } from '@/hooks/use-matches';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { ListItem } from '../list-item';

export const List = () => {
  const { matches } = useAppContext();
  const { isFetching, isLoading } = useMatches();

  return (
    <ScrollView style={[styles.section, isFetching && styles.section_blurred]}>
      {!isLoading &&
        matches.map((item, index) => <ListItem item={item} key={index} />)}

      {!isLoading && !matches.length && (
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Матчи отсутствуют, попробуйте позже
          </Text>
        </View>
      )}

      {isLoading && (
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Загрузка...</Text>
        </View>
      )}
    </ScrollView>
  );
};
