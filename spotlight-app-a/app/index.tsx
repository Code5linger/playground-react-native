import { Link } from 'expo-router';
import { View } from 'react-native';
import { styles } from '../styles/auth.styles';

export default function Index() {
  return (
    <View style={styles.container}>
      <Link style={styles.button} href={'/notifications'}>
        Visit notifications screen
      </Link>
      <Link style={styles.button} href={'/profile'}>
        Visit profile screen
      </Link>
    </View>
  );
}
