import BlogListStatic from '../_components/elements/blog/blog-list-static'
import RefreshBtn from '../_components/elements/button/refresh-btn'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex">
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200 p-2`}>
        <BlogListStatic />

        <div className="flex justify-center">
          <RefreshBtn />
        </div>
      </aside>

      <main className="flex flex-1 justify-center">{children}</main>
    </section>
  )
}
