'use client'

import { supabase } from 'lib/supabase-client'

import { useEffect, useState } from 'react'

export default function GoldStash() {
  const [gold, setGold] = useState(0)
  const [changeValue, setChangeValue] = useState(0)

  async function updateData() {
    const { data, error } = await supabase
      .from('ship_info')
      .update({crew_gold: gold})
      .eq('id', 1) // not programmatic atm

      console.log('are we doing this right?')
    if (error) {
      console.error('Error updating data for ship_info table:', error)
      return []
    }
    return data
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('ship_info')
        .select()
        .eq('crew_name', "Bethany's Revenge") // not programmatic atm
      if (data) {
        setGold(data.at(0).crew_gold)
      }
      if (error) {
        console.error('Error fetching from ship_info table:', error)
        return []
      }
      return data
    }

    fetchData()
  }, [])

  useEffect(() => {
    console.log("mutate row")
    updateData()
  }, [gold])

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