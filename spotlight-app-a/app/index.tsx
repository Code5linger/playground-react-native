import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/auth.styles';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>

      <TouchableOpacity onPress={() => alert('🫣')}>
        <Text>Press Me</Text>
      </TouchableOpacity>

      <Pressable onPress={() => alert('You Pressed!')}>
        <Text>Press Me</Text>
      </Pressable>

      <Image
        source={require('../assets/images/splash-icon.png')}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1672814519670-16eedb80ac83?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={{ width: 200, height: 200, resizeMode: 'cover' }}
      />
    </View>
  );
}
