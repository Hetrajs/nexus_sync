
"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Loader = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex-center gap-3 h-screen w-full'>
      <Image
        src="/icons/loading-circle.svg"
        alt='Loading'
        width={50}
        height={50}
      />
      {showMessage && <h1 className='text-white'>Please try again!</h1>}
    </div>
  );
}

export default Loader;
