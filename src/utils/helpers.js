export const formatCurrency = (amount) => {
  if (amount >= 1000000000) {
    return `₹${(amount / 1000000000).toFixed(1)}B`;
  } else if (amount >= 1000000) {
    return `₹${(amount / 1000000).toFixed(1)}M`;
  }
  return `₹${amount.toLocaleString("en-IN")}`;
};

export const calculatePercentage = (spent, budget) => {
  return ((spent / budget) * 100).toFixed(1);
};

export const getStatusColor = (percentage) => {
  if (percentage >= 90) return 'danger';
  if (percentage >= 75) return 'warning';
  return 'success';
};

export const getPriorityBadge = (priority) => {
  const colors = {
    'Critical': 'badge-danger',
    'High': 'badge-warning',
    'Medium': 'badge-info',
    'Low': 'badge-success'
  };
  return colors[priority] || 'badge-info';
};