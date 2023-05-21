import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { userRoutes } from '@/navigation/user.routes'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Navigation = () => {
	const Stack = createNativeStackNavigator<TypeRootStackParamList>()

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					contentStyle: {
						backgroundColor: '#000'
					},
					headerShown: false
				}}
			>
				{userRoutes.map(route => (
					<Stack.Screen key={route.name} {...route} />
				))}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
