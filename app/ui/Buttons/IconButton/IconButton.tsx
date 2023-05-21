import { classNames } from '@/libs/classNames'
import { TypeFeatherIconNames } from '@/shared/types/icon.interface'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { FC, PropsWithChildren } from 'react'
import { Pressable, Text } from 'react-native'

interface IIconButton {
	icon?: TypeFeatherIconNames
	onPress?: () => void
	className?: string
}

const IconButton: FC<PropsWithChildren<IIconButton>> = ({
	children,
	onPress,
	className,
	icon,
	...rest
}) => {
	const classBtn = classNames('self-center mt-3.5', {}, [className])
	const classText = classNames('text-white text-xl font-medium', {
		'ml-2': Boolean(icon)
	})
	const classGradient = classNames(
		'w-full py-3 px-8 rounded-2xl items-center',
		{ 'flex-row': Boolean(icon) }
	)

	return (
		<Pressable onPress={onPress} className={classBtn} {...rest}>
			<LinearGradient
				start={{ x: 0, y: 0.75 }}
				end={{ x: 1, y: 0.25 }}
				className={classGradient}
				colors={['#DC3F41', '#a6282b']}
			>
				{icon ? <Feather name={icon} color='white' size={18} /> : null}
				<Text className={classText}>{children}</Text>
			</LinearGradient>
		</Pressable>
	)
}

export default IconButton
