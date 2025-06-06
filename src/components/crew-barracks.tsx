'use client'

import { CrewMember } from "@/types/crew-member";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { insertData } from "lib/actions";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CrewBarracks({props}: {props: CrewMember[]}) {
  console.log(props)
  const [crewRoster, setCrewRoster] = useState<CrewMember[]>(props)
  const [newCrewStats, setNewCrewStats] = useState({
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
  })
  const [newCrew, setNewCrew] = useState<CrewMember>({
    id: 0,
    crew_name: "Bethany's Revenge",
    name: '',
    stats: {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0
    },
    position: ''

  })
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormChange = (event: { target: { value: string; name: string; }; }) => {
    const name = event.target.name
    const val = event.target.value
    setNewCrew({...newCrew, [name]: val})
  }

  const handleStatsFormChange = (event: { target: { name: string; value: string; }; }) => {
    const name = event.target.name
    const val = parseInt(event.target.value)
    console.log(name)
    console.log(val)
    setNewCrewStats({...newCrewStats, [name]: (isNaN(val) ? 0 : val)})
  }

  const addCrewMember = () => {
    const newCrewMate: CrewMember = {...newCrew, id: (crewRoster.length + 1), stats: newCrewStats}
    setNewCrew(newCrewMate)
    setCrewRoster([...crewRoster, newCrewMate])
    const tableName = 'crew_roster'
    const toInsert = newCrewMate
    const key = 'id'
    const val = newCrewMate.id
    insertData(tableName, toInsert, key, val)
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
      <button onClick={handleOpen}>Add Mate</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Ship Mate
          </Typography>
          <Typography id="modal-modal-add-name" sx={{ mt: 2 }}>
            Name: <input name="name" value={newCrew.name} onChange={handleFormChange}/>
          </Typography>
          <Typography component={'span'} id="modal-modal-add-stats" sx={{ mt: 2 }}>
            Stats:
            <ul>
              <li>Str: <input name="str" value={newCrewStats.str} onChange={handleStatsFormChange}/></li>
              <li>Dex: <input name="dex" value={newCrewStats.dex} onChange={handleStatsFormChange}/></li>
              <li>Con: <input name="con" value={newCrewStats.con} onChange={handleStatsFormChange}/></li>
              <li>Int: <input name="int" value={newCrewStats.int} onChange={handleStatsFormChange}/></li>
              <li>Wis: <input name="wis" value={newCrewStats.wis} onChange={handleStatsFormChange}/></li>
              <li>Cha: <input name="cha" value={newCrewStats.cha} onChange={handleStatsFormChange}/></li>
            </ul>
          </Typography>
          <Typography id="modal-modal-add-position" sx={{ mt: 2 }}>
            Position: <input name="position" value={newCrew.position} onChange={handleFormChange}/>
          </Typography>
          <Button onClick={addCrewMember}>Add</Button>
        </Box>
      </Modal>
    </div>
  )
}