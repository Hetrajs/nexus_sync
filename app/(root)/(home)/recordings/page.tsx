"use client"
import CallList from '@/components/CallList';
import React, { useEffect } from 'react'

const Recording = () => {
  useEffect(() => {
    document.title = "NexusSync — Recordings";
  }, []);
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
    <h1 className='text-3xl font-bold'>
      Recordings
    </h1>

    <CallList type="recordings" />
  </section>
  )
}

export default Recording