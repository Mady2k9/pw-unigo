import { Card, Typography } from '@components/ui'
import { Dialog, Transition } from '@headlessui/react'
import useTeacherDetails from '@lib/hooks/batches/useTeacherDetails'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import PlayCircle from '@assets/images/play-circle.svg'
import style from './TeacherModal.module.css'

const TeacherModal = ({
  children,
  onClose,
  teacherId,
}: {
  children?: any
  onClose: () => void
  teacherId: string
}) => {
  const [open, setOpen] = useState(true)
  const router = useRouter()
  const { batchSlug } = router.query
  const { data, isLoading } = useTeacherDetails({
    batchSlug: batchSlug as string,
    teacherId: teacherId,
  })

  useEffect(() => {
    if (!open) {
      onClose()
    }
  }, [open])

  return (
    <Transition.Root show={open} as={Fragment} appear>
      <Dialog as="div" className="relative z-[1000]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto w-full lg:max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <div className="flex flex-col lg:flex-row h-fit lg:max-h-[352px] gap-4 px-3 py-4">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2 px-2">
                    <Typography variant="regular" weight={700}>
                      {data?.firstName || '' + ' ' + data?.lastName || ''}
                    </Typography>
                    <Typography variant="tiny" weight={400}>
                      {data?.qualification || ''}
                    </Typography>
                    <div className="flex items-center flex-wrap gap-3">
                      {data?.tags.map((tag: string, idx: number) => (
                        <div
                          key={idx}
                          className="bg-indigo-300 px-2 py-1 rounded-md"
                        >
                          <Typography variant="label" weight={600}>
                            <span className="text-white">{tag}</span>
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-[155px] lg:w-[417px] lg:h-[239px] relative rounded-2xl border-2 mx-auto">
                    <Image
                      src={
                        data?.companyId?.imageId?.baseUrl +
                        data?.companyId?.imageId?.key
                      }
                      alt=""
                      objectFit={'contain'}
                      layout="fill"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Image src={PlayCircle} objectFit={'contain'} alt="play-icon" />
                    </div>
                  </div>
                </div>
                <div
                  className={`flex flex-col gap-4 items-center overflow-y-auto px-4 ${style.rightDiv}`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <Typography variant="regular" weight={700}>
                      Quotes
                    </Typography>
                    <div className="bg-indigo-700 h-1.5 w-6 rounded-xl" />
                  </div>

                  {data?.featuredLine && (
                    <div
                      className={`w-[264px] h-[88px] flex items-center text-center justify-center ${style.quoteContainer}`}
                    >
                      <Typography variant="small" weight={700}>
                        <span className="text-center">
                          {data?.featuredLine}
                        </span>
                      </Typography>
                    </div>
                  )}

                  {data?.about && (
                    <div className="flex flex-col gap-4 pb-2">
                      <div className="flex flex-col items-center gap-1 mt-6">
                        <Typography variant="regular" weight={700}>
                          Introduction
                        </Typography>
                        <div className="bg-indigo-700 h-1.5 w-6 rounded-xl" />
                      </div>
                      <Card>
                        <div className="px-3 py-2">
                          <Typography html={data?.about}></Typography>
                        </div>
                      </Card>
                    </div>
                  )}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default TeacherModal
