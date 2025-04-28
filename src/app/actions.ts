'use server'

import fs from 'fs/promises'
import path from 'path'
import { CrewInfo } from "@/types/crew-info";

export async function updateData(toSave: CrewInfo) {
  const filePath = path.join(process.cwd(), 'src/data/database.json')
  try {
    console.log(JSON.stringify(toSave))
    await fs.writeFile(filePath, JSON.stringify(toSave))
  } catch (error) {
    console.error('An error occurred:', error)
  }
}