'use client'

import { useEffect, useState } from 'react'
import { updateData } from 'lib/actions'
import { ShipInfo } from '@/types/ship-info'

export default function GoldStash({props}: {props: ShipInfo}) {
  const [gold, setGold] = useState(props.crew_gold)
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
    console.log("mutate row")
    const tableName = 'ship_info'
    const toUpdate = {'crew_gold': gold}
    const key = 'crew_name'
    const val = "Bethany's Revenge"
    updateData(tableName, toUpdate, key, val)
  }, [gold])

  return (
    <div>
      <p>Gold: {gold}</p>
      <button onClick={decrementGold}>-</button>
      <input
        name="gold"
        value={changeValue}
        onChange={handleValueChange}
      />
      <button onClick={incrementGold}>+</button>
    </div>
  )
}