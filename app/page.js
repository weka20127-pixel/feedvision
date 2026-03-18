
'use client';
import { useState } from 'react';
import Intro from './intro';
import Link from 'next/link';
import Image from 'next/image';
import eye from '../public/eye.png';

export default function Home() {
  const [done, setDone] = useState(false);
  if (!done) return <Intro onFinish={() => setDone(true)} />;

  return (
    <div className='min-h-screen background-particles flex flex-col items-center pt-20'>
      <div className='mb-6 animate-pulseSlow'>
        <Image src={eye} width={70} height={70} alt='Tech Eye' />
      </div>
      <h1 className='text-4xl font-bold mb-2'>FeedVision</h1>
      <p className='text-lg mb-8'>رؤية أوضح… علف أفضل</p>
      <Link href='/analyzer'>
        <button className='px-6 py-3 bg-teal-600 hover:bg-teal-700 transition rounded-lg text-white font-semibold shadow-lg'>ابدأ التحليل الآن</button>
      </Link>
      <div className='grid grid-cols-1 gap-4 mt-12 w-64 text-center'>
        <Link href='/analyzer' className='p-3 bg-gray-800 rounded-lg border border-gray-700'>🔍 تحليل العلف</Link>
        <div className='p-3 bg-gray-800 rounded-lg border border-gray-700 opacity-40'>⚙️ تركيبة العلف (قريبًا)</div>
        <div className='p-3 bg-gray-800 rounded-lg border border-gray-700 opacity-40'>📊 لوحة التحكم (قريبًا)</div>
      </div>
    </div>
  );
}
