import { useFonts } from 'expo-font'

import { StatusBar } from 'react-native'
import { Home } from './src/screens/home'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  })

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Home />
    </>
  )
}
