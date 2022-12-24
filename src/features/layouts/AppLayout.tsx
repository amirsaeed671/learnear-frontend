import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function AppLayout() {
  return (
    <div className='bg-background min-h-screen'>
      <Navbar />
      <div className='container mx-auto mt-8'>
        <Outlet />
      </div>
    </div>
  )
}
