import NotesItem from './notes-item'
import type { Database } from '../../../../database.types'

type Note = Database['public']['Tables']['notes']['Row']

async function fetchNotes() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const res = await fetch(`${process.env.url}/rest/v1/notes?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    // next: { revalidate: 10 },
    cache: 'no-store',
    // cache: 'force-cache',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }

  const notes: Note[] = await res.json()

  return notes
}

export default async function NotesList() {
  const notes = await fetchNotes()

  return (
    <div>
      <p className="m-4 pb-3 text-xl font-medium underline underline-offset-4">
        Notes
      </p>

      <ul className="m-3">
        {notes.map((note) => (
          <NotesItem
            key={note.id}
            title={note.title}
            created_at={note.created_at}
          />
        ))}
      </ul>
    </div>
  )
}
