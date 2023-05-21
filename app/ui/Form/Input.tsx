import { IAuthFormData } from '@/shared/types/auth.interface'
import { FC } from 'react'
import { Control, FieldError, useController } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

interface IInput {
	name: 'email' | 'password'
	control: Control<IAuthFormData>
	className?: string
	secret?: boolean
	error?: FieldError
	placeholder?: string
}

const Input: FC<IInput> = ({
	name,
	control,
	className,
	secret = false,
	error,
	placeholder,
	...otherProps
}) => {
	const { field } = useController({
		name,
		control,
		defaultValue: ''
	})

	return (
		<View className='flex-col w-full flex-auto max-h-28'>
			<TextInput
				placeholder={placeholder}
				placeholderTextColor='#646464'
				className={`rounded-xl h-16 text-xl bg-gray text-white p-3.5 ${className}`}
				value={secret ? field.value : field.value.toLocaleLowerCase()}
				onChangeText={field.onChange}
				secureTextEntry={secret}
				{...otherProps}
			/>
			<Text className='text-white my-1.5 text-lg text-red min-h-full'>
				{'error'}
			</Text>
		</View>
	)
}

export default Input
