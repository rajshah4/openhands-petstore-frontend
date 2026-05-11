import { ShoppingCart, Scissors } from 'lucide-react';

export default function Header({ cartCount, onCartClick, activeCategory, onCategoryChange, onGroomingClick }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo" onClick={(e) => { e.preventDefault(); onCategoryChange(null); }}>
          <span className="logo-icon">🐾</span>
          <span>Paws & Claws</span>
        </a>

        <nav className="nav">
          {['Dogs', 'Cats', 'Birds', 'Fish'].map((cat) => (
            <button
              key={cat}
              className={`nav-link ${activeCategory === cat.toLowerCase() ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat.toLowerCase())}
            >
              {cat}
            </button>
          ))}
          <button className="nav-link grooming-nav" onClick={onGroomingClick}>
            <Scissors size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} />
            Grooming
          </button>
        </nav>

        <button className="cart-btn" onClick={onCartClick}>
          <ShoppingCart size={18} />
          Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}
