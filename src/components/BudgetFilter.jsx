/**
 * BudgetFilter lets families set a maximum adoption fee so they can find
 * pets that fit their budget before visiting the shelter.
 *
 * The value is null when no budget cap is applied (show all pets).
 */
export default function BudgetFilter({ maxBudget, onChange, maxPrice }) {
  const cap = maxPrice ?? 1500;
  const isCapped = maxBudget != null;
  const sliderValue = isCapped ? maxBudget : cap;

  return (
    <div className="budget-filter" role="group" aria-label="Filter by adoption fee budget">
      <label htmlFor="budget-input" className="budget-label">
        Max Adoption Fee
      </label>
      <div className="budget-controls">
        <input
          id="budget-input"
          className="budget-input"
          type="number"
          min={0}
          max={cap}
          step={5}
          value={isCapped ? maxBudget : ''}
          placeholder="No limit"
          aria-label="Maximum adoption fee in dollars"
          onChange={(e) => {
            const raw = e.target.value;
            if (raw === '') {
              onChange(null);
              return;
            }
            const num = Number(raw);
            onChange(Number.isFinite(num) && num >= 0 ? num : null);
          }}
        />
        <input
          className="budget-slider"
          type="range"
          min={0}
          max={cap}
          step={5}
          value={sliderValue}
          aria-label="Maximum adoption fee slider"
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
      <div className="budget-presets">
        {[
          { label: '$100', value: 100 },
          { label: '$500', value: 500 },
          { label: '$1000', value: 1000 },
          { label: 'All', value: null },
        ].map((preset) => (
          <button
            key={String(preset.value)}
            type="button"
            className={`filter-btn budget-preset ${
              (preset.value === maxBudget) || (preset.value === null && !isCapped) ? 'active' : ''
            }`}
            onClick={() => onChange(preset.value)}
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
}
