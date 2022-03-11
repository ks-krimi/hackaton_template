import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, NotFound } from '../components/pages'
import { Layout } from '../components/layout'
function AllRoutes() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default AllRoutes
