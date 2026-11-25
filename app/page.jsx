import { connection } from 'next/server'

export default async function PageA() {
  await connection()
  await new Promise(resolve => setTimeout(resolve, 5000))
  return <>
    <h1>Root Page</h1>
    <div>This content should be shown only when the pathname is "/".</div>
    <div>It is a bug if this is the content that is showing while the pathname is "/b".</div>
  </>
}
