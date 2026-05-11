import { Heart } from 'lucide-react';

export default function Hero({ onBrowse }) {
  return (
    <section className="hero">
      <div className="container">
        <h1>Find Your Perfect<br />Furry Friend</h1>
        <p>
          Browse our lovingly curated collection of pets looking for their forever homes.
          Every adoption makes a difference.
        </p>
        <button className="hero-cta" onClick={onBrowse}>
          <Heart size={20} />
          Browse Pets
        </button>
      </div>
    </section>
  );
}
