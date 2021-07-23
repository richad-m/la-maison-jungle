import { plantList } from '../datas/plantList'
function Categories({category, updateCategory}) {


  const categories = plantList.reduce(
    (acc, elem) =>
        acc.includes(elem.category) ? acc : acc.concat(elem.category),
        []
)
    return(
      <select name="Category" id="plant-category" onChange={(e)=>updateCategory(e.target.value)}>
        <option value='toutes les catégories'>Toutes les catégories</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    )

}

export default Categories;