# AWS - Groupe 14 - Rapport n°3


---

## Introduction :speech_balloon:	

Ces trois dernières semaines, nous avons pu approfondir de nouvelles technologies jusque là survoleés mais essentielles à notre programme : socket.io pour la gestion du temps réel de notre dessin et React.js pour la partie graphique de notre programme. Nous avons fait une grande avancée sur la structure de notre projet; nous avons pu bien mieux découper notre différents modules afin de rendre notre code plus professionnel.
Plusieurs caractéristiques dont notre application a besoin ont été discuté notamment sur l'ordre de priorité de ces fonctionnalités. Quelques objectifs ont pu donc être élaborés :

- Premièrement, nous devions nous concentrer sur l'interaction avec l'utilisateurs, c'est-à-dire le chat et le streaming du dessin.
- Deuxièmement, nous devions élaborer le système de jeu afin que nous puissions construire un ensemble de règles à mettre en place que l'utilisateur se verra obliger de suivre. 

---

## Répartition des rôles :briefcase: 

| Rôle | Étudiant |
|---|---|
| Responsable du groupe | GRUCHET Quentin |
| Chercheur | SOURSOU Adrien |
| Codeuse | HELAIN Chloé |
| Codeur | GIRAUDO Mattéo |

---

## Travail effectué :construction: 

- Quentin : 
Etant chef de projet pendant ces trois dernières semaines, mon rôle était d'organiser et d'orienter les codeurs afin qu'ils puissent structurer leurs objectifs et leurs missions. 
J'ai organiser plusieurs réunions afin que tous les membres du groupe soient au fait quant à l'avancée du projet. Nous avons pu au cours, des différentes réunions, identifier les problèmes intervenus et trouver des solutions réalisables.
J'ai également proposer trois objectifs à réaliser : Le premier était de mettre en place, via le système de socket, le système de streaming du dessin afin que tous les joueurs connectés puissent, en temps réel, observer ce que dessine actuellement le meneur du jeu. C'est ce dont Mattéo avait la tâche de faire. Le second objectif était le système de chat, essentielle à notre application car c'est via ce chat que les bonnes et mauvaises réponses seront données et que le jeu pourra mettre fin à la manche en désignant le vainqueur. C'est ce dont Chloé s'est occupé. Le dernier objectif était de mettre en place tout le système de jeu c'est-à-dire le fait d'attribuer un mot à faire deviner au meneur, pouvoir lancer la partie dès que l'hôte de la partie le souhaite etc.
De plus, j'ai régulièrement consulté les codeurs afin de suivre leurs progressions, en plus de voir si ces derniers nécessitaient de l'aide et rencontraient des problèmes les empêchant d'avancer.
Enfin, nous avons pu ré-évaluer les objectifs en mettant l'accent surtout sur le premier et second objectifs car ils étaient les plus complexes à faire et demandaient plus de temps de codage et de reflexion.

- Adrien : 
Après avoir constaté la nécessité d'utiliser un framework frontend pour notre application, je me suis personnellement chargé d'effectuer un comparatif des technologies utilisées actuellement pour qu'un choix soit fait au sein de l'équipe.
Mes recherches se sont concentrées sur les frameworks les plus utilisés actuellement : Angular, React et Vue.js.
Un framework frontend permet la création du rendu de l'application  au moyen de ce qu'on appelle des "components", des briques élementaires qui contiennent par exemple des formulaires, des ensembles de boutons... Une fois assemblés avec un "layout" qui structure l'agencement des éléments, ils forment une page web affichable pour l'utilisateur.
La partie frontend est une interface entre l'utilisateur final et l'API contenue dans la partie backend. Au travers plusieurs requêtes faites à l'API, les données peuvent être affichées sur la page web lorsqu'elles sont réceptionnées.
Voici un petit comparatif des trois frameworks frontend les plus connus :

    | Framework | Angular | React | Vue |
    |---|---|---|---|
    | Dernière version | 13.0.0 | 18.0.0 | 3.2.33 |
    | Popularité (GitHub) | 80.8k | 187k | 195k |
    | Utilisation par les marques | Microsoft, Paypal, Samsung... | Airbnb, DropBox, Facebook... | Apple, Google, Trustpilot... |
    | Architecture | Utilisation de modules, components et services. | Ne nécessite pas de structure spécifique, compatible avec la création de components. | Systèmes de vues avec components, nécessite des extensions pour avoir certaines fonctionnalités. 
    
    La popularité de React nous insite à penser que ce framework serait plus simple à utiliser dans notre cas, de part sa flexibilité quant à la structure requise qui nous laisse libre de choisir comme bon nous semble le découpage mais aussi du nombre d'exemples disponibles pour que l'on puisse mieux en comprendre le fonctionnement. De plus, l'ancienneté du framework nous rassure sur les fonctionnalités fournies par défaut, notamment le système de ReactDOM qui permet d'automatiquement actualiser les données lorsqu'un changement est détecté. Vue.js est un framework encore trop récent et son système de vues paraît trop différent de ce qui se fait habituellement. C'est pourquoi React a finalement été intégré au projet. J'ai préféré m'en occuper pour aller plus vite étant donné que je maîtrise l'utilisation de Docker.
En tant que chercheur, j'ai aussi pu apporter quelques précisions sur la façon dont le back et le front communiquent ayant déjà quelques connaissances à ce sujet pour aider le groupe à mieux saisir comment travailler sur l'API maintenant quelle est indépendante de la partie client.

- Chloé :
Pendant ces dernières semaines, j'ai appris à utiliser react, socket.io et expressjs en synergie afin de programmer et intégrer un chat dans notre jeu. Pour l'instant il ne s'agit que d'une messagerie instantanée (grâce à socket.io). Il manque encore certaines fonctionnalités comme l'identification d'un utilisateur et l'affichage de la liste des utilisateurs (voir même plus tard un système de "room" afin de pouvoir héberger plusieurs parties sur le même serveur). Même si j'ai pu coder ces fonctionnalités dans des programmes séparés, celles-ci sont difficile à intégrer dans notre projet car il à subit un rework majeur et des modifications fréquentes dernièrement. Je suis donc en ce moment en train de travailler à les intégrer avec l'aide de notre chercheur, Adrien. 

- Mattéo : 
Étant codeur durant ces dernières semaines, je me suis attelé à la tâche qui nous semblait la plus compliquée comme précisée dans notre dernier rapport, en d’autres termes la communication du ‘canvas’ de dessin entre un client et tous les autres clients à l’aide d’un serveur.
En effet, à l’exception de la sauvegarde du dessin qui ne concerne que le client qui le demande, toutes les autres actions entreprises par un utilisateur (effacer, remplir, revenir en arrière, changer de couleur et autres) sont communiquées à tous les autres utilisateurs. Afin de réaliser cette tâche, j’ai dû personnellement me renseigner sur socket.io, un module permettant de créer des WebSockets et donc réaliser des connexions entre les clients et le serveur. J’ai donc intégré ce module et, à l’aide du code déjà réalisé par Quentin, réaliser cette tâche avec succès.
Enfin, l’ensemble du groupe ayant au final choisi d’utiliser le framework frontend React, j’ai dû réorganiser une majeure partie de notre implémentation pour que notre application soit opérationnelle tout en utilisant ce framework.

---

## Conclusion :end: 
Les tâches à réaliser sont encore conséquentes mais notre travail collectif nous a permis de bien avancer sur plusieurs aspects de notre application. Le groupe a su se rendre disponible et réactif notamment lorsque qu'un problème intervenait.
Le travail effectué jusqu'à présent était nécessaire afin qu'aucune personne ne se retrouve bloquée par le potentiel manque de fonctionnalités.
Les objectifs principaux de ces prochaines semaines seront d'améliorer l'expérience utilisateur notamment en produisant une interface graphique agréable via React, de programmer les règles du jeu et d'offrir la possibilité à l'utilisateur de créer et/ou se connecter à son propre compte.

---

## Bibliographie :book: 

- Comparatif Angular / React / Vue.js :
https://athemes.com/guides/angular-vs-react-vs-vue
- Documentation de React :
https://fr.reactjs.org
- Tutoriel messagerie sécurisée utilisant ExpressJs, Socket.io et React 
https://developer.okta.com/blog/2021/07/14/socket-io-react-tutorial