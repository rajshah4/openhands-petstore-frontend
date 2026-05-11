export default function CartSidebar({ items, isOpen, onClose, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>🛒 Your Cart</h2>
          <button className="cart-close" onClick={onClose}>×</button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <p className="cart-empty">Your cart is empty.<br />Start browsing to find your new best friend!</p>
          ) : (
            items.map((item, i) => (
              <div key={`${item.id}-${i}`} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-breed">{item.breed}</div>
                  <div className="cart-item-price">${item.price}</div>
                </div>
                <button className="cart-remove" onClick={() => onRemove(i)}>Remove</button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <button className="checkout-btn">Proceed to Adoption</button>
          </div>
        )}
      </div>
    </>
  );
}
