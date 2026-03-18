
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import eye from '../public/eye.png';

export default function Intro({ onFinish }) {
  const fullText = 'FeedVision';
  const [text, setText] = useState('');
  const [showEye, setShowEye] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowEye(true), 500);
        setTimeout(() => {
          setFade(true);
          setTimeout(onFinish, 700);
        }, 1500);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center transition-opacity duration-700 ${fade ? 'opacity-0' : 'opacity-100'}`}>
      <h1 className='text-white text-5xl tracking-widest font-semibold'>{text}</h1>
      {showEye && (
        <div className='mt-4 animate-pulseSlow'>
          <Image src={eye} width={120} height={120} alt='FeedVision Eye' />
        </div>
      )}
    </div>
  );
}
