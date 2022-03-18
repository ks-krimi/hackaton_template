import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout, AuthLayout } from '../components/layout'
import { Home, Login, NotFound } from '../components/pages'

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/404">
          <Route index element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
