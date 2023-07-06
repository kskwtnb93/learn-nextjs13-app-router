import { headers, cookies } from 'next/headers'
import SupabaseLitener from '../_components/supabase-listener'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../../database.types'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <>
      <SupabaseLitener accessToken={session?.access_token} />

      {children}
    </>
  )
}
