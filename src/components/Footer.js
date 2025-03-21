import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2'>
        <div className='flex items-center justify-center gap-4'>
          <Link to="https://t.me/Ts_bots" >About</Link>
          <Link to="https://t.me/Ts_bots">Contact</Link>
        </div>
        <p className='text-sm'>Trackstudio | Copyrights 2025</p>
    </footer>
  )
}

export default Footer
