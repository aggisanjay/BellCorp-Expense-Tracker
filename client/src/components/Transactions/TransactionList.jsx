import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Edit2, Trash2, Calendar, Tag, FileText } from 'lucide-react';

const TransactionList = ({ transactions, onEdit, onDelete }) => {
  if (transactions.length === 0) {
    return (
      <div className="empty-transactions">
        <div className="empty-icon">
          <FileText size={64} />
        </div>
        <h3>No transactions found</h3>
        <p>Try adjusting your filters or add a new transaction</p>
      </div>
    );
  }

  return (
    <div className="transaction-grid">
      {transactions.map((transaction, index) => (
        <motion.div
          key={transaction._id}
          className="transaction-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <div className="transaction-card-header">
            <h3 className="transaction-card-title">{transaction.title}</h3>
            <div className="transaction-card-actions">
              <button
                className="icon-btn edit-btn"
                onClick={() => onEdit(transaction)}
                title="Edit"
              >
                <Edit2 size={18} />
              </button>
              <button
                className="icon-btn delete-btn"
                onClick={() => onDelete(transaction._id)}
                title="Delete"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          <div className="transaction-card-amount">₹{transaction.amount.toFixed(2)}</div>

          <div className="transaction-card-details">
            <div className="detail-item">
              <Tag size={16} />
              <span className="category-badge">{transaction.category}</span>
            </div>
            <div className="detail-item">
              <Calendar size={16} />
              <span>{format(new Date(transaction.date), 'MMM dd, yyyy')}</span>
            </div>
          </div>

          {transaction.notes && (
            <div className="transaction-card-notes">
              <p>{transaction.notes}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default TransactionList;