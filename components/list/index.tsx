import { View, Text, FlatList } from 'react-native';
import { useAppContext } from '@/hooks/use-app-context';
import { useMatches } from '@/hooks/use-matches';
import { Match } from '@/models';
import { styles } from './styles';
import { ListItem } from '../list-item';

const renderItem = ({ item }: { item: Match }) => <ListItem item={item} />;

export const List = () => {
  const { matches } = useAppContext();
  const { isFetching, isLoading } = useMatches();

  return (
    <View style={[styles.section, isFetching && styles.section_blurred]}>
      <FlatList
        data={matches}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        windowSize={7}
        ListEmptyComponent={
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              {isLoading
                ? 'Загрузка...'
                : ' Матчи отсутствуют, попробуйте позже'}
            </Text>
          </View>
        }
      />
    </View>
  );
};
