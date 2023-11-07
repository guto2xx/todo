import { TouchableOpacity, Image, View } from 'react-native'
import { styles } from './styles'
import { createIcon } from '../../../assets'
import { deleteIcon } from '../../../assets'

type prop = {
  type: 'create' | 'delete'
  onPress: () => void
}

export function Button({ type, onPress }: prop) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        style={type == 'create' ? styles.createButton : styles.deleteButton}
      >
        <Image source={type == 'create' ? createIcon : deleteIcon}></Image>
      </View>
    </TouchableOpacity>
  )
}
