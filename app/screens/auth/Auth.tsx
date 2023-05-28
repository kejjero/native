import AuthFields from './AuthFields'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { IconButton, TextButton, Title } from '@/ui'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Alert, View } from 'react-native'

const Auth = () => {
	const [isRegister, setIsRegister] = useState(false)
	const { control, handleSubmit, reset } = useForm<IAuthFormData>({
		mode: 'onSubmit'
	})

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		Alert.alert(JSON.stringify(data))
		reset()
	}

	return (
		<View className='mx-2 items-center justify-center h-full'>
			<View className='w-10/12 items-center'>
				<Title>{isRegister ? 'Регистрация' : 'Войти'}</Title>
				<AuthFields control={control} isPassRequired />
				<IconButton icon='film' onPress={handleSubmit(onSubmit)}>
					Продолжить
				</IconButton>
				<TextButton
					onPress={() => setIsRegister(!isRegister)}
					className='mt-5 self-end'
				>
					{isRegister ? 'Войти' : 'Регистрация'}
				</TextButton>
			</View>
		</View>
	)
}

export default Auth
