import { routes } from './user.routes'
import { useCheckAuth } from '@/hooks/useCheckAuth'
import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { Auth } from '@/screens'
import Screen404 from '@/screens/system/Screen404'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const PrivateNavigator = () => {
	const Stack = createNativeStackNavigator<TypeRootStackParamList>()
	const { user } = useCheckAuth()

	return (
		<Stack.Navigator
			screenOptions={{
				contentStyle: {
					backgroundColor: '#000'
				},
				headerShown: false
			}}
		>
			{user ? (
				routes.map(route =>
					user.isAdmin || !route.isAdmin ? (
						<Stack.Screen key={route.name} {...route} />
					) : (
						<Stack.Screen
							key='Screen404'
							name='Screen404'
							component={Screen404}
						/>
					)
				)
			) : (
				<Stack.Screen name='Auth' component={Auth} />
			)}
		</Stack.Navigator>
	)
}

export default PrivateNavigator
