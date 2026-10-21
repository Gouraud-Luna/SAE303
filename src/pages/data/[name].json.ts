import type { APIRoute } from "astro";
import chaleur from "../../assets/chaleur.json";
import installations from "../../assets/installationindugironde.json";
import population from "../../assets/pop.json";

export const prerender = false;

const datasets = {
  "chaleur.json": chaleur,
  "installationindugironde.json": installations,
  "pop.json": population,
};

export const GET: APIRoute = ({ params }) => {
  const name = params.name;

  if (!name || !(name in datasets)) {
    return new Response(JSON.stringify({ error: "Jeu de données inconnu" }), {
      status: 404,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }

  return new Response(JSON.stringify(datasets[name as keyof typeof datasets]), {
    headers: {
      "Content-Disposition": `attachment; filename="${name}"`,
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};
