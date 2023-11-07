import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Button } from '../../components/button'
import { Checkbox } from '../checkbox'

export function Task() {
  const [isChecked, setChecked] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkboxWrapper}
        onPress={() => setChecked(!isChecked)}
      >
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#5E60CE' : undefined}
          hitSlop={{ right: 20, left: 20, bottom: 20, top: 20 }}
        ></Checkbox>

        <Text style={isChecked ? styles.textChecked : styles.text}>
          Lavar a louça.
        </Text>
      </TouchableOpacity>

      <View style={styles.deleteWrapper}>
        <Button type="delete"></Button>
      </View>
    </View>
  )
}
