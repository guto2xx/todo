import { TextInput } from 'react-native'
import { styles } from './styles'

type prop = {
  placeholder: string
  onChangeText: (text: string) => void
  value: string
}

export function Input({ placeholder, onChangeText, value }: prop) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#808080"
      value={value}
      onChangeText={onChangeText}
    ></TextInput>
  )
}
