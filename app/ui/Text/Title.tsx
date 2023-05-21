import { FC } from 'react'
import { Text } from 'react-native'

const Title: FC<any> = ({ children, className }) => {
	return (
		<Text
			className={`text-4xl text-center font-bold mb-4 text-white ${className}`}
		>
			{children}
		</Text>
	)
}

export default Title
