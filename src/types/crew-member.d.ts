export interface CrewMember {
  id: number,
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