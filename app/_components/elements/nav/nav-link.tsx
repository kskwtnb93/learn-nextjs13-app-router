import Link from 'next/link'

interface Props {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
    >
      {children}
    </Link>
  )
}
