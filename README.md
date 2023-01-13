# UltraMotion Corp

![logo Pricipal](/public/img/logoPrincipal.svg)
![logo DarkMode](/public/img/logoDarkMode.svg)

Projet fil rouge : [Ib-formation](https://www.ib-formation.fr/)

Durée : début novembre 2022 - fin janvier 2023 (3 mois)

## Prérequis

- [node.js](https://nodejs.org/en/)

## installation

- récupérer le projet
- installer les dépendances avec `npm i`
- Lancer le serveur avec `npm start`

## Membres

- [Pierre Dumont](https://github.com/PierreD59)
- [Robin Hotton](https://github.com/Gerob59)
- [Peter Boniface](https://github.com/peterboniface)

## Travail effectué

- [Persona](https://www.canva.com/design/DAFVfEKsZj4/VbaFOJDvE6jbBxkHxzc4QA/edit?utm_content=DAFVfEKsZj4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
- [User Story](https://docs.google.com/spreadsheets/d/1PRI6pndtnhPqj--X3W33oXfbw50mpy7VXpd1_0mDzFA/edit#gid=1764161495)
- [Charte graphique](https://www.canva.com/design/DAFVlP_uPNE/Er0it3A6UL9IIPSLtYrNJA/view?utm_content=DAFVlP_uPNE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
- [Wireframe / Maquettage / Prototypage](https://www.figma.com/team_invite/redeem/78lEjFCsum1azZk7CFyG98)
- [Trello](https://trello.com/b/n83uIREc/projet-fil-rouge)
- Implémentation graphique avec react typescript

---

## Description

Une entreprise industrielle, `UltraMotion Corp` , souhaite créer une application web permettant à de futurs partenaires de s’inscrire et revendre leurs services. A cet effet, UltraMotionCorp a établi une version préliminaire du cahier des charges (CDC). Il est important de noter que ce dernier pourra tout à fait être modifié et étendu tout le long du cycle de développement et de livraison. Le délai fixé par le client est de quatre mois maximum à partir de la soumission du CDC.

L’application est principalement axée sur les points suivants :

1. Le module d’inscription :

```
Le client souhaite pouvoir donner la possibilité aux partenaires de créer une liste de services tel que :
    1. Le câblage d’armoire électrique
    2. L’accompagnement aux choix de matériels industriels
    3. L’installation de matériels
    4. Etc…
Pour chaque type de service, le partenaire propose un taux horaire.
Chaque partenaire peut ajouter son logo, une description de son entreprise, l’effectif, le numéro de siret, ses coordonnées, son domaine principal d’activité et la zone géographique qu’il couvre.
```

2. Le module de recherche de prestations :

```
L’application doit pouvoir permettre à des tiers de rechercher des entreprises, par nom et surtout par type de prestation. Une fois la prestation trouvée, le client peut ajouter cette prestation à un panier et continuer ses recherches.

Une fois le panier validé, une notification est envoyée aux entreprises sélectionnées, celle-ci doivent pouvoir valider la prestation ou non.
```

3. Un module de devis :

```
Lorsqu’une entreprise est sélectionnée, elle doit pouvoir proposer un devis pour la prestation en question.
On devra pouvoir gérer le temps de prestation mais également également la vente de matériel. Lors de la validation du devis, le prix total du panier est mis à jour.
```

4. Un module de communication :

```
Dés lors qu’un client et qu’un prestataire finalisent un devis, ils doivent pouvoir échanger des documents via l’application sous forme de fichiers pdf. Ces fichiers seront rattachés au numéro de devis et accessibles par le client et le prestataire.
```

5. Evaluation de la prestation :

```
Lorsque le client décide de valider une prestation, celle-ci est réputée débuter. Les deux parties peuvent décider de terminer la prestation, lorsque que c’est le cas des deux côtés, la prestation s’arrête. Et une évaluation portant sur 4 items est proposée au client (l’evaluation se fera via l’attributiuon d’une note de 0 à 5) :
    1. La qualité globale de la prestation
    2. La facilité de communication
    3. La qualité du dossier technique fournit
    4. Le niveau d’expertise
```

6. Module de monitoring :

```
Une partie administration doit permettre de visualiser :
    1. le nombre de prestations en cours et terminées.
    2. Le nombre moyen, Max et min de prestation par prestataire
    3. Le prix moyen, Max et min d’une prestation.
```
