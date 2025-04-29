import { supabase } from 'lib/supabase-client'

import Link from 'next/link'
import GoldStash from '@/components/gold-stash'
import CrewBarracks from '@/components/crew-barracks'
import { ShipInfo } from '@/types/ship-info';
import { CrewMember } from '@/types/crew-member';

export default async function Page() {
  const shipInfo = await supabase
    .from('ship_info')
    .select()
    .eq('crew_name', "Bethany's Revenge")
    .overrideTypes<Array<ShipInfo>, {merge: false}>()

  const crewRoster = await supabase
    .from('crew_roster')
    .select('*')
    .overrideTypes<Array<CrewMember>>()

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Crew Info</h1>
        <h2>Bethany&apos;s Revenge</h2>
        <GoldStash props={shipInfo.data.at(0)} />
        <CrewBarracks props={crewRoster.data} />
    </div>
  )
}