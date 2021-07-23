import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'

function ShoppingList({ cart, updateCart, category, updateCategory}) {
  
    const plantListcateg = category === "Toutes les catégories" ? plantList : plantList.filter(plant => plant.category === category)
    return (
      <div className="lmj-shopping-list">
      <div className="category-plant">
        <Categories category={category} updateCategory={updateCategory}/>
        <button onClick={() => updateCategory('Toutes les catégories')}>Réinitialiser les filtres</button>
      </div>
            <ul className='lmj-plant-list'>
                {plantListcateg.map(({ id, cover, name, water, light }) => (
                    <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} />
                        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}
export default ShoppingList