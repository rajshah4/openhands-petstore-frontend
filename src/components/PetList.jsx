import { pets, categories } from '../data/pets';
import PetCard from './PetCard';
import BudgetFilter from './BudgetFilter';
import { filterPets } from '../utils/filterPets';

export default function PetList({
  activeCategory,
  onCategoryChange,
  onAddToCart,
  maxBudget,
  onBudgetChange,
  maxPrice,
}) {
  const filtered = filterPets(pets, { activeCategory, maxBudget });

  return (
    <section className="pets-section">
      <div className="container">
        <h2 className="section-title">
          {activeCategory
            ? `${categories.find((c) => c.id === activeCategory)?.name ?? 'Pets'}`
            : 'All Pets'}
        </h2>

        <div className="filter-bar">
          <button
            className={`filter-btn ${!activeCategory ? 'active' : ''}`}
            onClick={() => onCategoryChange(null)}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat.id)}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        <BudgetFilter
          maxBudget={maxBudget}
          onChange={onBudgetChange}
          maxPrice={maxPrice}
        />

        <div className="pets-grid">
          {filtered.length === 0 ? (
            <p className="pets-empty">No pets match your budget. Try increasing the maximum adoption fee.</p>
          ) : (
            filtered.map((pet) => (
              <PetCard key={pet.id} pet={pet} onAddToCart={onAddToCart} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
