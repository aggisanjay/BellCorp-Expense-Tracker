import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../../utils/api';
import ExpenseSummary from './ExpenseSummary';
import CategoryBreakdown from './CategoryBreakdown';
import toast from 'react-hot-toast';
import { TrendingUp, IndianRupee, Activity } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data } = await api.get('/transactions/stats');
      setStats(data);
    } catch (error) {
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <motion.div
        className="dashboard-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="dashboard-title">
          <TrendingUp size={40} strokeWidth={2.5} />
          Dashboard
        </h1>
        <p className="dashboard-subtitle">Track your expenses and manage your finances</p>
      </motion.div>

      <div className="dashboard-grid">
        <motion.div
          className="stat-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="stat-icon" style={{ background: 'var(--gradient-1)' }}>
            <IndianRupee size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Expenses</p>
            <h2 className="stat-value">₹{stats?.totalExpenses?.toFixed(2) || '0.00'}</h2>
          </div>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="stat-icon" style={{ background: 'var(--gradient-2)' }}>
            <Activity size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Transactions</p>
            <h2 className="stat-value">
              {stats?.recentTransactions?.length || 0}
            </h2>
          </div>
        </motion.div>
      </div>

      <div className="dashboard-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CategoryBreakdown data={stats?.categoryBreakdown || []} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ExpenseSummary transactions={stats?.recentTransactions || []} />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;