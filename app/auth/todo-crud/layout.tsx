import { Suspense } from 'react'
import Spinner from '../../_components/elements/spinner'
import EditTask from '../../_components/elements/todo/todo-edit'
import TodoList from '../../_components/elements/todo/todo-list'

export default function TodoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex">
      <aside className="h-[calc(100vh-56px)] w-1/4 bg-gray-200">
        <EditTask />

        <Suspense fallback={<Spinner />}>
          <TodoList />
        </Suspense>
      </aside>

      <main className="flex flex-1 justify-center items-start">{children}</main>
    </section>
  )
}
