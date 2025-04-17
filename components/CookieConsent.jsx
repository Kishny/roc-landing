// components/CookieConsent.jsx
import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('roc_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const handleConsent = (value) => {
    localStorage.setItem('roc_cookie_consent', value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-white border border-gray-300 shadow-xl p-4 rounded-md z-50 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-gray-700">
        Ce site utilise des cookies pour améliorer votre expérience. 
      </p>
      <div className="flex gap-2">
        <button onClick={() => handleConsent('accepted')} className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
          Accepter
        </button>
        <button onClick={() => handleConsent('rejected')} className="px-4 py-2 bg-gray-300 text-sm rounded hover:bg-gray-400">
          Refuser
        </button>
      </div>
    </div>
  )
}
