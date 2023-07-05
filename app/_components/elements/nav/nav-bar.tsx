import NavLink from './nav-link'

export default function NavBar() {
  return (
    <nav className="space-x-4">
      <NavLink href="/">Home</NavLink>

      <NavLink href="/blogs">Nested Layout with Blogs</NavLink>

      <NavLink href="/streaming-sr">Streaming SR</NavLink>

      <NavLink href="/auth">Auth with CRUD</NavLink>
    </nav>
  )
}
