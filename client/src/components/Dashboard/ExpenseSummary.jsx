import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const ExpenseSummary = ({ transactions }) => {
  return (
    <div className="card summary-card">
      <div className="card-header">
        <h2 className="card-title">Recent Transactions</h2>
        <Link to="/transactions" className="view-all-link">
          View All <ArrowRight size={16} />
        </Link>
      </div>

      {transactions.length === 0 ? (
        <div className="empty-state">
          <p>No transactions yet</p>
          <Link to="/transactions" className="btn btn-primary btn-sm">
            Add Your First Transaction
          </Link>
        </div>
      ) : (
        <div className="transaction-list">
          {transactions.map((transaction) => (
            <div key={transaction._id} className="transaction-item">
              <div className="transaction-info">
                <h3 className="transaction-title">{transaction.title}</h3>
                <div className="transaction-meta">
                  <span className="meta-item">
                    <Tag size={14} />
                    {transaction.category}
                  </span>
                  <span className="meta-item">
                    <Calendar size={14} />
                    {format(new Date(transaction.date), 'MMM dd, yyyy')}
                  </span>
                </div>
              </div>
              <div className="transaction-amount">
                ₹{transaction.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpenseSummary;