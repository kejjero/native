import { classNames } from '@/libs/classNames'
import { IInput } from '@/shared/types/input.interface'
import { Controller, FieldError } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

const Input = <T extends Record<string, any>>({
	control,
	rules,
	name,
	className,
	...rest
}: IInput<T>): JSX.Element => {
	const classInput = (error: FieldError | undefined) =>
		classNames(
			'rounded-xl h-16 text-xl bg-gray text-white p-3.5 border-transparent',
			{
				'border-red': Boolean(error)
			},
			[className]
		)
	return (
		<Controller
			control={control}
			name={name}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<View className='flex-col w-full flex-auto max-h-28'>
					<TextInput
						placeholderTextColor='#646464'
						className={classInput(error)}
						value={value || ''}
						autoCapitalize='none'
						onChangeText={onChange}
						onBlur={onBlur}
						secureTextEntry={false}
						{...rest}
					/>
					<Text className='text-white my-1.5 text-lg text-red min-h-full'>
						{error?.message}
					</Text>
				</View>
			)}
		/>
	)
}

export default Input
