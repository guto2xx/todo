import { Text, View } from 'react-native'
import { styles } from './styles'

type prop = {
  text: string
  value: number
  color: 'blue' | 'purple'
}

export function StatusText({ text, value, color }: prop) {
  return (
    <View style={styles.container}>
      <Text
        style={(styles.text, color === 'blue' ? styles.blue : styles.purple)}
      >
        {text}
      </Text>

      <View style={styles.valueWrapper}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  )
}
