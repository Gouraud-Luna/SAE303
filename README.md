# Prévention des risques à Bordeaux Métropole

Projet de SAE 303 (R3.12 / MMI) consacré aux risques industriels, aux fortes
chaleurs et aux vulnérabilités sociales dans le quartier de Bacalan.

## Développement local

Prérequis : Node.js et Bun.

```bash
bun install
bun run dev
```

Le site est ensuite disponible à l’adresse indiquée par Astro, généralement
`http://localhost:4321`.

## Production

```bash
bun run build
bun run preview
```

Le projet est configuré pour un déploiement Netlify avec l’adaptateur
`@astrojs/netlify`.

URL du site : à compléter après publication Netlify.

## Récit

- `/` : contexte et problématique.
- `/exploration` : carte interactive des zones thermiques et installations industrielles.
- `/revelation` : lecture des vulnérabilités socio-économiques.
- `/conclusion` : repères de prévention à l’échelle du quartier.
- `/methode` : sources, traitements, limites et ressources.

## Données et méthode

Les fichiers utilisés sont des exports locaux préfiltrés dans `src/assets/`.
Les visualisations utilisent Observable Plot et Leaflet. Les cartes affichent
les données nécessaires à la lecture sans importer les fichiers bruts du défi.
Les sources, millésimes et limites sont détaillés sur la page Méthode.

## Notebook

[Notebook Observable](https://observablehq.com/d/a4eab818491f5971)
