export interface CrewMember {
  id: number,
  crew_name: string,
  name: string,
  stats: {
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number
  },
  position: string
}