import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

const restaurants = [
  {
    id: 1,
    name: 'Restaurant 1',
    image: 'https://www.gstatic.com/webp/gallery/1.jpg',
  },
  {
    id: 2,
    name: 'Restaurant 2',
    image: 'https://www.gstatic.com/webp/gallery/2.jpg',
  },
  {
    id: 3,
    name: 'Restaurant 3',
    image: 'https://www.gstatic.com/webp/gallery/2.jpg',
  },
  {
    id: 4,
    name: 'Restaurant 4',
    image: 'https://www.gstatic.com/webp/gallery/2.jpg',
  },
]
// Explore View showing restaurant cards in a grid
export default function ExploreScreen() {
  return (
    <ScrollView>
      <Text style={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 6 }}>Explore Screen</Text>
      <View style={{ gap: 12 }}>
        {restaurants.map(restaurant => (
          <Link href={`shops/${restaurant.id}`} key={restaurant.id}>
            <Text key={restaurant.id}>{restaurant.name}</Text>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}
