// pages/404.jsx
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-50 text-gray-700 px-4">
      <h1 className="text-6xl font-bold mb-4 text-blue-700">404</h1>
      <p className="text-xl mb-6">Oups ! Cette page n'existe pas.</p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Retour à l’accueil
      </Link>
    </div>
  )
}
