'use server'

import { revalidatePath } from "next/cache"
import { supabase } from "./supabase-client"

export async function insertData(tableName: string, toInsert: object, key: string, val: string | number) {
  const { data, error } = await supabase
    .from(tableName)
    .insert(toInsert)
    .eq(key, val)

    revalidatePath('@/app/crew') // need to update to add programmatic revalidation
  if (error) {
    console.error('Error inserting row:', error)
    return []
  }
  return data
}

export async function updateData(tableName: string, toUpdate: object, key: string, val: string | number) {
  const { data, error } = await supabase
    .from(tableName)
    .update(toUpdate)
    .eq(key, val)

    revalidatePath('@/app/crew/') // need to update to add programmatic revalidation
  if (error) {
    console.error('Error updating data:', error)
    return []
  }
  return data
}
