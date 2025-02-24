import React from 'react'

const WaveDataDash = () => {
  return <>

      <h2 className='text-center text-danger'>we will notify you when this done</h2>
    <div className="flex align-middle pt-16 justify-center">
    <div class="animate-pulse flex flex-col items-center gap-4 w-100">
      <div>
        <div class="w-48 h-6 bg-slate-400 rounded-md"></div>
        <div class="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
      </div>
      <div class="h-7 bg-slate-400 w-full rounded-md"></div>
      <div class="h-7 bg-slate-400 w-full rounded-md"></div>
      <div class="h-7 bg-slate-400 w-full rounded-md"></div>
      <div class="h-7 bg-slate-400 w-1/2 rounded-md"></div>
    </div>
  </div>
  </>
}

export default WaveDataDash