import { complexityData, type ComplexityType } from '../utilities/ComplexityData'
interface DisplayComplexityProps {
  complexity: ComplexityType
  // complexity: string
}

export default function ComplexityDisplay ({ complexity }: DisplayComplexityProps) {
  const { color, name } = complexityData[complexity]
  return (
      <section className="bg-zinc-800 px-1 py-2 w-36 h-36  xl:w-44 xl:h-44 flex gap-4 flex-col justify-center rounded-xl text-center" >
          <span className={`${color} text-4xl`}>{complexity}</span>
          <p className='text-white'>{name}</p>
      </section>
  )
}
