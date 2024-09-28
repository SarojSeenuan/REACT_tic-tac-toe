import { useState } from 'react'

export default function Player({
  initialname,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialname)
  const [isEditing, setIsEditing] = useState(false)

  function handleEditOnClick() {
    // setIsEditing(!isEditing); NOT GOOD
    setIsEditing((editing) => !editing)
    if (isEditing) {
      onChangeName(symbol, playerName)
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    )
    // btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditOnClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
