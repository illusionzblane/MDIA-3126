import { Text, Pressable, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
        <Text>This is a page about cheese. 🧀</Text>
        <Link href="/sandwhich" asChild>
      <Pressable>
            <Text>Sandwhich 🥪</Text>
      </Pressable>
        </Link>
    </View>
  )
}
