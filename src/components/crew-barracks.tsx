'use client'

import { CrewInfo } from "@/types/crew-info";
import { useState } from "react";

export default function CrewBarracks(props: CrewInfo) {
  const [crewRoster, setCrewRoster] = useState(props.shipCrew)

  const addCrewMember = () =>{
    setCrewRoster(crewRoster) // append new crewMember to roster
  }

  return (
    <div>
      <h2>Crew Roster</h2>
      <ul>
        {crewRoster.map((crewMate) => (
          <li key={crewMate.id}>
            <h3>{crewMate.name}</h3>
            <p>{JSON.stringify(crewMate.stats)}</p>
            <p>{crewMate.position}</p>
          </li>
        ))}
      </ul>
      <button onClick={addCrewMember}>Add Mate</button>
    </div>
  )
}