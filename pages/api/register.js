import clientPromise from "../../lib/mongodb";

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("roc237");
    const collection = db.collection("projet-utilisateur-roc");

    const data = req.body;

    console.log("✅ Données reçues :", data); // debug

    // Validation simple avec les bons champs
    if (
      !data.nom ||
      !data.sexe ||
      !data.age ||
      !data.region ||
      !data.programme
    ) {
      return res.status(400).json({ message: "Champs manquants" });
    }

    await collection.insertOne(data);

    res.status(201).json({ message: "Inscription enregistrée avec succès 🎉" });
  } catch (error) {
    console.error("❌ Erreur d’enregistrement :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
}
