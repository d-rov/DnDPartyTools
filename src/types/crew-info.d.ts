import { CrewMember } from "./crew-member";

export interface CrewInfo {
  ship_crew: CrewMember[],
  ship_pets: object,
  ship_loot: object
}