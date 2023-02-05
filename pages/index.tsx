import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '../components/Hero'
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import { SliderData } from '@/components/sliderdata'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tristan&apos;s Blog</title>
        <meta name="description" content="Tristan's Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Tristans blog' message='Hello, im a computer science student at UVIC'/> 
      <Navbar/>
      <Slider slides = {SliderData}/>
    </>
  )
}
