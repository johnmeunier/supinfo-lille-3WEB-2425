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
    console.log(request);
    // offset & limit à gérer
    // getPokemon200.previous
    // getPokemon200.next
    // getPokemon200.count
    // getPokemon200.results
    getPokemon200.results.splice(0, 10)
    return HttpResponse.json(getPokemon200)
  }),

  http.get("https://pokeapi.co/api/v2/pokemon/:id/", async ({ }) => {
    return HttpResponse.json(getPokemon200Id)
  })
]