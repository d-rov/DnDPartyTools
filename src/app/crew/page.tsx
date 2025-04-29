import { supabase } from 'lib/supabase-client'

import Link from 'next/link'
import React from 'react'
import GoldStash from '@/components/gold-stash'
import CrewBarracks from '@/components/crew-barracks'

export default async function Page() {
  const shipInfo = await supabase
    .from('ship_info')
    .select()
    .eq('crew_name', "Bethany's Revenge")

  const crewRoster = await supabase
    .from('crew_roster')
    .select('*')

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Crew Info</h1>
        <h2>Bethany&apos;s Revenge</h2>
        <GoldStash props={shipInfo} />
        <CrewBarracks props={crewRoster} />
    </div>
  )
}