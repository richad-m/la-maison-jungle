import monstera from '../assets/monstera.jpg'
import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(name) {
  console.log(`t'as cliqué batard sur ${name}`)
}

function PlantItem(props) {
  return (
    <div className = "lmj-plant-item" onClick = {() => handleClick(props.name)}>
      <img src={monstera} alt="" className="lmj-plant-item-cover" />
      {props.name}
      <CareScale careType = 'light' ScaleValue = {props.light}/>
      <CareScale careType = 'water' ScaleValue = {props.water}/>
    </div>
  )
}

export default PlantItem;