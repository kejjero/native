import {
	IContext,
	TypeUserState
} from '@/providers/auth/auth-provider.interface'
import * as SplashScreen from 'expo-splash-screen'
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'

export const AuthContent = createContext({} as IContext)

const AuthProvider: FC<PropsWithChildren<any>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

	SplashScreen.preventAutoHideAsync()

	useEffect(() => {
		let mounted = false
		const checkAccessToken = async () => {
			try {
			} catch {
			} finally {
				await SplashScreen.hideAsync()
			}
		}

		checkAccessToken()

		return () => {
			mounted = true
		}
	}, [])
	return (
		<AuthContent.Provider value={{ user, setUser }}>
			{children}
		</AuthContent.Provider>
	)
}

export default AuthProvider
