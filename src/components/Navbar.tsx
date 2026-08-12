import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#3b2a1a' }} className="sticky top-0 z-40 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold"
            style={{ backgroundColor: '#e8861a', color: '#fff' }}
          >
            B
          </div>
          <div>
            <div className="font-display text-sm font-bold text-white leading-none">UMKM Bantarjati</div>
            <div className="text-xs" style={{ color: '#b8975a' }}>Kelurahan Bantarjati, Bogor Utara</div>
          </div>
        </NavLink>

        <div className="hidden md:flex items-center gap-6">
          {[
            { to: '/', label: 'Beranda' },
            { to: '/direktori', label: 'Direktori' },
            { to: '/tentang', label: 'Tentang' },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-amber-400' : ''}`
              }
              style={({ isActive }) => ({ color: isActive ? '#f5a83e' : '#d4b896' })}
              onMouseEnter={(e) => { if (!(e.currentTarget as HTMLElement).getAttribute('aria-current')) (e.currentTarget as HTMLElement).style.color = '#f5a83e' }}
              onMouseLeave={(e) => { if (!(e.currentTarget as HTMLElement).getAttribute('aria-current')) (e.currentTarget as HTMLElement).style.color = '#d4b896' }}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/direktori"
          className="text-sm font-semibold px-4 py-2 rounded-lg transition-all"
          style={{ backgroundColor: '#e8861a', color: '#fff' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5a83e')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e8861a')}
        >
          Daftarkan UMKM
        </NavLink>
      </div>
    </nav>
  )
}
