const express = require("express");

const app = express();
const PORT = 3002;

// permet de lire le JSON
app.use(express.json());

// route test
app.get("/", (req, res) => {
  res.send("Backend Destiny Raid Companion 🚀");
});

// API test
app.get("/api", (req, res) => {
  res.json({ message: "API running" });
}); 

// exemple de données
let raids = [
  { id: 1, name: "Vault of Glass", players: 6 },
  { id: 2, name: "King's Fall", players: 6 }
];

// récupérer les raids
app.get("/api/raids", (req, res) => {
  res.json(raids);
});

// ajouter un raid
app.post("/api/raids", (req, res) => {
  const newRaid = {
    id: raids.length + 1,
    name: req.body.name,
    players: req.body.players
  };

  raids.push(newRaid);
  res.status(201).json(newRaid);
});

// lancer serveur
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});