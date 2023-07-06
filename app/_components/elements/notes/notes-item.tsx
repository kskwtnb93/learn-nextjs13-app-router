import { format } from 'date-fns'
import type { Database } from '../../../../database.types'

type Note = Database['public']['Tables']['notes']['Row']
type NoteItemProps = {
  title: Note['title']
  created_at: Note['created_at']
}

export default function NotesItem({ title, created_at }: NoteItemProps) {
  return (
    <li>
      <p>{title}</p>
      <p>
        <strong className="mr-3">Created at:</strong>
        {created_at && format(new Date(created_at), 'yyyy-MM-dd HH:mm:ss')}
      </p>
    </li>
  )
}
