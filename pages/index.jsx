import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ROC Cameroun - Landing Page</title>
        <meta
          name="description"
          content="Landing page pour le programme abcdémocratie et la formation des scrutateurs citoyens au Cameroun."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/img/logo-roc.png"
              alt="Logo ROC"
              className="h-8 w-auto"
            />
            <h1 className="text-xl font-bold text-blue-700">
              République du Cameroun
            </h1>
          </div>
          <nav className="space-x-4 hidden sm:block">
            <a
              href="#abcdemocratie"
              className="text-gray-700 hover:text-blue-700"
            >
              abcdémocratie
            </a>
            <a
              href="#scrutateurs"
              className="text-gray-700 hover:text-blue-700"
            >
              Scrutateurs
            </a>
            <a
              href="#inscription"
              className="text-gray-700 hover:text-blue-700"
            >
              Inscription
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-24 bg-gray-50 min-h-screen text-gray-800">
        {/* SECTION HERO */}
        <section
          className="text-center bg-blue-700 text-white py-24 px-4"
          data-aos="fade-down"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pour une démocratie plus juste
          </h2>
          <p className="text-xl md:text-2xl">
            Formons aujourd’hui les leaders de demain
          </p>
        </section>

        {/* SECTION ACCUEIL BILINGUE */}
        <section
          className="bg-white py-16 px-4 max-w-6xl mx-auto text-center"
          data-aos="fade-down"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-10">
            🏠 Bienvenue / Welcome
          </h2>

          {/* Français */}
          <div className="text-gray-700 text-left mb-10">
            <p className="mb-4 text-2xl font-semibold">
              🎯 Bienvenue sur la plateforme citoyenne du ROC !
            </p>
            <p className="mb-4 text-xl">
              Vous rêvez d’un Cameroun plus juste, plus démocratique et plus
              transparent ?<br />
              Vous êtes au bon endroit.
            </p>
            <p className="mb-4 text-xl">
              🌍 Le ROC vous invite à passer à l’action à travers deux grandes
              opportunités :
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-xl">
              <li>
                🎓 100 bourses de formation citoyenne avec le programme{" "}
                <strong>abcdémocratie</strong>
              </li>
              <li>
                🗳️ Formations de scrutateurs électoraux pour assurer la
                transparence des élections présidentielles
              </li>
            </ul>
            <p className="text-blue-700 font-semibold mt-6 text-xl text-center">
              🚀 Rejoignez le mouvement pour une transition démocratique !<br />
              Inscrivez-vous, formez-vous, engagez-vous.
            </p>
          </div>

          <hr className="my-6 border-t border-gray-300 w-24 mx-auto" />

          {/* Anglais */}
          <div className="text-gray-600 text-left mt-10">
            <p className="mb-4 text-2xl font-semibold">
              🎯 Welcome to the ROC Citizen Platform!
            </p>
            <p className="mb-4 text-xl">
              Do you dream of a more just, democratic, and transparent Cameroon?
              <br />
              You’re in the right place.
            </p>
            <p className="mb-4 text-xl">
              🌍 The ROC invites you to take action through two major
              opportunities:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-xl">
              <li>
                🎓 100 civic education scholarships through the{" "}
                <strong>abcdémocratie</strong> program
              </li>
              <li>
                🗳️ Electoral observer training for the 2025 presidential
                elections
              </li>
            </ul>
            <p className="text-blue-700 font-semibold mt-6 text-xl text-center">
              🚀 Join the movement for democratic transition now!
              <br />
              Sign up, get trained, get involved.
            </p>
          </div>
        </section>

        {/* SECTION SCRUTATEURS */}
        <section
          id="scrutateurs"
          className="bg-gray-100 py-16 px-4 max-w-6xl mx-auto"
          data-aos="fade-up"
        >
          {/* 1. Titre + image */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
                LE ROC – Formation de scrutateurs électoraux
              </h2>
              <p className="text-gray-700 text-2xl">
                Le ROC recrute et forme des scrutateurs électoraux chargés de
                veiller à la transparence des élections présidentielles
                d’octobre 2025.
              </p>
            </div>
            <img
              src="/img/img1.png"
              alt="Scrutateurs"
              className="md:w-1/2 w-full rounded-lg shadow"
            />
          </div>

          {/* 2 colonnes : Avantages + Formulaire */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Colonne gauche */}
            <div className="flex flex-col">
              {/* 2. Titre bloc rouge */}
              <div className="bg-orange-600 text-white py-4 px-6 text-center rounded-t-lg border border-orange-600">
                <h3 className="text-2xl font-bold uppercase leading-tight">
                  Devenez scrutateur citoyen
                </h3>
              </div>

              {/* 3. Liste blanche */}
              <ul className="bg-white border-x border-b border-orange-600 px-6 py-6 text-gray-800 text-xl space-y-3 rounded-b-lg">
                <li className="flex items-center gap-2">
                  <span className="text-red-600 text-xl">✔</span> Formation
                  assurée
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-600 text-xl">✔</span> Attestation
                  délivrée
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-600 text-xl">✔</span> Contribution
                  au processus électoral
                </li>
              </ul>

              {/* 5. Bloc jaune séparé */}
              <div className="mt-4 rounded bg-yellow-300 hover:bg-yellow-400 text-blue-900 font-semibold text-xl px-6 py-4 transition leading-snug shadow">
                Assurer la transparence des élections
              </div>
            </div>

            {/* Colonne droite - Bouton vers Google Form */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 flex flex-col justify-between h-full text-center">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                FORMULAIRE D’INSCRIPTION
              </h3>
              <p className="text-blue-700 font-medium text-lg mb-6">
                Cliquez sur le bouton ci-dessous pour accéder au formulaire
                officiel Google pour devenir <strong>scrutateur citoyen</strong>{" "}
                ou bénéficier du programme <strong>abcdémocratie</strong>.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeoiOYok685M4w93o0vYhwvSUaeK946Ym8i1kr0eQB5jcdqmw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded transition text-lg shadow"
              >
                Accéder au formulaire Google
              </a>
            </div>
          </div>
        </section>

        <section
          id="abcdemocratie"
          className="bg-gray-100 py-16 px-4 max-w-6xl mx-auto"
          data-aos="fade-up"
        >
          {/* 1. Titre + image */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
                LE ROC –{" "}
                <span className="italic font-medium">
                  Programme abcdémocratie
                </span>
              </h2>
              <p className="text-gray-700 text-lg">
                Le ROC offre 100 bourses de formation dans le cadre du programme
                abcdémocratie, visant à promouvoir l’éducation civique et former
                les cadres politiques.
              </p>
            </div>
            <img
              src="/img/img2.png"
              alt="Programme abcdémocratie"
              className="md:w-1/2 w-full rounded-lg shadow"
            />
          </div>

          {/* Grille 2 colonnes : Avantages + Formulaire */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Colonne gauche */}
            <div className="flex flex-col">
              {/* 2. Bloc rouge titre */}
              <div className="bg-orange-600 text-white py-4 px-6 text-center rounded-t-lg border border-orange-600">
                <h3 className="text-2xl font-bold uppercase leading-tight">
                  100 BOURSES
                  <br />
                  DE FORMATION
                </h3>
              </div>

              {/* 3. Liste avec icônes rouges */}
              <ul className="bg-white border-x border-b border-orange-600 px-6 py-6 text-gray-800 text-base space-y-3 rounded-b-lg">
                <li className="flex items-center gap-2">
                  <span className="text-red-600 text-xl">✔</span> Leadership
                  politique
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-600 text-xl">✔</span> Éducation
                  civique
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-600 text-xl">✔</span> Stratégies de
                  mobilisation citoyenne
                </li>
              </ul>

              {/* 5. Bloc jaune séparé */}
              <div className="mt-4 rounded bg-yellow-300 hover:bg-yellow-400 text-blue-900 font-semibold text-lg px-6 py-4 transition leading-snug shadow text-xl">
                Formation gratuite à l’éducation et au leadership politique
              </div>
            </div>

            {/* Colonne droite - Formulaire Google en bouton externe */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 flex flex-col justify-between h-full text-center">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                FORMULAIRE D’INSCRIPTION
              </h3>
              <p className="text-blue-700 font-medium text-lg mb-6">
                Cliquez sur le bouton ci-dessous pour accéder au formulaire
                officiel Google dédié aux programmes{" "}
                <strong>abcdémocratie</strong> &{" "}
                <strong>scrutateurs citoyens</strong>.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeoiOYok685M4w93o0vYhwvSUaeK946Ym8i1kr0eQB5jcdqmw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded transition text-lg shadow"
              >
                Accéder au formulaire Google
              </a>
            </div>
          </div>
        </section>

        {/* RÉSEAUX SOCIAUX */}
        <section
          id="inscription"
          className="py-16 px-4 bg-gray-100 text-center"
          data-aos="zoom-in-up"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Suivez-nous
          </h3>
          <div className="flex justify-center gap-6 text-lg text-blue-700 font-medium flex-wrap">
            <a
              href="https://www.facebook.com/profile.php?id=61575083439676"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/message/5JB5WV7FMKZRA1?src=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/+594694275542"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a
              href="https://www.instagram.com/roc237.org2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@roc2375?_t=ZN-8vah6lIHJji&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>

            <a
              href="https://www.dklo.co/@5421015"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dikalo
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white text-center text-gray-600 py-4 border-t">
        © 2025 ROC Cameroun - Tous droits réservés.
      </footer>
    </>
  );
}
