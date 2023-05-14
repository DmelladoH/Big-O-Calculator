import useComplexity from '../../hooks/useComplexity'
import { isOfTypeComplexity } from '../../utilities/ComplexityData'
import { ErrorDisplay } from '../ErrorDisplay'
import ResultDisplay from '../ResultDisplay'

export default function AsideContent ({ isError }: { isError: boolean }) {
  const ErrorMessage = 'There was an unexpected error. Please try again.'
  const { timeComplexity, spaceComplexity, explication } = useComplexity()

  if (isError || !isOfTypeComplexity(timeComplexity) || !isOfTypeComplexity(spaceComplexity)) {
    return <ErrorDisplay message={ErrorMessage} />
  }

  return (
    <ResultDisplay
        timeComplexity={timeComplexity}
        spaceComplexity={spaceComplexity}
        explication={explication}/>

  )
}
