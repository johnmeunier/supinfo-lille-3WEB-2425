import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router';
const queryClient = new QueryClient();
import PokemonList from './PokemonList'

describe('PokemonList', () => {
  beforeEach(() => {
    render(<QueryClientProvider client={queryClient}><MemoryRouter>
      <PokemonList /></MemoryRouter></QueryClientProvider>)
  });

  it('renders 20 pokemons', async () => {
    await waitFor(() => {
      expect(screen.getAllByRole("heading", { level: 3 })).length(20);
    })
  });

  it('renders charizard', async () => {
    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 3, name: 'charizard' }))
    })
  });
})