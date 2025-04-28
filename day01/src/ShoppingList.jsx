
const ShoppingList = () => {

    const shoppingItems = [
        {id: 1, item: 'Milk', quantity: 2},
        {id: 2, item: 'Powder', quantity: 3},
        {id: 3, item: 'Potato', quantity: 5},
        {id: 4, item: 'Sugar', quantity: 2},
        {id: 5, item: 'Biscuit', quantity: 3}
    ]

  return (
    <div className="container">
        <h1>Shopping List</h1>
        {shoppingItems.map((item) => (
            <p key={item.id}>Item: {item.item}, Quantity: {item.quantity}</p>
        ))}
    </div>
  )
}

export default ShoppingList
