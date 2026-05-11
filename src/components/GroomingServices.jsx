import { useState } from 'react';
import { Scissors, Clock, Sparkles } from 'lucide-react';
import { groomingServices } from '../data/groomingServices';

const petTypeLabels = { dogs: '🐕 Dogs', cats: '🐈 Cats', birds: '🦜 Birds' };

export default function GroomingServices({ onBook }) {
  const [filter, setFilter] = useState('all');

  const filtered =
    filter === 'all'
      ? groomingServices
      : groomingServices.filter((s) => s.petTypes.includes(filter));

  return (
    <section className="grooming-section">
      <div className="container">
        <div className="grooming-header">
          <div className="grooming-badge">
            <Sparkles size={16} />
            New Service
          </div>
          <h2 className="section-title">Pet Grooming Services</h2>
          <p className="grooming-subtitle">
            Professional grooming to keep your furry, feathered, and scaly friends
            looking and feeling their best. Book online and skip the wait!
          </p>
        </div>

        <div className="filter-bar" style={{ justifyContent: 'center' }}>
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Pets
          </button>
          {Object.entries(petTypeLabels).map(([key, label]) => (
            <button
              key={key}
              className={`filter-btn ${filter === key ? 'active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grooming-grid">
          {filtered.map((service) => (
            <div
              key={service.id}
              className={`grooming-card ${service.popular ? 'popular' : ''}`}
            >
              {service.popular && (
                <div className="popular-tag">
                  <Sparkles size={12} /> Most Popular
                </div>
              )}
              <div className="grooming-icon">{service.icon}</div>
              <h3 className="grooming-name">{service.name}</h3>
              <p className="grooming-desc">{service.description}</p>
              <div className="grooming-meta">
                <span className="grooming-duration">
                  <Clock size={14} /> {service.duration}
                </span>
                <span className="grooming-pets">
                  {service.petTypes.map((t) => petTypeLabels[t]?.split(' ')[0]).join(' ')}
                </span>
              </div>
              <div className="grooming-footer">
                <span className="grooming-price">
                  ${service.price}
                </span>
                <button
                  className="book-btn"
                  onClick={() => onBook(service)}
                >
                  <Scissors size={14} />
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
