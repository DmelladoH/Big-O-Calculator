import { BIG_O_URL } from '../settings'

export async function getBigO ({ code }: { code: string }) {
  const url = `${BIG_O_URL}/api/getBigO`
  const req: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ code })
  }

  return await fetch(url, req).then(async res => await res.json())
}
