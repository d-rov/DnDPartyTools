export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      ship_info: {
        Row: {
          // the data expected from .select()
          id: number
          crew_name: string
          crew_gold: number
          ship_name: string
          ship_type: string
        }
        Update: {
          // the data to be passed to .update()
          crew_name: string
          crew_gold: number
        }
      }
      crew_roster: {
        Row: {
          id: number
          crew_name: string
          name: string
          stats: Json
          description: string
        }
        Insert: {
          id: number
          crew_name: string
          name: string
          stats: Json
          description: string
        }
      }
    }
  }
}