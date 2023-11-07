import { TouchableOpacity, Image, View } from 'react-native'
import { styles } from './styles'
import { createIcon } from '../../../assets'

type prop = {
  onPress: () => void
}

export function Button({ onPress }: prop) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.button}>
        <Image source={createIcon}></Image>
      </View>
    </TouchableOpacity>
  )
}
