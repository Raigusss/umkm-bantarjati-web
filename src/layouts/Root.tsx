import { Outlet, ScrollRestoration } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Root() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", color: '#3b2a1a' }}>
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
