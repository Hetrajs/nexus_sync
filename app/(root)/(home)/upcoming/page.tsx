"use client"
import CallList from '@/components/CallList';
import React, { useEffect } from 'react'

const Upcoming = () => {
  useEffect(() => {
    document.title = "NexusSync — Upcoming";
  }, []);
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
    <h1 className='text-3xl font-bold'>
      Upcomings
    </h1>

    <CallList type="upcoming" />
  </section>
  )
}

export default Upcoming