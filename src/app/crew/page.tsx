import Link from 'next/link'
import shipData from '@/data/database.json'
import React from 'react'
import GoldStash from '@/components/gold-stash'
import CrewBarracks from '@/components/crew-barracks'

export default function Page() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Crew Info</h1>
        <h2>{shipData.crewName}</h2>
        <GoldStash {...shipData}/>
        <CrewBarracks {...shipData}/>
    </div>
  )
}