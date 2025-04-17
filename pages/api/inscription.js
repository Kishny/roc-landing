import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("roc237");
      const collection = db.collection("projet-utilisateur-roc");

      const { programme, nom, sexe, age, contact } = req.body;

      if (!nom || !sexe || !age || !contact) {
        return res.status(400).json({ message: "Champs manquants" });
      }

      await collection.insertOne({
        programme: programme || "Programme abcdémocratie",
        nom,
        sexe,
        age,
        contact,
        date: new Date(),
      });

      res.status(201).json({ message: "Inscription réussie (abcdémocratie)" });
    } catch (error) {
      console.error("Erreur API inscription:", error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}
