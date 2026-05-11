import { ShoppingCart } from 'lucide-react';

export default function PetCard({ pet, onAddToCart }) {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} className="pet-image" loading="lazy" />
      <div className="pet-info">
        <div className="pet-header">
          <span className="pet-name">{pet.name}</span>
          <span className="pet-price">${pet.price}</span>
        </div>
        <div className="pet-breed">{pet.breed}</div>
        <div className="pet-age">{pet.age} old</div>
        <p className="pet-description">{pet.description}</p>
        <div className="pet-footer">
          <span className={`pet-status ${pet.status}`}>{pet.status}</span>
          <button
            className="add-to-cart-btn"
            onClick={() => onAddToCart(pet)}
            disabled={pet.status !== 'available'}
          >
            <ShoppingCart size={14} />
            {pet.status === 'available' ? 'Adopt Me' : 'Pending'}
          </button>
        </div>
      </div>
    </div>
  );
}
