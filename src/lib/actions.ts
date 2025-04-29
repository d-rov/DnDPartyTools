'use server'

import { revalidatePath } from "next/cache"
import { supabase } from "./supabase-client"

export async function insertData() {

}

export async function updateData(tableName: string, toUpdate: object, key: string, val: any) {
  const { data, error } = await supabase
    .from(tableName)
    .update(toUpdate)
    .eq(key, val)

    revalidatePath('@/app/crew/')
  if (error) {
    console.error('Error updating data:', error)
    return []
  }
  return data
}
