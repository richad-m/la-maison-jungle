import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";

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
      <ul className = "plant-list-shop">
        {plantList.map((plant) => (
          <li key={plant.id}>
            <PlantItem name = {plant.name} id = {plant.id}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList;