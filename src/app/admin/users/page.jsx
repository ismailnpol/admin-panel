'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { CreateUserModal } from '@/components/admin/CreateUserModal'
import { UserTable } from '@/components/admin/UserTable'
import { useAuth } from '@/lib/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { LogoutPopUp } from '@/components/admin/LogoutPopUp'

export default function AdminUsersPage() {

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [LogoutPopUpOpen, setLogoutPopUpOpen] = useState(false)
  const { isAdmin, loading ,profile} = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push('/login')
    }
  }, [isAdmin, loading, router])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  if (!isAdmin) {
    return <div>You are not Admin</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 flex justify-between items-center">
        <div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
  <div>
    <h2 className="text-3xl font-bold text-gray-900">User Management</h2>
    <p className="text-gray-600">
      {profile?.full_name} • <span className="text-gray-500">{profile?.email}</span>
    </p>
  </div>
</div>

          <p className="text-gray-600 mt-1">Create and manage user accounts</p>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => setIsCreateModalOpen(true)}>
          + Create User
        </Button>
        <Button variant="danger" onClick={() => setLogoutPopUpOpen(true)} >
          Logout
        </Button>
        </div>
        
      </div>

      <div className="bg-white rounded-lg shadow">
        <UserTable />
      </div>

      <CreateUserModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSuccess={() => {}}
      />
      <LogoutPopUp
        isOpen={LogoutPopUpOpen}
        onClose={() => setLogoutPopUpOpen(false)}
        onSuccess={() => {}}
      />
    </div>
  )
}
