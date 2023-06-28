// Your code goes here

module.exports = {
  // Uncomment these as you write them
  getItemById,
  buildTransactions,
  getTransactionsByItemDescription
};

function getItemById(items, id) {
  return items.find((item) => {
    return item.id === id;
  });
}

function buildTransactions(sales, items) {
  return sales.map((sale) => {
    const item = getItemById(items, sale.itemId);
    return {
      itemId: sale.itemId,
      description: item.description,
      price: item.price,
      quantity: sale.quantity,
    };
  });
}

function getTransactionsByItemDescription(transactions, description){
    return transactions.filter((transaction) => {
        return transaction.description === description;
    });
}
