import Navigation from '@/navigation/Navigation'
import AuthProvider from '@/providers/auth/AuthProvider'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
	return (
		<>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</AuthProvider>
			<StatusBar style='light' />
		</>
	)
}

export default App
