# BD Empires — By La Mentale

Maquette de boutique streetwear en Astro, construite à partir du cahier des charges de la marque. Palette monochrome noir/blanc, typographies Archivo / Archivo Black / Permanent Marker, devise **Work · Respect · Discipline**.

Cette maquette est un front-end statique avec données mockées (`src/data/products.ts`) et panier client (`localStorage`) — pas de backend réel branché. Le schéma de base de données cible (Supabase/PostgreSQL) est fourni dans `supabase-schema.sql` : `products`, `variants`, `stock`, `orders`, `order_items`, `customers`, `addresses`, `newsletter`.

## Pages

- `/` — accueil : écran d'entrée globe Canvas 2D, hero, bandeau devise, 4 pièces, prochain drop (compte à rebours), manifeste, lookbook, newsletter
- `/boutique` — grille produits, filtres (catégorie, taille, disponibilité), tri
- `/produit/[slug]` — fiche produit dynamique (12 produits) : galerie, sélecteur de taille avec stock réel, guide des tailles, pièces associées
- `/panier` — panier localStorage, code promo (`DISCIPLINE10`)
- `/commande` — tunnel en 4 étapes (coordonnées, livraison, paiement, récapitulatif) + `/commande/confirmation`
- `/compte` — connexion / inscription (mock), commandes, adresses
- `/lookbook` — visionneuse plein écran, navigation clavier et tactile
- `/histoire` — récit de marque et manifeste
- `/contact` — formulaire avec anti-spam (honeypot)
- `/legal/*` — mentions, CGV, retours, confidentialité
- `/404` — page d'erreur dans l'univers du globe

## Non implémenté (hors scope maquette)

- Paiement Stripe réel (formulaire de carte en UI seule, mode test)
- Authentification et base de données réelles (Supabase)
- Logo réel de la marque (emplacement texte réservé dans le header)

## Démarrer

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:4321
