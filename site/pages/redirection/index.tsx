import { Loader, Typography, useUIMinimal } from '@components/ui'
import { useAuth } from '@lib/hooks/useAuth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import { WidgetTypes, FormRegex } from '@moduleConfig/FormConfig'
import { WIDGET_CONFIG } from '@lib/widgets'

export default function Redirection() {
  const { exchangeToken, getMe } = useAuth()
  const { handleUserUpdated, user } = useUIMinimal()
  const router = useRouter()
  const { query } = router
  const { token, random_id: randomId, widget, ...q } = query
  const [authenticationError, setAuthenticationError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleWidgetRequest = async () => {
    const RegexConfig = FormRegex[widget as WidgetTypes]

    if (RegexConfig) {
      let errors: string[] = []

      for (let i in RegexConfig) {
        const keyConfig = RegexConfig[i] as any
        if (
          keyConfig &&
          keyConfig.required &&
          keyConfig.pattern &&
          new RegExp(keyConfig.pattern).test(query[i] as string)
        ) {
          errors.push(`Pattern ${keyConfig.pattern} expected for ${i}`)
        }
      }
      if (!errors?.length) {
        const requestedWidget: any = widget || ''
        if (requestedWidget.length > 0) {
          router.push(
            {
              pathname: WIDGET_CONFIG[requestedWidget] as string,
              query: {
                ...q,
              },
            },
            undefined
          )
        }
      } else {
        console.log(`Found query errors : ${errors?.join(', ')}`)
      }
    } else {
      // TODO: No Regex Config found for this widget
      setAuthenticationError(true)
      setErrorMessage('Missing parameters or widget not found')
    }
  }
  const effect = async () => {
    try {
      localStorage.setItem('token', token as string)
      localStorage.setItem('randomId', randomId as string)
      await exchangeToken()
      await getMe()
      handleUserUpdated()
    } catch (e) {
      setAuthenticationError(true)
      setErrorMessage('Error while Authenticating the user')
      // TODO : Error event in case of error
    }
  }
  useEffect(() => {
    if (token && randomId) {
      effect()
    }
  }, [token, randomId])

  useEffect(() => {
    if (user && widget) {
      handleWidgetRequest()
    }
  }, [user, widget])
  if (authenticationError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-red-400">
        <ExclamationTriangleIcon className={'h-[50px] w-[50px]'} />
        <div className="mt-3">
          <Typography variant={'heading4'} weight={700}>
            <span>{errorMessage}</span>
          </Typography>
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Loader scale={2.5} />
      <div className="mt-3">
        <Typography variant={'heading4'} weight={700}>
          <span className="text-indigo-400">Loading</span>
        </Typography>
      </div>
    </div>
  )
}
