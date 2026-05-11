import { categories, pets } from '../data/pets';

export default function CategoryGrid({ onSelect }) {
  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((cat) => {
            const count = pets.filter((p) => p.category === cat.id).length;
            return (
              <div key={cat.id} className="category-card" onClick={() => onSelect(cat.id)}>
                <span className="category-emoji">{cat.emoji}</span>
                <span className="category-name">{cat.name}</span>
                <span className="category-count">{count} available</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
