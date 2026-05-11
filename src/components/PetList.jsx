import { pets, categories } from '../data/pets';
import PetCard from './PetCard';

export default function PetList({ activeCategory, onCategoryChange, onAddToCart }) {
  const filtered = activeCategory
    ? pets.filter((p) => p.category === activeCategory)
    : pets;

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

        <div className="pets-grid">
          {filtered.map((pet) => (
            <PetCard key={pet.id} pet={pet} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}
