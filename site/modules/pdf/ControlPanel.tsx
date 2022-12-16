import {
  ForwardIcon,
  BackwardIcon,
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/20/solid'

const ControlPanel = (props: any) => {
  const { file, pageNumber, numPages, setPageNumber, scale, setScale } = props

  const isFirstPage = pageNumber === 1
  const isLastPage = pageNumber === numPages

  const firstPageClass = isFirstPage ? 'disabled' : 'clickable'
  const lastPageClass = isLastPage ? 'disabled' : 'clickable'

  const goToFirstPage = () => {
    if (!isFirstPage) setPageNumber(1)
  }
  const goToPreviousPage = () => {
    if (!isFirstPage) setPageNumber(pageNumber - 1)
  }
  const goToNextPage = () => {
    if (!isLastPage) setPageNumber(pageNumber + 1)
  }
  const goToLastPage = () => {
    if (!isLastPage) setPageNumber(numPages)
  }

  const onPageChange = (e: any) => {
    const { value } = e.target
    setPageNumber(Number(value))
  }

  const isMinZoom = scale < 0.6
  const isMaxZoom = scale >= 2.0

  const zoomOutClass = isMinZoom ? 'disabled' : 'clickable'
  const zoomInClass = isMaxZoom ? 'disabled' : 'clickable'

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1)
  }

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1)
  }

  return (
    <div className="bg-gray-400 w-3/4 mx-auto m-3 p-3 flex items-center justify-center gap-8">
      <div className="flex justify-between items-center gap-4">
        <ChevronDoubleLeftIcon width={24} onClick={goToFirstPage} />
        <ChevronLeftIcon width={24} onClick={goToPreviousPage} />
        <span>
          Page{' '}
          <input
            name="pageNumber"
            type="number"
            min={1}
            max={numPages || 1}
            className="p-0 pl-1 mx-2"
            value={pageNumber}
            onChange={onPageChange}
          />{' '}
          of {numPages}
        </span>
        <ChevronRightIcon width={24} onClick={goToNextPage} />
        <ChevronDoubleRightIcon width={24} onClick={goToLastPage} />
      </div>
      <div className="flex justify-between items-center gap-4">
        <MagnifyingGlassMinusIcon
          width={24}
          onClick={zoomOut}
          className={zoomOutClass}
        />
        <span>{(scale * 100).toFixed()}%</span>
        <MagnifyingGlassPlusIcon
          width={24}
          onClick={zoomIn}
          className={zoomInClass}
        />
      </div>
    </div>
  )
}

export default ControlPanel
