import React from 'react'

export default function Errors({children}:{children:React.ReactNode}) {
  return (
    <div className='bg-red-500 text-center text-white  my-1 uppercase text-sm font-bold'>{children}</div>
  )
}
