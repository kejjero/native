import { classNames } from '@/libs/classNames'
import { FC } from 'react'
import { Pressable, Text } from 'react-native'

interface TextButtonType {
	onPress: () => void
	children: string
	className?: string
}

const TextButton: FC<TextButtonType> = ({ onPress, children, className }) => {
	const classBtn = classNames('self-center', {}, [className])

	return (
		<Pressable className={classBtn} onPress={onPress}>
			<Text className='text-gray-500 text-xl'>{children}</Text>
		</Pressable>
	)
}

export default TextButton
