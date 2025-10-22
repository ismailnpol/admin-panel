'use client'

import { useAuth } from '@/lib/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminHomePage() {
  const { isAdmin, loading } = useAuth()
  const router = useRouter()

  // Route protection
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
    return null
  }

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
          <div className="text-sm text-gray-600 mb-2">Total Users</div>
          <div className="text-3xl font-bold text-gray-900">1,234</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
          <div className="text-sm text-gray-600 mb-2">Active Users</div>
          <div className="text-3xl font-bold text-gray-900">987</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
          <div className="text-sm text-gray-600 mb-2">Admins</div>
          <div className="text-3xl font-bold text-gray-900">12</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
          <div className="text-sm text-gray-600 mb-2">New This Month</div>
          <div className="text-3xl font-bold text-gray-900">45</div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white mb-8">
        <h2 className="text-3xl font-bold mb-2">Welcome to Admin Dashboard</h2>
        <p className="text-blue-100">Manage your users, roles, and system settings from here.</p>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              👤
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">New user registered</div>
              <div className="text-xs text-gray-500">john.doe@example.com • 5 minutes ago</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              ✓
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">User role updated</div>
              <div className="text-xs text-gray-500">jane.smith@example.com • 1 hour ago</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
              ⚙️
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">Settings updated</div>
              <div className="text-xs text-gray-500">System configuration • 3 hours ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}