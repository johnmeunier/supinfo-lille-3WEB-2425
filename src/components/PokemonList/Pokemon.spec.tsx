import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
import PokemonList from './PokemonList'

describe('PokemonList', () => {
  it('renders the PokemonList component', async () => {
    render(<QueryClientProvider client={queryClient}>
      <PokemonList /></QueryClientProvider>)
    await waitFor(() => {
      expect(screen.getByText("charizard")).toBeTruthy();
    })
  })
})