const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

let words = ["Agrafeuse",
"Bureau",
"Télécopieur",
"Téléphone",
"Papier",
"Lumière",
"Président",
"Bloc-notes",
"Trombones",
"Classeur",
"Calculatrice",
"Calendrier",
"Stylos",
"Crayons",
"Cahier",
"Réserver",
"Chaises",
"Thermos",
"Colle",
"Presse-papiers",
"Trombones",
"Chocolat",
"Secrétaire",
"Travail",
"Document",
"Employé",
"Ennui",
"Café",
"Golf",
"Lundi",
"Vanille",
"Bambou",
"Éternuer",
"Scratch",
"Céleri",
"​​Marteau",
"Grenouille",
"Tennis",
"Hot-dog",
"Pantalon",
"Pont",
"Bubblegum",
"Godet",
"Ski",
"Traîneau",
"Snowboard",
"Ours",
"Crème",
"Gaufre",
"Crêpes",
"Sunday",
"Plage",
"Lunettes",
"Pastèque",
"Baseball",
"Balle",
"T-shirt",
"Baiser",
"Méduse",
"Gelée",
"Papillon",
"Araignée",
"Balai",
"Momie",
"Candy",
"Écureuil",
"Basket-ball",
"Licorne",
"Journal",
"Hamac",
"Argent",
"Parapluie",
"Ambulance",
"Bactéries",
"Pizza",
"Platypus",
"Tarentule",
"Crâne",
"Fumée",
"Arbre",
"Glace",
"Couverture",
"Algues",
"Flamme",
"Bulle",
"Cheveux",
"Dent",
"Feuille",
"Ver",
"Ciel",
"Apple",
"Avion",
"Vache",
"Maison",
"Chien",
"Voiture",
"Lit",
"Meubles",
"Train",
"Arc-en-ciel",
"Peintures",
"Dessin",
"Coupe",
"Assiette",
"Bol",
"Coussin",
"Canap",
"Feuille",
"Cuisine",
"Tableau",
"Bougie",
"Chemise",
"Vêtements",
"Robe",
"Oreiller",
"Accueil",
"Dentifrice",
"Guitare",
"Cartable",
"Trousse",
"Lunettes",
"Serviette",
"Montre",
"Étage",
"Stylo",
"Chaussures",
"Chaussettes",
"Jeans",
"Clavier",
"Soutien-gorge",
"Veste",
"Cravate",
"Bandage",
"Écharpe",
"Brosse",
"Téléphone",
"Imprimante",
"Panneau de liège",
"Presse-papier",
"Ouvre-lettre",
"Porte-stylo",
"Classeur",
"Patron",
"Trajet",
"Employeur",
"Passion",
"Ambition",
"Salaire",
"Fierté",
"Chômage",
"Emploi",
"Embaucher",
"Paresseu",
"Inquie",
"Fatigué",
"Pauvret",
"Recycler",
"Trou noir",
"Applaudissements",
"Blizzard",
"Dentelle",
"Atlantide",
"Marais",
"Crème solaire",
"Dictionnaire",
"Siècl",
"Sculpture",
"Sneaker",
"Amiral",
"Water-polo",
"Ninja",
"Surf",
"Volley-ball",
"Pichet",
"Attrape",
"Pâte",
"Balançoire",
"Citrouille",
"Halloween",
"Fantôme",
"Jack-o'-lantern",
"Effrayant",
"Squelette",
"Vampire",
"Effrayant",
"Sorcière",
"Nouilles",
"Monocycle",
"Tricot",
"Orage",
"Thermomètre",
"Gaufres",
"Tableau noir",
"Home run",
"Milkshake",
"Combat",
"Haut-parleur",
"Carillons",
"Instrument",
"Mangeoire",
"Rat",
"Perruque",
"Plante",
"Pistolet",
"Panier",
"Couteau",
"Baleine",
"Île",
"Sapin",
"Tremblement",
"Junkyard",
"Vomissements",
"Aardvark",
"Dauphin",
"Forêt",
"Toile",
"Chauve-souris",
"Vers",
"Télévision",
"Casque",
"Sous-vêtements",
"Aspirateur",
"Ecchymose",
"Brouillard",
"Croûte",
"Batterie",
"Céréales",
"Sang",
"Mousse",
"Épin",
"Algues",
"Limace",
"Antenne",
"Parasite",
"Pollen",
"Astéroïde",
"Famille",
"Peinture",
"Croquis",
"Lustre",
"Ketchup",
"Chaussons",
"Salaire",
"Ponctualité",
"Relâchement",
"Stress",
"Redondance",
"Chômeurs",
"Déconnecter",
"Indépendant",
"Stressant",
"Épuisé",
"Inquiétudes",
"Carrière",
"Surqualifié",
"Malheureux",
"Acclamations",
"Vacances",
"Trick-or-Treat",
"Minimalisme",
"Egghead",
"Hypnose",
"Dreamcatcher",
"Mugshot",
"Moonwalk",
"Fée",
"Champignon",
"Zebra",
"Ordinateur",
"Poussière",
"Hoquet",
"Varicelle",
"Crustacé",
"Pomme",
"Soleil",
"Nuage",
"Voiture",
"thé",
"Pain",
"Coupe",
"Escaliers",
"Chien",
"Chat",
"Balle",
"Lune",
"Copain",
"Arbre",
"Camion",
"Bateau",
"Chaussures",
"Carotte",
"Lapin",
"Canard",
"Ensoleillement",
"Grenouille",
"Sandwich",
"Horloge",
"Bonbons",
"Lait",
"Tortue",
"Téléphone",
"lapin",
"Orange",
"Canapé",
"Tabouret",
"Table",
"Sel",
"Fouet",
"Plat",
"Beurre",
"Oeuf",
"Sable",
"Cerf-volant",
"Clé"];
let clients = new Map();
let players = new Map();
let drawerId = null;
let word = null;

const getPlayer = (socket) => {
  const userId = clients.get(socket.id);
  return players.get(userId);
};

function getByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
}

const nextRound = (io) => {
  const keys = Array.from(players.keys());
  let nextDrawerId;
  do
    nextDrawerId = keys[Math.floor(Math.random() * keys.length)];
  while (nextDrawerId === drawerId);
  drawerId = nextDrawerId;
  word = words[Math.floor(Math.random() * words.length)];
  io.emit('update-can-draw', { canDraw: false });
  io.emit('fill', { color: 'white' });
  const clientId = getByValue(clients, drawerId);
  io.to(clientId).emit('update-can-draw', { canDraw: true });
  io.to(clientId).emit('info', { content: `A vous de dessiner ! Le mot à faire deviner est ${word}` });
}

module.exports = (io) => {
  io.use(function(socket, next) {
    const token = socket.handshake.query.token;
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        socket.disconnect();
        return ;
      }
      const userId = decoded.id;
      clients.set(socket.id, userId);
      next();
    });
  }).on('connection', (socket) => {
    console.log(`User ${socket.id} connected.`);

    socket.on('disconnect', () => {
      console.log(`User ${socket.id} disconnected.`);
      const p = getPlayer(socket);
      clients.delete(socket.id);
      if (!p)
        return ;
      players.delete(p.id);
      io.emit('info', { content: `${p.username} a quitté la partie` });
      io.emit('update-players', Array.from(players.values()));
      if (players.size < 2) {
        round = 0;
        drawerId = null;
        word = null;
      } else if (p.id === drawerId) {
        for (const [id, p] of players.entries()) {
          ++p.score;
          players.set(id, p);
        }
        if (word)
          io.emit('info', { content: `Le mot était ${word}` });
        drawerId = null;
        if (players.size > 1)
          nextRound(io);
        else
          socket.emit('info', { content: "En attente d'un autre joueur..." });
      }
    });

    socket.on('draw', (data) => {
      if (drawerId === clients.get(socket.id))
        io.emit('draw', data);
    });

    socket.on('fill', (data) => {
      if (drawerId === clients.get(socket.id))
        io.emit('fill', data);
    });

    socket.on('join', async () => {
      const userId = clients.get(socket.id);
      if (players.has(userId)) {
        return ;
      }
      console.log(`User ${socket.id} joined.`);
      const u = await userService.findById(userId);
      const p = { id: u.id, username: u.username, score: 0 };
      players.set(userId, p);
      io.emit('update-players', Array.from(players.values()));
      if (players.size === 1) {
        socket.emit('info', { content: "En attente d'un autre joueur..." });
      } else if (players.size === 2) {
        nextRound(io);
      } else
        socket.emit('info', { content: `Tour ${round}` });
    });

    socket.on('message', (content) => {
      const p = getPlayer(socket);
      if (!p)
        return ;
      io.emit('message', { author: p.username, content: content });
      if (p.id != drawerId && content === word) {
        ++p.score;
        io.emit('info', { content: `${p.username} a trouvé le mot !` });
        players.set(p.id, p);
        io.emit('update-players', Array.from(players.values()));
        nextRound(io);
      }
    });
  });
};
