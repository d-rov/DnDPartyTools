'use client'

import { useEffect, useState } from 'react'
import { updateData } from '@/app/actions'
import { CrewInfo } from '@/types/crew-info'

export default function GoldStash(props: CrewInfo) {
  const [gold, setGold] = useState(props.crewGold)
  const [changeValue, setChangeValue] = useState(0)

  const incrementGold = () => {
    setGold(gold + changeValue)
  }

  const decrementGold = () => {
    setGold(gold - changeValue)
  }

  const handleValueChange = (event: { target: { value: string } }) => {
    const val = parseInt(event.target.value)
    setChangeValue(isNaN(val) ? 0 : val)
  }

  useEffect(() => {
    const saveInfo: CrewInfo = {...props}
    saveInfo.crewGold = gold
    // console.log(saveInfo)
    updateData(saveInfo)
  }, [gold])

  return (
    <div>
      <p>Gold: {gold}</p>
      <button onClick={decrementGold}>-</button>
      <input
        value={changeValue}
        onChange={handleValueChange}
      />
      <button onClick={incrementGold}>+</button>
    </div>
  )
}