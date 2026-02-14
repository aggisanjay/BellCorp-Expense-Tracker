import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../utils/api';
import TransactionFilters from './TransactionFilters';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import toast from 'react-hot-toast';
import { Plus, Search, X } from 'lucide-react';
import './Transactions.css';

const TransactionExplorer = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editTransaction, setEditTransaction] = useState(null);
  const [searchInput, setSearchInput] = useState(''); // Local input state
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalTransactions: 0,
  });

  const [filters, setFilters] = useState({
    search: '',
    category: 'All',
    startDate: '',
    endDate: '',
    minAmount: '',
    maxAmount: '',
    sortBy: 'date',
    sortOrder: 'desc',
    page: 1,
    limit: 10,
  });

  // Debounce timer ref
  const debounceTimer = useRef(null);

  // Debounced search function
  const debouncedSearch = useCallback((searchValue) => {
    // Clear existing timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set new timer
    debounceTimer.current = setTimeout(() => {
      setFilters(prev => ({ ...prev, search: searchValue, page: 1 }));
    }, 500); // 500ms delay
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    debouncedSearch(value);
  };

  // Clear search
  const handleClearSearch = () => {
    setSearchInput('');
    setFilters(prev => ({ ...prev, search: '', page: 1 }));
  };

  useEffect(() => {
    fetchTransactions();
  }, [filters]);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      Object.keys(filters).forEach((key) => {
        if (filters[key] && filters[key] !== 'All') {
          params.append(key, filters[key]);
        }
      });

      const { data } = await api.get(`/transactions?${params}`);
      setTransactions(data.transactions);
      setPagination({
        currentPage: data.currentPage,
        totalPages: data.totalPages,
        totalTransactions: data.totalTransactions,
      });
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error('Failed to load transactions');
      setTransactions([]); // Clear transactions on error
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters, page: 1 });
  };

  const handlePageChange = (page) => {
    setFilters({ ...filters, page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEdit = (transaction) => {
    setEditTransaction(transaction);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      try {
        await api.delete(`/transactions/${id}`);
        toast.success('Transaction deleted successfully');
        fetchTransactions();
      } catch (error) {
        toast.error('Failed to delete transaction');
      }
    }
  };

  const handleFormSubmit = () => {
    setShowForm(false);
    setEditTransaction(null);
    fetchTransactions();
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditTransaction(null);
  };

  return (
    <div className="transactions-container">
      <div className="transactions-header">
        <div>
          <h1 className="transactions-title">Transaction Explorer</h1>
          <p className="transactions-subtitle">
            Manage and track all your expenses in one place
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          <Plus size={20} />
          Add Transaction
        </button>
      </div>

      <div className="search-bar">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search transactions..."
          value={searchInput}
          onChange={handleSearchChange}
          className="search-input"
        />
        {searchInput && (
          <button 
            className="search-clear-btn" 
            onClick={handleClearSearch}
            title="Clear search"
          >
            <X size={18} />
          </button>
        )}
        {searchInput && (
          <span className="search-status">
            {loading ? 'Searching...' : `Found ${pagination.totalTransactions} results`}
          </span>
        )}
      </div>

      <TransactionFilters filters={filters} onFilterChange={handleFilterChange} />

      {loading ? (
        <div className="loading-container">
          
          <p className="loading-text">Loading transactions...</p>
        </div>
      ) : (
        <>
          <TransactionList
            transactions={transactions}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

          {pagination.totalPages > 1 && (
            <div className="pagination">
              <button
                className="btn btn-secondary"
                disabled={pagination.currentPage === 1}
                onClick={() => handlePageChange(pagination.currentPage - 1)}
              >
                Previous
              </button>
              <span className="pagination-info">
                Page {pagination.currentPage} of {pagination.totalPages} ({pagination.totalTransactions} total)
              </span>
              <button
                className="btn btn-secondary"
                disabled={pagination.currentPage === pagination.totalPages}
                onClick={() => handlePageChange(pagination.currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      <AnimatePresence>
        {showForm && (
          <TransactionForm
            transaction={editTransaction}
            onSubmit={handleFormSubmit}
            onClose={handleFormClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TransactionExplorer;
