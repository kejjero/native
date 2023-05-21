import { validEmail } from '@/shared/regex'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { Input } from '@/ui'
import { FC } from 'react'
import { Control } from 'react-hook-form'

interface IAuthFields {
	control: Control<IAuthFormData>
	isPassRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({ control, isPassRequired }) => {
	return (
		<>
			<Input<IAuthFormData>
				placeholder='Почта'
				control={control}
				name='email'
				rules={{
					required: 'Вы не заполнили почту',
					pattern: {
						value: validEmail,
						message: 'Некорректная почта'
					}
				}}
				keyboardType='email-address'
			/>
			<Input<IAuthFormData>
				placeholder='Пароль'
				control={control}
				name='password'
				rules={
					isPassRequired
						? {
								required: 'Вы не заполнили пароль',
								minLength: {
									value: 6,
									message: 'Минимальная длина пароля 6 символов'
								}
						  }
						: {}
				}
			/>
		</>
	)
}

export default AuthFields
