// pages/contact.jsx
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 px-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact & Mentions légales</h1>
      <p className="mb-4">
        Ce site est développé dans le cadre du programme de formation ROC Cameroun.
      </p>
      <p className="mb-2">
        Responsable : Jean VOLCY – Jeyko.dev
      </p>
      <p className="mb-2">Adresse : 55 rue Daniel Mayer, 37100 Tours</p>
      <p className="mb-6">Email : contact.jeyko.dev@gmail.com</p>

      {/* Bouton retour */}
      <div className="text-center mt-10">
        <Link
          href="/"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition font-medium"
        >
          ← Retour à l’accueil
        </Link>
      </div>
    </div>
  )
}
