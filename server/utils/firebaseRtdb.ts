// server/utils/firebaseRtdb.ts
import { ref, set, get, update, remove, push } from 'firebase/database';
import { rtdb } from './firebaseServer';

export async function serverPostData(url: string, data: any) {
  const dbRef = ref(rtdb, url);
  await set(dbRef, data);
}

export async function serverUpdateData(url: string, data: any) {
  const dbRef = ref(rtdb, url);
  await update(dbRef, data);
}

export async function serverGetData(url: string) {
  const dbRef = ref(rtdb, url);
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    return snapshot.val();
  }
  return null;
}

export async function serverPushData(url: string, data: any) {
  const dbRef = ref(rtdb, url);
  await push(dbRef, data);
}