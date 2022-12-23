import { AppLayout } from '@features/layouts'
import { Route, Routes } from 'react-router-dom'
import { Ideas, Profile, Projects, TrendingTech } from '@views/index'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Projects />} />
        <Route path='profile' element={<Profile />} />
        <Route path='ideas' element={<Ideas />} />
        <Route path='trending-tech' element={<TrendingTech />} />
      </Route>
    </Routes>
  )
}

export default App
