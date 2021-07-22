import { plantList } from "../datas/plantList";

function ShoppingList() {

  const categories = plantList.reduce((acc, plant) => 
    acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  )

  return (
    <div className = "shopping-list">
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul>
        {plantList.map((plant) => (
          <li key={plant.id} className = "plant-card">{plant.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList;