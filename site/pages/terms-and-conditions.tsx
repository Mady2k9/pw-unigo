import { Layout } from '@components/common'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { termsAndConditionsFetcher } from '@lib/api/fetchers/public-fetchers'
import { Container, Typography } from '@components/ui'

export async function getStaticProps({}: GetStaticPropsContext) {
  let content = ''
  try {
    const response = await termsAndConditionsFetcher()
    if (response?.data?.[0]) {
      content = response?.data?.[0]?.description
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      content,
    },
    revalidate: 60 * 60 * 24 * 30,
  }
}

export default function TermsAndConditions({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Typography html={content} />
    </Container>
  )
}

TermsAndConditions.Layout = Layout
