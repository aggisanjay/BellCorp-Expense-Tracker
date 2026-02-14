import { Filter, X } from 'lucide-react';
import { useState } from 'react';

const CATEGORIES = [
  'All',
  'Food',
  'Transportation',
  'Entertainment',
  'Shopping',
  'Bills',
  'Health',
  'Education',
  'Travel',
  'Other',
];

const TransactionFilters = ({ filters, onFilterChange }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleReset = () => {
    onFilterChange({
      category: 'All',
      startDate: '',
      endDate: '',
      minAmount: '',
      maxAmount: '',
      sortBy: 'date',
      sortOrder: 'desc',
    });
  };

  const hasActiveFilters = 
    filters.category !== 'All' ||
    filters.startDate ||
    filters.endDate ||
    filters.minAmount ||
    filters.maxAmount;

  return (
    <div className="filters-container">
      <button
        className="btn btn-secondary filters-toggle"
        onClick={() => setShowFilters(!showFilters)}
      >
        <Filter size={18} />
        Filters
        {hasActiveFilters && <span className="filter-badge">Active</span>}
      </button>

      {showFilters && (
        <div className="filters-panel">
          <div className="filters-grid">
            <div className="input-group">
              <label>Category</label>
              <select
                value={filters.category}
                onChange={(e) => onFilterChange({ category: e.target.value })}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>Start Date</label>
              <input
                type="date"
                value={filters.startDate}
                onChange={(e) => onFilterChange({ startDate: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label>End Date</label>
              <input
                type="date"
                value={filters.endDate}
                onChange={(e) => onFilterChange({ endDate: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label>Min Amount</label>
              <input
                type="number"
                placeholder="0.00"
                value={filters.minAmount}
                onChange={(e) => onFilterChange({ minAmount: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label>Max Amount</label>
              <input
                type="number"
                placeholder="1000.00"
                value={filters.maxAmount}
                onChange={(e) => onFilterChange({ maxAmount: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label>Sort By</label>
              <select
                value={filters.sortBy}
                onChange={(e) => onFilterChange({ sortBy: e.target.value })}
              >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
                <option value="title">Title</option>
              </select>
            </div>

            <div className="input-group">
              <label>Sort Order</label>
              <select
                value={filters.sortOrder}
                onChange={(e) => onFilterChange({ sortOrder: e.target.value })}
              >
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
              </select>
            </div>
          </div>

          {hasActiveFilters && (
            <button className="btn btn-secondary reset-btn" onClick={handleReset}>
              <X size={18} />
              Reset Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionFilters;