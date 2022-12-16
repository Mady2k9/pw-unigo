import Layout from '@components/common/Layout'
import { PDFReader } from '@modules/index'
import { useRouter } from 'next/router'
import React from 'react'

const Pdf = () => {
  const router = useRouter()
  const { noteDetail } = router.query
  return <PDFReader noteDetail={noteDetail as string} />
}

export default Pdf
