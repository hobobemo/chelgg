import { ref as dbRef, get, set, push, remove, update, } from 'firebase/database'
import { ref as storageRef, getDownloadURL } from 'firebase/storage'

export const useFirebase = () => {
  const { $firebase } = useNuxtApp()
  return {
      rtdb: $firebase.rtdb,
      storage: $firebase.storage
  }
}

export async function getData(url: string){
  const { rtdb } = useFirebase();
  const ref = dbRef(rtdb, url);
  const snapshot = await get(ref);
  
  if (snapshot.exists()) {
    return snapshot.val()
  } else {
    console.log('No data available')
    return null
  }
}

export async function postData(name: string, url: string, data: any) {
  const { rtdb } = useFirebase()
  const ref = dbRef(rtdb, url)

  try {
    await set(ref, data)
    return {status: 1, message: `${name} posted successfully`};
  } catch (error) {
    return {status: 0, message: `Error posting ${name}:, ${error}`};
  }
}

export async function pushData(name: string, url: string, data: any) {
  const { rtdb } = useFirebase()
  const ref = dbRef(rtdb, url)

  try {
    await push(ref, data)
    return {status: 1, message: `${name} posted successfully`};
  } catch (error) {
    return {status: 0, message: `Error posting ${name}:, ${error}`};
  }
}

export async function updateData(name: string, url: string, data: any) {
  const { rtdb } = useFirebase()
  const ref = dbRef(rtdb, url)

  try {
    await update(ref, data)
    return { status: 1, message: `${name} updated successfully` }
  } catch (error) {
    return { status: 0, message: `Error updating ${name}: ${error}` }
  }
}

export async function deleteData(name: string, url: string) {
  const { rtdb } = useFirebase()
  const ref = dbRef(rtdb, url)

  try {
    await remove(ref)
    return { status: 1, message: `${name} deleted successfully` }
  } catch (error) {
    return { status: 0, message: `Error deleting ${name}: ${error}` }
  }
}

export async function moveData(name: string, fromUrl: string, toUrl: string) {
  const { rtdb } = useFirebase()
  
  const fromRef = dbRef(rtdb, fromUrl)
  const snapshot = await get(fromRef)

  if (!snapshot.exists()) {
    return { status: 0, message: `${name} not found at ${fromUrl}` }
  }

  const data = snapshot.val()

  const updates: Record<string, any> = {
    [toUrl]: data,
    [fromUrl]: null // delete the old path
  }

  try {
    await update(dbRef(rtdb), updates)
    return { status: 1, message: `${name} moved from ${fromUrl} to ${toUrl}` }
  } catch (error) {
    return { status: 0, message: `Error moving ${name}: ${error}` }
  }
}

export async function getStorageUrl(path: string) {
  const { storage } = useFirebase()

  if (!path || path.trim() === '') {
    throw new Error('getStorageUrl: path must not be empty')
  }

  const fileRef = storageRef(storage, path)
  return await getDownloadURL(fileRef)
}