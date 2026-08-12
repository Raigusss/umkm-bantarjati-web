import { useEffect, useRef, useState } from 'react'
import { RouterProvider } from 'react-router'
import { registerSW } from 'virtual:pwa-register'
import { router } from './routes'

export default function App() {
  const [offlineReady, setOfflineReady] = useState(false)
  const [needRefresh, setNeedRefresh] = useState(false)
  const updateServiceWorker = useRef<(() => Promise<void>) | null>(null)

  useEffect(() => {
    updateServiceWorker.current = registerSW({
      onOfflineReady() {
        setOfflineReady(true)
      },
      onNeedRefresh() {
        setNeedRefresh(true)
      },
    })
  }, [])

  return (
    <>
      {(offlineReady || needRefresh) && (
        <div className="fixed left-4 right-4 top-4 z-50 rounded-3xl px-4 py-3 shadow-xl text-sm md:max-w-md md:left-auto md:right-4"
             style={{ backgroundColor: needRefresh ? '#e8b62d' : '#3b2a1a', color: needRefresh ? '#1f2937' : '#f5efe6' }}>
          {needRefresh ? (
            <div className="flex items-center justify-between gap-3">
              <span>Versi terbaru tersedia. Muat ulang untuk melihat perubahan.</span>
              <button
                onClick={async () => {
                  await updateServiceWorker.current?.()
                  window.location.reload()
                }}
                className="rounded-full px-3 py-1 font-semibold"
                style={{ backgroundColor: '#3b2a1a', color: '#f5efe6' }}
              >
                Perbarui
              </button>
            </div>
          ) : (
            <span>Aplikasi siap digunakan offline. Konten akan terus diperbarui saat tersedia koneksi.</span>
          )}
        </div>
      )}
      <RouterProvider router={router} />
    </>
  )
}
