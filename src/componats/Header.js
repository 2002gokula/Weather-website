import React from 'react'

const Header = () => {
  return (
    <ul className='flex ml-auto w-full font-bold '>
      <li className='text-xs text-gray-800 ml-auto mr-6 border-b-2 border-green-4 00 cursor-pointer '>
        Weather
      </li>
      <li className='text-xs text-gray-800 mr-6 alert-notice cursor-pointer border-b-2 hover:border-green-500'>
        Alerts
      </li>
      <li className='text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-500'>
        Map
      </li>
      <li className='text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-500'>
        Satelite
      </li>
      <li className='text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-500'>
        News
      </li>
    </ul>
  )
}

export default Header
