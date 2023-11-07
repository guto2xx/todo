import { TextInput } from 'react-native'
import { styles } from './styles'

type prop = {
  placeholder: string
}

export function Input({ placeholder }: prop) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#808080"
    ></TextInput>
  )
}
