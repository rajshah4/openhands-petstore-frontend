import { describe, it, expect, vi } from 'vitest';
import { render, screen, within, fireEvent } from '@testing-library/react';
import PetList from './PetList';

const noop = () => {};

describe('PetList budget filtering integration', () => {
  it('renders all pets when no budget is set', () => {
    render(
      <PetList
        activeCategory={null}
        onCategoryChange={noop}
        onAddToCart={noop}
        maxBudget={null}
        onBudgetChange={noop}
        maxPrice={1500}
      />
    );
    // every pet name from data/pets.js should be present
    const names = ['Buddy', 'Luna', 'Max', 'Daisy', 'Whiskers', 'Shadow', 'Mochi', 'Cleo', 'Rio', 'Sunny', 'Kiwi', 'Nemo', 'Goldie', 'Blue'];
    names.forEach((n) => expect(screen.getByText(n)).toBeInTheDocument());
  });

  it('renders only pets at or below the budget', () => {
    render(
      <PetList
        activeCategory={null}
        onCategoryChange={noop}
        onAddToCart={noop}
        maxBudget={100}
        onBudgetChange={noop}
        maxPrice={1500}
      />
    );
    // pets <= 100: Kiwi(80), Nemo(35), Goldie(15), Blue(25)
    expect(screen.getByText('Kiwi')).toBeInTheDocument();
    expect(screen.getByText('Nemo')).toBeInTheDocument();
    expect(screen.getByText('Goldie')).toBeInTheDocument();
    expect(screen.getByText('Blue')).toBeInTheDocument();
    // pets > 100 should be absent
    expect(screen.queryByText('Buddy')).not.toBeInTheDocument();
    expect(screen.queryByText('Rio')).not.toBeInTheDocument();
  });

  it('shows the empty-state message when no pets fit the budget', () => {
    render(
      <PetList
        activeCategory="birds"
        onCategoryChange={noop}
        onAddToCart={noop}
        maxBudget={50}
        onBudgetChange={noop}
        maxPrice={1500}
      />
    );
    // birds: Rio(1200), Sunny(250), Kiwi(80) — none <= 50
    expect(
      screen.getByText(/No pets match your budget/i)
    ).toBeInTheDocument();
  });

  it('calls onBudgetChange when a preset is clicked', () => {
    const onBudgetChange = vi.fn();
    render(
      <PetList
        activeCategory={null}
        onCategoryChange={noop}
        onAddToCart={noop}
        maxBudget={null}
        onBudgetChange={onBudgetChange}
        maxPrice={1500}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: '$100' }));
    expect(onBudgetChange).toHaveBeenCalledWith(100);
  });

  it('combines category filter with budget filter', () => {
    const { container } = render(
      <PetList
        activeCategory="cats"
        onCategoryChange={noop}
        onAddToCart={noop}
        maxBudget={600}
        onBudgetChange={noop}
        maxPrice={1500}
      />
    );
    // cats: Whiskers(700), Shadow(600), Mochi(900), Cleo(550) -> <=600: Shadow, Cleo
    const cards = container.querySelectorAll('.pet-card');
    expect(cards).toHaveLength(2);
    const names = within(container).getAllByText(/^(Shadow|Cleo)$/);
    expect(names).toHaveLength(2);
  });
});
