import { describe, it, expect } from 'vitest';
import { filterPets } from '../utils/filterPets';

const samplePets = [
  { id: 1, name: 'Buddy', category: 'dogs', price: 850, status: 'available' },
  { id: 2, name: 'Luna', category: 'dogs', price: 950, status: 'available' },
  { id: 3, name: 'Max', category: 'dogs', price: 750, status: 'available' },
  { id: 5, name: 'Whiskers', category: 'cats', price: 700, status: 'available' },
  { id: 13, name: 'Goldie', category: 'fish', price: 15, status: 'available' },
  { id: 9, name: 'Rio', category: 'birds', price: 1200, status: 'available' },
];

describe('filterPets', () => {
  it('returns all pets when no filters are provided', () => {
    expect(filterPets(samplePets)).toHaveLength(samplePets.length);
  });

  it('returns all pets when filters are empty/undefined', () => {
    expect(filterPets(samplePets, {})).toHaveLength(samplePets.length);
    expect(filterPets(samplePets, { activeCategory: null, maxBudget: null })).toHaveLength(
      samplePets.length
    );
  });

  it('filters by category only', () => {
    const dogs = filterPets(samplePets, { activeCategory: 'dogs' });
    expect(dogs).toHaveLength(3);
    expect(dogs.every((p) => p.category === 'dogs')).toBe(true);
  });

  it('filters by budget only', () => {
    const within = filterPets(samplePets, { maxBudget: 750 });
    expect(within.every((p) => p.price <= 750)).toBe(true);
    // 750, 700, 15
    expect(within.map((p) => p.id).sort((a, b) => a - b)).toEqual([3, 5, 13]);
  });

  it('combines category and budget filters correctly', () => {
    const affordableDogs = filterPets(samplePets, {
      activeCategory: 'dogs',
      maxBudget: 800,
    });
    // Only Max (750) qualifies among dogs <= 800
    expect(affordableDogs).toHaveLength(1);
    expect(affordableDogs[0].name).toBe('Max');
  });

  it('treats budget 0 as excluding all priced pets', () => {
    const result = filterPets(samplePets, { maxBudget: 0 });
    expect(result).toHaveLength(0);
  });

  it('budget equal to a price includes that pet (inclusive boundary)', () => {
    const result = filterPets(samplePets, { maxBudget: 850 });
    expect(result.some((p) => p.price === 850)).toBe(true);
  });

  it('budget higher than all prices returns all pets', () => {
    const result = filterPets(samplePets, { maxBudget: 999999 });
    expect(result).toHaveLength(samplePets.length);
  });

  it('returns empty array when no pets match', () => {
    const result = filterPets(samplePets, { activeCategory: 'birds', maxBudget: 10 });
    expect(result).toHaveLength(0);
  });

  it('does not mutate the input array', () => {
    const original = [...samplePets];
    filterPets(samplePets, { maxBudget: 500 });
    expect(samplePets).toEqual(original);
  });
});
