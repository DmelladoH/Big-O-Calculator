import { complexityData, type ComplexityTypes } from '../utilities/ComplexityData'
interface DisplayComplexityProps {
  complexity: ComplexityTypes
}

export default function DisplayComplexity ({ complexity }: DisplayComplexityProps) {
  const { color, name } = complexityData[complexity]
  return (
      <section className="bg-zinc-900 px-2 py-4 w-44 h-44 flex gap-4 flex-col justify-center rounded-xl text-center" >
          <span className={`${color} text-4xl`}>{complexity}</span>
          <p className='text-white'>{name}</p>
      </section>
  )
}
