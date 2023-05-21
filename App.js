import {SafeAreaProvider} from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'
import Navigation from '@/navigation/Navigation'


const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
      <StatusBar style='light' />
    </>
  )
}

export default App