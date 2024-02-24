import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
  return (
    <div className='flex flex-row top-0 bg-[#002541] justify-around h-[60px] py-4'>
        <div className='basic-1/4 flex'>
            <p className='text-sm text-white'>THE</p>
            <p className='text-xl text-white'>MOVIELAND</p>
        </div>
        <div className='basic-1/2 '>
            <ul className='flex w-[500px] flex-row justify-around text-white'>
                <li>Movies</li>
                <li>Tv Shows</li>
                <li>People</li>
                <li>More</li>
            </ul>
        </div>
        <div className='basic-1/4 text-white flex flex-row bg-slate-700 rounded-xl'>
            <input type='serach' className='bg-slate-700 rounded-xl outline-none text-sm pl-1'/>
            <MagnifyingGlassIcon className='pr-1'/>
        </div>
    </div>
  )
}

export default NavBar