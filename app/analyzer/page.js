
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Analyzer() {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  function handleUpload(e) {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  }

  function handleAnalyze() {
    if (!preview) return;
    setLoading(true);
    setResult(null);
    // Simulate AI analysis — replace with real API call
    setTimeout(() => {
      setLoading(false);
      setResult({
        quality: 'جيد جداً',
        protein: '18%',
        moisture: '12%',
        notes: 'العلف يبدو في حالة جيدة. يُنصح بالتخزين في مكان جاف.',
      });
    }, 2000);
  }

  return (
    <div className='min-h-screen background-particles pt-10 flex flex-col items-center text-center px-4'>
      <Link href='/' className='self-start mb-6 text-teal-400 hover:text-teal-300 transition text-sm'>
        ← رجوع
      </Link>

      <h1 className='text-3xl font-bold mb-6'>تحليل العلف بالذكاء الاصطناعي</h1>

      <label className='w-80 h-80 flex flex-col items-center justify-center border-2 border-teal-500 rounded-xl cursor-pointer bg-gray-900/60 hover:bg-gray-900 transition overflow-hidden'>
        {!preview ? (
          <>
            <span className='text-6xl mb-3'>📷</span>
            <p className='text-gray-400'>اضغط هنا لرفع صورة العلف</p>
          </>
        ) : (
          <img src={preview} alt='Preview' className='w-full h-full object-cover rounded-xl' />
        )}
        <input type='file' accept='image/*' className='hidden' onChange={handleUpload} />
      </label>

      <button
        onClick={handleAnalyze}
        disabled={!preview || loading}
        className='mt-6 px-8 py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg text-white font-semibold transition'
      >
        {loading ? '⏳ جاري التحليل...' : 'تحليل الصورة'}
      </button>

      {result && (
        <div className='mt-8 w-80 bg-gray-800 border border-teal-700 rounded-xl p-6 text-right'>
          <h2 className='text-xl font-bold text-teal-400 mb-4'>نتيجة التحليل</h2>
          <div className='space-y-3 text-sm'>
            <div className='flex justify-between'><span className='text-gray-400'>جودة العلف</span><span className='text-white font-semibold'>{result.quality}</span></div>
            <div className='flex justify-between'><span className='text-gray-400'>نسبة البروتين</span><span className='text-white font-semibold'>{result.protein}</span></div>
            <div className='flex justify-between'><span className='text-gray-400'>نسبة الرطوبة</span><span className='text-white font-semibold'>{result.moisture}</span></div>
            <div className='border-t border-gray-700 pt-3 text-gray-300'>{result.notes}</div>
          </div>
        </div>
      )}
    </div>
  );
}
