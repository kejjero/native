import { IRoute } from './navigation.types'
import { Auth, Home } from '@/screens'

export const userRoutes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Auth',
		component: Auth
	}
]