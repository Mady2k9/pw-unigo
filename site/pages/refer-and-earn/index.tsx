import { Layout } from '@components/common'
import { Container, LoadingSection } from '@components/ui'
import { useMyOrgPreferences } from '@lib/hooks/useMyOrgPreferences'
import {
  Header,
  Hero,
  RedeemSection,
  ReferredFriend,
} from '@modules/k8/refer-and-earn'

const myPrefs: string[] = [
  'CoinReferral',
  'WalletBankTransfer',
  'WalletCouponCardTransfer',
]

const ReferAndEarn = () => {
  const { data, loading } = useMyOrgPreferences(myPrefs)
  if (loading || !data) {
    return <LoadingSection />
  }
  return (
    <Layout isProtected={true} variant="NoPadding">
      <Container>
        <Header />
        <Hero orgData={data[0]} />
        <RedeemSection orgData={data[0]} />
        <ReferredFriend />
      </Container>
    </Layout>
  )
}

export default ReferAndEarn
