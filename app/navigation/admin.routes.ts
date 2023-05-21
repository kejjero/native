import { IRoute } from '@/navigation/navigation.types'
import { Admin } from '@/screens'

export const adminRoutes: IRoute[] = [
	{
		name: 'Admin',
		component: Admin,
		isAdmin: true,
	}
]