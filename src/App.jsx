import { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import PetList from './components/PetList';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const petsRef = useRef(null);

  const handleAddToCart = (pet) => {
    setCartItems((prev) => [...prev, pet]);
    setCartOpen(true);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleBrowse = () => {
    petsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat) petsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header
        cartCount={cartItems.length}
        onCartClick={() => setCartOpen(true)}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {!activeCategory && (
        <>
          <Hero onBrowse={handleBrowse} />
          <CategoryGrid onSelect={handleCategoryChange} />
        </>
      )}

      <div ref={petsRef}>
        <PetList
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          onAddToCart={handleAddToCart}
        />
      </div>

      <Footer />

      <CartSidebar
        items={cartItems}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={handleRemoveFromCart}
      />
    </>
  );
}
