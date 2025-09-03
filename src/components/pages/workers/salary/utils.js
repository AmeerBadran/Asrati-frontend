export function calculateHours(start, end) {
  const diffMs = new Date(end) - new Date(start);
  return diffMs > 0 ? diffMs / (1000 * 60 * 60) : 0;
}

export function formatDateTime(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleString();
}
