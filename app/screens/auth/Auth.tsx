import { IAuthFormData } from '@/shared/types/auth.interface'
import { IconButton, Input, TextButton, Title } from '@/ui'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Alert, View } from 'react-native'

const Auth: FC = () => {
	const [isRegister, setIsRegister] = useState(false)
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IAuthFormData>({
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
				<Input
					name='email'
					control={control}
					error={errors.email}
					placeholder='Логин'
				/>
				<Input
					secret
					name='password'
					placeholder='Пароль'
					control={control}
					error={errors.password}
				/>
				<IconButton icon={'film'} onPress={handleSubmit(onSubmit)}>
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
