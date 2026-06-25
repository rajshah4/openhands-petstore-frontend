/**
 * Pure filtering helpers shared by PetList and tests.
 *
 * `maxBudget` is null when no budget cap is applied.
 */
export function filterPets(petsList, { activeCategory, maxBudget } = {}) {
  return petsList.filter((p) => {
    if (activeCategory && p.category !== activeCategory) return false;
    if (maxBudget != null && p.price > maxBudget) return false;
    return true;
  });
}
