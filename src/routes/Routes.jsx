import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, NotFound } from '../components/pages'

function AllRoutes() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default AllRoutes
