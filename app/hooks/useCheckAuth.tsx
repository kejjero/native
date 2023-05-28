import { AuthContent } from '@/providers/auth/AuthProvider'
import { useContext } from 'react'

export const useCheckAuth = () => useContext(AuthContent)
