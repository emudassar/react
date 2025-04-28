
const FoodMenu = () => {

    const foods = [
        {id: 1, name: 'Pizza'},
        {id: 2, name: 'Shawarma'},
        {id: 3, name: 'Burger'},
        {id: 4, name: 'Wings'}
    ]

  return (
    <div className="container">
        <h1>Foods</h1>
        {foods.map((food) => (
            <p key={food.id}>Food: {food.name}</p>          
        ))}
    </div>
  )
}

export default FoodMenu
