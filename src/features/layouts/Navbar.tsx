import { Typography } from '@shared/index'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='bg-primary w-full h-nav text-white'>
      <div className='container mx-auto grid grid-cols-sm-nav sm:grid-cols-nav place-items-center h-full'>
        <div>
          <Typography intent='p'>Learnear</Typography>
        </div>
        <ul className='hidden sm:flex gap-6'>
          <li>
            <NavLink to='/'>
              <Typography intent='p'>Projects</Typography>
            </NavLink>
          </li>
          <li>
            <NavLink to='/ideas'>
              <Typography intent='p'>Ideas</Typography>
            </NavLink>
          </li>
          <li>
            <NavLink to='/trending-tech'>
              <Typography intent='p'>Trending Tech</Typography>
            </NavLink>
          </li>
        </ul>
        <div className='flex items-center gap-2'>
          <div className='rounded-full bg-gray-400 h-8 w-8 text-center'>A</div>
          <Typography intent='p'>Profile</Typography>
        </div>
      </div>
    </div>
  )
}
