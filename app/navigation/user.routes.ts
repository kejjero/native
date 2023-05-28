import { IRoute } from './navigation.types'
import { adminRoutes } from '@/navigation/admin.routes'
import { Auth, Home } from '@/screens'

export const userRoutes: IRoute[] = [
	// {
	// 	name: 'Home',
	// 	component: Home
	// },
	{
		name: 'Auth',
		component: Auth
	}
]

export const routes = [...userRoutes, ...adminRoutes]
