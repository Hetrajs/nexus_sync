"use client"
import CallList from '@/components/CallList';
import React, { useEffect } from 'react'

const Previous = () => {
  useEffect(() => {
    document.title = "NexusSync — Previous";
  }, []);
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
    <h1 className='text-3xl font-bold'>
      Previous
    </h1>

    <CallList type="ended" />
  </section>
  )
}

export default Previous