type Props = {}

const LoadingPage = ({ }: Props) => {
  return (
    <div className="w-full h-screen bg-white z-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 loaderRectangle">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadingPage