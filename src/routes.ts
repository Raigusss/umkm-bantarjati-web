import { createBrowserRouter } from 'react-router'
import Root from './layouts/Root'
import Home from './pages/Home'
import Direktori from './pages/Direktori'
import Detail from './pages/Detail'
import Tentang from './pages/Tentang'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'direktori', Component: Direktori },
      { path: 'direktori/:id', Component: Detail },
      { path: 'tentang', Component: Tentang },
      { path: '*', Component: NotFound },
    ],
  },
])
