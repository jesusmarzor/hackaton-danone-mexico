import Image from 'next/image'

export default function Home() {
  return (
    <main>
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
        <button>Start now</button>
      </section>
    </main>
  )
}
