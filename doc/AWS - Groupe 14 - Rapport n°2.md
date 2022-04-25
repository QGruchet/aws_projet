# AWS - Groupe 14 - Rapport n°2

---

## Introduction :speech_balloon:	

A la suite de notre première présentation, le professeur qui nous à évalué nous avait mis en garde sur le risque de créer un site web difficile à maintenir si nous nous y prenons mal. Etant donnée que les connaissances du groupe dans cette thématique ne sont encore pas assez développés, nous avons préférés être prudent et orienter notre travail dans ce qui pourrait rendre la construction de notre site stable et teamwork friendly. Ainsi, ces deux dernières semaines, nos tâches ont été réparties avec les priorités suivantes:

- Trouver et implémenter un moyen de gestion des dépendances pour notre site web.

- Faire des recherches sur la structure du projet (organisation des fichiers).

- Trouver une façon de stocker les informations gérées par les utilisateurs (base de données).

- Étudier la façon de réaliser les échanges d'information entre l'utilisateur et le serveur.
 
Mais aussi:

- Continuer à designer notre site web à partir de la maquette.

---

## Répartition des rôles :briefcase: 

| Rôle | Étudiant |
|---|---|
| Responsable du groupe | HELAIN Chloé |
| Chercheur | GIRAUDO Mattéo |
| Codeur | GRUCHET Quentin |
| Codeur | SOURSOU Adrien |

---

## Travail effectué :construction: 

- Chloé : 
 -- Répartition des tâches.
 -- Organisation de réunions.
 -- Suivi du travail des autres membres du groupe.
     
    J'ai également suivi plusieurs tutoriels afin d'apprendre à créer et à paramétrer des serveurs avec node, ainsi que de gérer les routes. Cette expérience nous sera utile plus tard. 
 
- Mattéo : 
        
    En tant que chercheur pour ces deux dernières semaines, j’ai donc effectué une écrasante majorité des recherches considérées nécessaires par notre chef de projet actuel. Ma première mission était donc d’établir plusieurs possibles architectures en lien avec notre application mais aussi avec les différents langages et frameworks (majoritairement Node.js et Express). L’idée initiale était donc de diviser notre application en plusieurs parties dont deux majeures,  le back-end (gestion des routes, des services, des controllers, …) et le front-end (comportant les composants graphiques, stylesheets, logos, …). Cependant, à l’exception de BootStrap, nous n’utilisons pas d’outils ou frameworks particuliers pour le front-end de notre application, ainsi une structure plus compacte mais aussi plus simple a été conçue. En voici une description très globale de ces principaux dossiers et de leurs composants : 
    
    - Controllers : Fichiers définissant les méthodes recevant des routes et les convertissant en requêtes HTTP.
    - Middlewares : Fonctions nécessaires par lesquelles on souhaite que notre route passe avant d'utiliser le reste des contrôleurs définis, ils sont surtout utilisés pour les routes qui nécessitent une authentification, des téléchargements, ...
    - Models: Modèles de données nécessaires à l'application (dans notre cas relationnel) et l’endroit où leurs fonctions connexes pourront être précisés à l'intérieur des fichiers de schémas. Contenu défini aussi par l'utilisation d'une bibliothèque ORM éventuellement.
    - Routes : Fichiers définissant les routes nécessaires à l'application, tel qu'un fichier correspond à un ensemble logique de routes. Par exemple , pour un type de ressource, on peut avoir plusieurs routes.
    - Services : Contient des services qui représentent des objets de « business logic » et qui peuvent éventuellement exécuter des requêtes sur la base de données de l’application.
    - Public : Logos et stylesheets de l’application.
    - Utils : Aides et utilitaires de l’application
      Par ailleurs, je me suis fortement renseigné sur Docker, une plateforme logicielle permettant de concevoir et déployer des applications intégrant des logiciels et les éléments décrivant leur fonctionnement dans des conteneurs. J’ai pris le soin donc de communiquer à Adrien de nombreuses documentations et tutoriels liés à cette plateforme tout en utilisant Postgres, Node et Express afin qu’il puisse instaurer un cluster qui sera décrit ultérieurement. Il nous semblait important d’utiliser cette plateforme car elle permet de déployer notre application de manière à ce que chaque personne ait la même configuration de l’environnement de travail (par exemple il n’est pas nécessaire d’installer le serveur directement chez un développeur/utilisateur car il sera déployé dans un conteneur) tout en s’assurant que le code s’exécutera rapidement et efficacement.
      
     Toutes ses recherches nous ont permis avec Adrien d’en conclure une structure officielle pour notre application. 
      
     Enfin, j’ai transmis à Quentin plusieurs vidéos YouTube, articles et projets GitHub parfois retenus, parfois non-retenus afin qu’il puisse coder une interface de dessin le plus aisément et efficacement possible. 


- Adrien : 

    Mon objectif principal était de configurer la structure du projet en utilisant les dépendances dont nous avons parlé lors du Rapport n°1. J'ai tout d'abord créé un cluster multi-services déployable avec Docker via docker-compose. Le système fonctionne de la façon suivante : un premier conteneur se charge de la partie serveur avec Node.js et un deuxième s'occupe de la base de données Postgres. La difficulté a été de connecter le serveur avec la base de données en ouvrant les bons ports ainsi que d'utiliser les volumes pour garder les fichiers en local sur le disque pour les modifier directement sans avoir à relancer le conteneur à chaque fois. Cette tâche m'a aussi permis de mieux comprendre le fonctionnement du package.json et les différences entre le mode 'dev' et 'prod'. J'ai récapitulé l'ensemble des informations sur Docker dans un fichier explicatif à destination des autres membres pour qu'ils comprennent comment utiliser cet environnement.
    Après avoir terminé la configuration de base, je me suis attelé à comprendre un peu plus en détail Express, le framework que l'on va utiliser pour notre projet. C'est pourquoi j'ai pu grâce aux informations du chercheur, correctement séparer les différents dossiers du projet avec les routes, services et vues.

- Quentin :

    Ces deux dernières semaines je me suis concentré sur l'interface de dessin, aux fonctionnalités dont pouvait jouir l'utilisateur, aux fonctionnement de ces fonctionnalités et de comment rendre notre interface responsive et intéractive. Lors du codage, je me suis confronté à deux problèmes majeurs: 

    - Premièrement, je n'arrivais pas à faire concorder l'emplacement du pointeur de la souris avec l'emplacement où l'utilisateur voulait démarrer. Si cet utilisateur souhaitait dessiner au centre, le dessin commençait plusieurs centimètres plus loin. Lors de recherches, j'ai trouvé beaucoup de personnes ayant eu ce problème mais ils mettaient en place une page entière comme canvas. Dans notre cas, il se trouve dans une bien particulière. J'ai donc dû adapter les solutions à notre problème.

    - Deuxièmement, la fonction de retour arrière m'a causé pas mal de fil à retordre. En effet, je n'arrivais pas à annuler le trait que l'utilisateur venait de dessiner. Alors j'ai opté pour une solution plus précise. Le retour arrière n'efface pas trait par trait mais point par point. Cela permet à l'utilisateur d'avoir plus de contrôle sur son dessin.
    
    De plus, cette semaine je me suis concentré sur les routes et l'utilisation d'Express. Cela m'a permis d'agrandir mes connaissances sur les routes et les authentifications. 
    
    Enfin, j'ai étudié rapidement l'utilisation d'un framework front-end : BootStrap. Je pense que cela pourrait être un réel atout pour améliorer le visuel de notre application, le tout sans trop prendre de temps.

    Nous avons aujourd'hui une interface de dessin prête à être intégrée à l'application.


---

## Conclusion :end: 

Le travail de ces deux dernières semaines semble avoir porté ses fruits, d'autant plus que chaque élément du groupe a su faire preuve de disponibilité, de sérieux et de cohésion jusqu'à ce jour.
En ce qui concerne l'avancée de l'application, le déploiement avec Docker à été configuré et compris, il est donc maintenant tout à fait opérationnel. Enfin, l'interface de dessin a été grandement améliorée et a atteint, à l'exception d'éventuels légers problèmes techniques, sa version finale.

Dès la semaine prochaine, l'objectif principal sera de commencer sérieusement à setup le serveur en utilisant le protocole Express.js et socket.io, étant que chaque membre du groupe a commencé à s'y initier. Le projet pourra ensuite être exécuté sur docker idéalement. On estime que notre plus grand défi sera de gérer le dessin directement sur le serveur.

---

## Bibliographie :book: 

- Add-ons pour VSCode : 
https://medium.com/geekculture/how-to-run-html-in-visual-studio-code-ba4c6818c919
- Architecture Express/Node.js : 
https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/
- Tutoriels javascript/HTML
https://youtu.be/bG2BmmYr9NQ
https://www.youtube.com/watch?v=mRDo-QXVUv8
- Tutoriels Node.js :
https://nodejs.org/en/docs/guides
https://devdocs.io/node/
- Playlist Youtube de tutoriels NodeJS
https://youtu.be/0PA69L88HeI?list=PLjwdMgw5TTLV7VsXd9NOeq39soYXORezN
- Docker : 
https://docs.docker.com
https://docs.docker.com/compose
https://hub.docker.com/\_/node
https://hub.docker.com/\_/postgres
https://www.cloudbees.com/blog/using-docker-compose-for-nodejs-development
https://stackoverflow.com/questions/62122006/node-docker-compose-development-and-production-setup
- Intégration d'un BD PostgreSQL dans NodeJS
https://learntutorials.net/fr/node-js/topic/7706/integration-postgresql