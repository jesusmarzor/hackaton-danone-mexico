import { Button } from 'components/ui/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="h-120 w-full overflow-hidden">
        <Image
        src="/img/heroHome.jpeg"
        width={300}
        height={300}
        priority={true}
        alt="Hero home image"
        style={{width:"100vw", objectFit:"cover"}}
        />
      </div>
      <section className="flex flex-col justify-center items-center gap-5 p-10">
        <h1 className="text-2xl font-bold">Keep track of your daily calorie limit!</h1>
        <p className="">Tell us your maximum daily calorie intake and we will recommend the products that best suit your goals!</p>
        <Button color='text-violetBlue' borderColor='border-violetBlue' width='w-40' height='h-12'>Start now</Button>
      </section>
    </>
  )
}
