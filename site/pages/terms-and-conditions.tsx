import { Layout } from '@components/common'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { termsAndConditionsFetcher } from '@lib/api/fetchers/public-fetchers'
import { Container, LoadingSection, Typography } from '@components/ui'
import useTermsAndConditions from '@lib/hooks/public/useTermsAndConditions'

export default function TermsAndConditions() {
  const { data, isLoading } = useTermsAndConditions()
  if (isLoading) return <LoadingSection />

  return (
    <Container>
      <Typography html={data[0]?.description} />
    </Container>
  )
}

TermsAndConditions.Layout = Layout
