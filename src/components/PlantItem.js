import monstera from '../assets/monstera.jpg'
import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(name) {
  alert(`${name} ? très bon choix`)
}

function PlantItem(props) {
  return (
    <div className = "lmj-plant-item" onClick = {() => handleClick(props.name)}>
      <img src={monstera} alt="" className="lmj-plant-item-cover" />
      {props.name}
      <CareScale careType = 'light' scaleValue = {props.light}/>
      <CareScale careType = 'water' scaleValue = {props.water}/>
    </div>
  )
}

export default PlantItem;