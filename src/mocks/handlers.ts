// src/mocks/handlers.js
import { http, HttpResponse, delay } from 'msw'

import getPokemon200 from "./fixtures/getPokemon200.json";
import getPokemon200Id from "./fixtures/getPokemon200-id.json";

export const handlers = [
  http.get('https://example.com/user', () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),

  http.get("https://pokeapi.co/api/v2/pokemon", async ({ request }) => {
    await delay()
    const copyPokemon200 = JSON.parse(JSON.stringify(getPokemon200));
    const url = new URL(request.url);
    const offset = parseInt(url.searchParams.get("offset") || "0");
    const limit = parseInt(url.searchParams.get("limit") || "20");
    copyPokemon200.count = copyPokemon200.results.length;
    if (offset > 0) {
      copyPokemon200.previous = `https://pokeapi.co/api/v2/pokemon?offset=${Math.max(0, offset - limit)}&limit=${limit}`;
    }
    if (offset + limit < getPokemon200.count) {
      copyPokemon200.next = `https://pokeapi.co/api/v2/pokemon?offset=${offset + limit}&limit=${limit}`;
    } else {
      copyPokemon200.next = null;
    }
    copyPokemon200.results = getPokemon200.results.splice(offset, limit)
    return HttpResponse.json(copyPokemon200)
  }),

  http.get("https://pokeapi.co/api/v2/pokemon/:id/", async ({ }) => {
    return HttpResponse.json(getPokemon200Id)
  })
]