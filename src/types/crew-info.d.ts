import { CrewMember } from "./crew-member";

export interface CrewInfo {
  crewName: string,
  crewGold: number,
  shipName: string,
  shipType: string,
  shipCrew: CrewMember[],
  shipPets: object,
  shipLoot: object
}