import Link from 'next/link'
import React from 'react'
import GoldStash from '@/components/gold-stash'
import CrewBarracks from '@/components/crew-barracks'

export default function Page() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Crew Info</h1>
        <h2>Bethany's Revenge</h2>
        <GoldStash />
        <CrewBarracks />
    </div>
  )
}