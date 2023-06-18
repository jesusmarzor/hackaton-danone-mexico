"use client"
import { Button } from 'components/ui/Button'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <div className="h-120 w-full overflow-hidden">
        <Image
        src="/img/heroHome.jpeg"
        width={1000}
        height={1000}
        priority={true}
        alt="Hero home image"
        className="w-screen object-cover"
        />
      </div>
      <section className="flex flex-col justify-center items-center gap-5 p-10">
        <h1 className="text-2xl font-bold">{t("home.first_section.title")}</h1>
        <p>{t("home.first_section.paragraph")}</p>
        <Button color='text-violetBlue' borderColor='border-violetBlue' width='w-40' height='h-12'>{t("home.first_section.button")}</Button>
      </section>
    </>
  )
}
