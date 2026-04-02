const guides = [
  {
    id: "vault-of-glass",
    name: "Vault of Glass",
    description: "Le raid classique contre les Vex.",
    difficulty: "normal",
    estimatedTime: 60,
    steps: [
      {
        title: "La Porte",
        description: "Activez les plaques pour ouvrir la porte."
      },
      {
        title: "Les Oracles",
        description: "Détruisez les oracles dans le bon ordre."
      },
      {
        title: "Atheon",
        description: "Boss final avec téléportation."
      }
    ]
  },
  {
    id: "last-wish",
    name: "Last Wish",
    description: "Raid de la Cité Rêveuse contre Riven.",
    difficulty: "hard",
    estimatedTime: 90,
    steps: [
      {
        title: "Kalli",
        description: "Combat avec symboles."
      },
      {
        title: "Shuro Chi",
        description: "Puzzle et DPS."
      },
      {
        title: "Riven",
        description: "Boss final."
      }
    ]
  }
];

exports.getGuides = (req, res) => {
  res.json(guides);
};

exports.getGuideById = (req, res) => {

  const guide = guides.find(g => g.id === req.params.id);

  if (!guide) {
    return res.status(404).json({
      error: "Guide non trouvé"
    });
  }

  res.json(guide);
};