import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import ControlPanel from './ControlPanel'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PDFReader = ({ noteDetail }: { noteDetail: string }) => {
  const [scale, setScale] = useState(1.0)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages)
  }

  return (
    <div className="bg-[#282c34] w-full h-full overflow-y-auto h-screen">
      <section className="flex flex-col items-center w-full">
        <ControlPanel
          scale={scale}
          setScale={setScale}
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          file={noteDetail}
        />
        <Document file={noteDetail} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} height={700} />
        </Document>
      </section>
    </div>
  )
}

export default PDFReader
