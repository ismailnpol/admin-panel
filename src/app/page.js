'use client'
import { Button } from '@/components/ui/Button'
import React from 'react'
import {useRouter} from 'next/navigation'

const Homepage = () => {
  const router = useRouter()
  return (
    <div className='text-center flex justify-center items-center flex-col '>
      
      <Button  className='mt-4 cursor-pointer' onClick={()=>{
        router.push('/admin')
      }}>
        Admin Dashboard
      </Button>
    </div>
  )
}

export default Homepage
