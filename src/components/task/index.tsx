import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Button } from '../../components/button'
import { Checkbox } from '../checkbox'

type Props = {
  text: string
  onRemove: () => void
  onFinish: (text: string) => void
}

export function Task({ text, onRemove, onFinish }: Props) {
  const [isChecked, setChecked] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkboxWrapper}
        onPress={() => {
          setChecked(!isChecked)
          onFinish(text)
        }}
      >
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#5E60CE' : undefined}
          hitSlop={{ right: 20, left: 20, bottom: 20, top: 20 }}
        ></Checkbox>

        <Text style={isChecked ? styles.textChecked : styles.text}>{text}</Text>
      </TouchableOpacity>

      <View style={styles.deleteWrapper}>
        <Button type="delete" onPress={onRemove}></Button>
      </View>
    </View>
  )
}
