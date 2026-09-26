function getInventoryStatus(quantity) {
  if (!Number.isInteger(quantity) || quantity < 0) {
    throw new RangeError('Quantity must be a non-negative integer.');
  }

  if (quantity === 0) return 'out_of_stock';
  if (quantity <= 4) return 'low_stock';
  return 'available';
}

module.exports = { getInventoryStatus };
