import NotesList from './_components/elements/notes/notes-list'
import TimerCounter from './_components/elements/timer-counter'
import { Suspense } from 'react'
import Spinner from './_components/elements/spinner'
import RefreshBtn from './_components/elements/button/refresh-btn'

export default function Home() {
  return (
    <>
      <main>
        <div className="m-10 text-center">
          <p>Hello World 🚀</p>

          <Suspense fallback={<Spinner color="border-green-500" />}>
            <NotesList />
          </Suspense>

          <TimerCounter />

          <RefreshBtn />
        </div>
      </main>
    </>
  )
}
