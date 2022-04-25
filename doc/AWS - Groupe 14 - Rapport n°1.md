# AWS - Groupe 14 - Rapport n°1

---

## Introduction :speech_balloon:

Dans le cadre de l'UE d'application Web et Securité, nous avons l'opportunité de développer un projet, qui peut consister en un jeu en ligne ou bien encore un site web par exemple.
Etant donné que la majorité du groupe ne maitrîse que très brièvement les concepts de base en HTML, CSS, Javascript ou Node.js, il était primordial de choisir un sujet à notre portée, qui de plus motive la totalité des membres.
L'équipe étant composée de deux étudiants AMIS et deux autres DataScale, de nombreuses réflexions ont été réalisées afin de trouver un point d'intérêt, tout en implémentant des notions en bases de données.
De nombreuses idées de jeux de société ont été proposées, et l'idée finale retenue consiste donc en la réalisation d'un jeu en ligne de dessin inspiré du Pictionary réunissant plusieurs joueurs qui ont pour but de deviner (ou faire deviner) un mot quelconque seulement en le dessinant.

Cette semaine a donc été consacrée à poser les bases du projet. C'est pourquoi nous avons choisi de nous focaliser sur son architecture et son design, mais aussi d'effectuer des recherches sur les différentes technologies disponibles pour que l'on puisse faire un choix avant de commencer l'implémentation de notre projet.

---

## Répartition des rôles :briefcase:

| Rôle | Étudiant |
|---|---|
| Responsable du groupe | SOURSOU Adrien |
| Chercheur | GRUCHET Quentin |
| Codeuse | HELAIN Chloé |
| Codeur | GIRAUDO Mattéo |

---

## Travail effectué :construction:

- Adrien :
 -- Répartition des tâches.
 -- Organisation de réunions.
 -- Rédaction des spécifications (fonctionnalités)
 -- Recherche sur les websockets et les biliothèques utilisant le protocole, notamment socket.io dans le cadre de notre projet.

- Quentin : Recherche sur tous les frameworks utilisables au sein de ce projet.
 -- socket.io : Ce framework s'avérera utile pour gérer tout ce qui attrait au temps réel. Il gère les Webockets, en d'autres termes les connections entre le serveur et les clients, dans les deux sens. En effet, le jeu repose sur le fait que le dessin s'affiche en même temps chez tous les joueurs, pour déterminer à qui appartient la victoire. Ce framework est très souvent couplé avec Express. Il sera donc nécessaire de s'assurer que le navigateur qui utilise le client gère les websockets.
 -- NodeJs : Ce framework sera utile pour le côté serveur du projet. Chaque partie devra être hébergé sur un "serveur" et chaque joueur connecté intéragira avec lui.
 -- Express : Nous pourrons utiliser ce framework de NodeJs afin d'authentifier les joueurs (s'ils veulent créer leur propre compte) et de gérer les routes. Ce framework est avantageux car il offre de nombreuses fonctionnalités pour le développement web, avec une très grande performance et une grande simplicité de codage. De plus, il ne prend pas le dessus sur les fonctionnalités déjà présentes de NodeJS, ce qui le rend parfaitement insérable. Par ailleurs, il propose, dans le cas d'une application web, un mécanisme simple de recherche de bugs et afin de garantir la sécurité des connexions, il peut être couplé avec un autre package disponible sur npm : bcrypt. Enfin, Express propose un hachage sûr des mots de passe utilisateurs.
 -- PostgreSQL : Nous utiliserons ce SGBD pour la partie concernant la base de données. L'avantage de PostgreSQL est qu'il offre une bonne compatibilité avec les requêtes de type relationnel avec SQL par exemple, mais également avec les requêtes de type non relationnel comme JSON. De plus, il permet de gérer un large volume de données dans le cas où notre projet est visité par un nombre conséquent d'utilisateurs. Actuellement, d'après mes recherches, MongoDB est beaucoup utilisé mais il s'agit d'un SGBD dont nous ne possédons pas suffisamment de connaissances à l'inverse de PostgreSQL.
 -- Docker : En vue d'un déploiement sur plusieurs machines, Docker pourrait être utilisé afin de clusteriser toutes les dépendances de notre projet. Cela permettrait, à tout à chacun, qui voudrait utiliser notre projet de ne pas avoir à installer l'ensemble de nos modules et frameworks.


- Chloé :
-- Recherche d'Add-Ons pour mieux gérer l'HTML sur l'IDE VSCode.
-- Recherche et entrainement au codage HTML/CSS/Javascript sur des tutoriels.
-- Création d'une maquette web du projet.
Celle-ci à d'ailleurs quelques fonctionnalité. Tel que le fait de permettre à l'utilisateur de dessiner dans une zone délimitée à la souris, et d'adapter l'affichage et la zone de dessin à la taille de l'écran selon les dimensions de la fenêtre.

- Mattéo :
Un premier modèle relationnel de la base de données de notre application a été conçu dans l'optique de stocker des informations très précises sur le déroulement des manches d'une partie et les tentatives effectuées par un joueur pour trouver un mot de dessin. Cependant, après discussion entre chaque membre du groupe, il a été constaté que cette base de données semblait trop complète et stocker des informations non nécessaires, surtout pour un utilisateur. Cependant, stocker les informations sur les utilisateurs et les datasets de mots à deviner est resté pour nous une nécessité. En effet, cela permettra de mettre en place des classements basés sur les scores des utilisateurs et ainsi donc de développer une approche réaliste et cohérente pour notre jeu en ligne.
Enfin, il est souhaitable au long d'une partie de pouvoir à tout moment pour un utilisateur de déterminer le score de n'importe quel joueur de la partie auquel il participe, et éventuellement à celle des parties présentes en historique. La base de données qu'on implémentera permettra donc ceci.
Cependant, il a été décidé qu'il était tout d'abord préférable d'implémenter en premier lieu un canvas qui nous permettra d'effecteur des illustrations sur une zone de dessin. C'est les raisons pour lesquelles les codeurs se sont concentrés sur le développement de leurs compétences en HTML, CSS et Node.js.
De plus, afin d'avoir une idée globale de l'aspect de notre application web, je me suis attelé à la tâche de réaliser un dessin de l'interface d'une partie simple de notre jeu.

---

## Conclusion :end:

Malgré quelques difficultés concernant le choix du sujet, nous avons fini par trouver un projet stimulant pour l'intégralité des membres de l'équipe. Après avoir conceptualisé notre application, nous allons pouvoir commencer l'implémentation des fonctionnalités principales en commencant par configurer notre environnement de travail.

---

## Bibliographie :book:

- Add-ons pour VSCode :
https://medium.com/geekculture/how-to-run-html-in-visual-studio-code-ba4c6818c919
- Tutoriels javascript/HTML
https://youtu.be/bG2BmmYr9NQ
https://www.youtube.com/watch?v=mRDo-QXVUv8
- Docker :
https://docs.docker.com/
https://docs.docker.com/compose/
- Websockets, gestion temps-réel
https://socket.io/
- Authentification des clients avec Express
https://stackabuse.com/handling-authentication-in-express-js/
- Intégration d'un BD PostgreSQL dans NodeJS
https://learntutorials.net/fr/node-js/topic/7706/integration-postgresql
- Exemple de logiciel de dessin en JS
https://jsfiddle.net/jdias/cQ5Km/
