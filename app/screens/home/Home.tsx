import { View, Text, Pressable } from 'react-native'
import { FC } from 'react'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Home: FC = () => {
	const { navigate } = useTypedNavigation()
	return(
		<View className="flex-1 items-center justify-center bg-white">
			<Pressable onPress={() => navigate('Auth')}>
				<Text className='text-red-950'>Click me</Text>
			</Pressable>
		</View>
	)
}

export default Home