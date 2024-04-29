import { ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useLocalSearchParams, useNavigation } from 'expo-router';

const shopProducts = [
  {
    id: 1,
    name: 'Product 1',
  },
  {
    id: 2,
    name: 'Product 2',
  },
  {
    id: 3,
    name: 'Product 3',
  },
  {
    id: 4,
    name: 'Product 4',
  },
];

// Explore View showing restaurant cards in a grid
export default function ExploreScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  navigation.setOptions({ title: `Shop ${id}` });

  return (
    <ScrollView>
      <Text style={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 6 }}>Shop {id}</Text>

      <View style={{ gap: 12 }}>
        {shopProducts.map(product => (
          <Text key={product.id}>{product.name}</Text>
        ))}
      </View>

    </ScrollView>
  );
}
