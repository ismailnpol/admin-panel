'use client'

import { useAuth } from '@/lib/hooks/useAuth'
import { Button } from '@/components/ui/Button'

export function Header() {
  const { user, profile, signOut } = useAuth()

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              <div className="font-medium">{profile?.full_name || user?.email}</div>
              <div className="text-xs">{profile?.role}</div>
            </div>
            <Button size="sm" variant="secondary" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}