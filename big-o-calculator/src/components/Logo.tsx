interface Props {
  text: string
}
export default function Logo ({ text }: Props) {
  return (
    <h1 className='text-4xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>
      {text}
    </h1>
  )
}
