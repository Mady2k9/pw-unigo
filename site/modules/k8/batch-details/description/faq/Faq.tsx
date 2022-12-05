import { FAQ, LoadingSection, Typography } from '@components/ui'
import useFaqs from '@lib/hooks/faq/useFaqs'

const Faq = ({ categoryId }: { categoryId: string }) => {
  const { data, isLoading } = useFaqs({
    faqCatId: categoryId,
  })

  if (isLoading) return <LoadingSection />

  const faqData = data.map((data: any) => ({
    title: data.title,
    description: data.description,
  }))

  return faqData.length > 0 ? (
    <div>
      <FAQ items={faqData} multipleOpen={false} />
    </div>
  ) : (
    <></>
  )
}

export default Faq
