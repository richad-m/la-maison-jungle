function CareScale(scaleValue, careType) {
  const range = [1,2,3]
  const scaleType = careType === "water" ? '💧' : '☀'
  return (
    <div>
      {range.map((nb) => (
        scaleValue >= nb ? <span key={nb.toString()}> {scaleType}</span> : null
      )
      )
      }
      </div>
  )}

// function handleClick() {
//   alert("tu cliques sur carescale là")
// }

export default CareScale;