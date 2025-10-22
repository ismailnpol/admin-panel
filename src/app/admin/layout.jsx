'use client'

import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'
import { usePathname } from 'next/navigation'

export default function AdminLayout({ children }) {
  const pathname = usePathname()
  
  // Get page title based on current route
  const getPageTitle = () => {
    if (pathname === '/admin') return 'HOME'
    if (pathname === '/admin/users') return 'USERS'
    if (pathname === '/admin/roles') return 'ROLES'
    if (pathname === '/admin/settings') return 'SETTINGS'
    if (pathname === '/admin/reports') return 'REPORTS'
    return 'HOME'
  }

  return (
    // Main container with flex layout
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - fixed on desktop, hidden/overlay on mobile */}
      <Sidebar />
      
      {/* Main content wrapper - takes up remaining space and handles content scrolling */}
      <div className="flex-1 flex flex-col lg:ml-0">
        <Header title={getPageTitle()} />
        
        <main className="flex-1">
          {children} {/* This is where the page content (e.g., /admin/users) will render */}
        </main>
      </div>
    </div>
  )
}