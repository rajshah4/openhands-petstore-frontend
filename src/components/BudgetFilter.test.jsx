import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BudgetFilter from './BudgetFilter';

describe('BudgetFilter', () => {
  it('renders the label and input controls', () => {
    render(<BudgetFilter maxBudget={null} onChange={() => {}} maxPrice={1500} />);
    expect(screen.getByText('Max Adoption Fee')).toBeInTheDocument();
    expect(screen.getByLabelText('Maximum adoption fee in dollars')).toBeInTheDocument();
    expect(screen.getByLabelText('Maximum adoption fee slider')).toBeInTheDocument();
  });

  it('shows preset buttons including All', () => {
    render(<BudgetFilter maxBudget={null} onChange={() => {}} maxPrice={1500} />);
    expect(screen.getByRole('button', { name: '$100' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '$500' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '$1000' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
  });

  it('calls onChange with the chosen preset value', () => {
    const onChange = vi.fn();
    render(<BudgetFilter maxBudget={null} onChange={onChange} maxPrice={1500} />);
    fireEvent.click(screen.getByRole('button', { name: '$500' }));
    expect(onChange).toHaveBeenCalledWith(500);
  });

  it('calls onChange with null when All preset clicked', () => {
    const onChange = vi.fn();
    render(<BudgetFilter maxBudget={500} onChange={onChange} maxPrice={1500} />);
    fireEvent.click(screen.getByRole('button', { name: 'All' }));
    expect(onChange).toHaveBeenCalledWith(null);
  });

  it('calls onChange with a number when typing in the input', () => {
    const onChange = vi.fn();
    render(<BudgetFilter maxBudget={null} onChange={onChange} maxPrice={1500} />);
    const input = screen.getByLabelText('Maximum adoption fee in dollars');
    fireEvent.change(input, { target: { value: '300' } });
    expect(onChange).toHaveBeenCalledWith(300);
  });

  it('calls onChange with null when the input is cleared', () => {
    const onChange = vi.fn();
    render(<BudgetFilter maxBudget={300} onChange={onChange} maxPrice={1500} />);
    const input = screen.getByLabelText('Maximum adoption fee in dollars');
    fireEvent.change(input, { target: { value: '' } });
    expect(onChange).toHaveBeenCalledWith(null);
  });

  it('reflects the current maxBudget in the number input', () => {
    render(<BudgetFilter maxBudget={450} onChange={() => {}} maxPrice={1500} />);
    expect(screen.getByLabelText('Maximum adoption fee in dollars')).toHaveValue(450);
  });

  it('marks the active preset button', () => {
    render(<BudgetFilter maxBudget={500} onChange={() => {}} maxPrice={1500} />);
    const activeBtn = screen.getByRole('button', { name: '$500' });
    expect(activeBtn).toHaveClass('active');
  });

  it('marks the All button active when no budget is set', () => {
    render(<BudgetFilter maxBudget={null} onChange={() => {}} maxPrice={1500} />);
    expect(screen.getByRole('button', { name: 'All' })).toHaveClass('active');
  });
});
