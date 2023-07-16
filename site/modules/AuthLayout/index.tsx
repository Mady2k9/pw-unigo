import { useUI } from '@components/ui'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'

interface props {
    children: ReactNode,
    isProtected: boolean
}

const AuthLayout :FC<props>= ({ children, isProtected = false }) => {
    const router = useRouter()
    const { user } = useUI()

    useEffect(() => {
        if (user === null && isProtected) {
            router.push('/login')
        }
     }, [router, user, isProtected])
    return ( 
        <>
            {children}
        </>
    )
}

export default AuthLayout