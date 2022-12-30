import { BlankLayout } from '@components/common/Layout'
import { ChevronLeft } from '@components/icons'
import { Button, LoadingSection, Typography } from '@components/ui'
import Image from 'next/image'
import Skkiped from '@assets/images/results/skipped.png'
import Time_taken from '@assets/images/results/time_taken.png'
import Accuracy from '@assets/images/results/accuracy.png'
import Correct from '@assets/images/results/correct.png'
import Incorrect from '@assets/images/results/incorrect.png'
import Completed from '@assets/images/results/completed.png'
import useGetTestResult from '@lib/hooks/exercise/useGetTestResult'
import { useRouter } from 'next/router'
import { router } from 'next/client'

export interface TestResultArray {
  title: string
  img: any
  value: any
}

const TestResult = () => {
  const router = useRouter()

  const { id, testMappingId } = router.query

  const resultArrray: TestResultArray[] = [
    {
      title: 'Correct',
      img: Correct,
      value: '0',
    },
    {
      title: 'Incorrect',
      img: Incorrect,
      value: '0',
    },
    {
      title: 'Skipped',
      img: Skkiped,
      value: '0',
    },
    {
      title: 'Accuracy',
      img: Accuracy,
      value: '0',
    },
    {
      title: 'Completed',
      img: Completed,
      value: '0',
    },
    {
      title: 'Time Taken',
      img: Time_taken,
      value: '0',
    },
  ]

  function subMapper(index: number, res: any) {
    resultArrray[index].value = res
  }

  const { data: testResult, isLoading: testLoading } = useGetTestResult({
    testId: testMappingId as string,
    enabled: !!testMappingId?.length,
  })

  if (testLoading) return <LoadingSection />

  if (!testLoading && testResult) {
    subMapper(0, testResult?.correctQuestions)
    subMapper(1, testResult?.attemptedQuestions - testResult?.correctQuestions)
    subMapper(2, testResult?.unAttemptedQuestions)
    subMapper(
      3,
      testResult?.attemptedQuestions
        ? (
            (testResult?.correctQuestions / testResult?.attemptedQuestions) *
            100
          ).toFixed(0) + '%'
        : 0 + '%'
    )

    subMapper(
      4,
      ((testResult?.attemptedQuestions || 0) * 100) /
        (testResult?.totalQuestions || 1) +
        '%'
    )
    subMapper(
      5,
      new Date(testResult?.questionTimeTaken * 1000)
        .toISOString()
        .slice(11, 19) ||
        new Date(testResult?.timeTaken * 1000).toISOString().slice(11, 19) ||
        new Date(0 * 1000).toISOString().slice(11, 19)
    )
  }

  const reAttempt = () => {
    router.replace(`/practice/638f359037d3930012e2684a`)
  }

  return (
    <BlankLayout
      header={
        <div className={'flex justify-between items-center'}>
          <Button
            preIcon={
              <span className={'text-base'}>
                <ChevronLeft />
              </span>
            }
            variant={'naked'}
            // onClick={() => setExitModalOpen(true)}
            size={'small'}
          >
            <Typography weight={500}>Back</Typography>
          </Button>
        </div>
      }
    >
      <section className={'flex flex-col gap-4  '}>
        <div
          className={
            'flex flex-col gap-3 items-center py-10 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-b-3xl text-white'
          }
        >
          <Typography variant="heading2" weight={600}>
            {testResult?.testId?.name || 'Q-Bank'}
          </Typography>
          <Typography variant="heading4" weight={500}>
            Let's see Where you stand?
          </Typography>
        </div>

        <article
          className={'flex flex-col items-center gap-8 justify-center mt-6'}
        >
          <div
            className={
              'flex flex-wrap gap-4  justify-center w-full md:w-9/12 lg:8/12'
            }
          >
            {!testLoading &&
              resultArrray.map((item: TestResultArray, idx: number) => {
                return <ResultBox key={idx} testResult={item} />
              })}
          </div>

          <Button variant="primary" rounded size="small" onClick={reAttempt}>
            Re-Attempt
          </Button>
        </article>
      </section>
    </BlankLayout>
  )
}

export default TestResult

const ResultBox = ({ testResult }: { testResult: TestResultArray }) => {
  return (
    <article
      className={
        'border-2 w-4/12 md:w-3/12 py-3 px-2 md:px-4  flex flex-col gap-y-1 items-center justify-center rounded-xl border-indigo-500 '
      }
    >
      <Image src={testResult.img} alt="edit_icon" height={24} width={24} />
      <Typography variant="subHeading" weight={500}>
        {testResult.title}
      </Typography>
      <Typography variant="regular" weight={500}>
        {testResult.value}
      </Typography>
    </article>
  )
}
