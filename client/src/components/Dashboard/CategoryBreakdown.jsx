import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = [
  '#6366f1', // Indigo
  '#ec4899', // Pink
  '#14b8a6', // Teal
  '#f59e0b', // Amber
  '#ef4444', // Red
  '#8b5cf6', // Purple
  '#10b981', // Emerald
  '#f97316', // Orange
  '#06b6d4', // Cyan
];

const CategoryBreakdown = ({ data }) => {
  const chartData = data.map((item) => ({
    name: item._id,
    value: item.total,
    count: item.count,
  }));

  if (data.length === 0) {
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Category Breakdown</h2>
        </div>
        <div className="empty-state">
          <p>No data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Category Breakdown</h2>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `₹${value.toFixed(2)}`}
              contentStyle={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="category-list">
        {data.map((item, index) => (
          <div key={item._id} className="category-item">
            <div className="category-info">
              <span
                className="category-color"
                style={{ background: COLORS[index % COLORS.length] }}
              ></span>
              <span className="category-name">{item._id}</span>
            </div>
            <div className="category-stats">
              <span className="category-amount">₹{item.total.toFixed(2)}</span>
              <span className="category-count">{item.count} transactions</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBreakdown;