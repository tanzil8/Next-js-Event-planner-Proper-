'use client'

import { useState } from "react"
import { Table, TableBody, TableCaption, TableCell,  TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"


const users = [
  {
    id: "USR001",
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "Fpsho123",
    status: "Active",
    lastLogin: "2023-07-19",
    avatar: "https://images.unsplash.com/photo-1582439170934-d089aa10abda?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
 
]

export default function EnhancedUserTable() {
  const [showPasswords, setShowPasswords] = useState({})

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Inactive":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const togglePasswordVisibility = (userId) => {
    setShowPasswords(prev => ({ ...prev, [userId]: !prev[userId] }))
  }

  return (
    <div className="rounded-md border border-gray-200 bg-white">
      <Table>
        <TableCaption>A list of users and their information.</TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100 hover:bg-gray-200">
            <TableHead className="w-[80px]">Avatar</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Password</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Login</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="hover:bg-gray-50">
              <TableCell>
                <Image
                  src={user.avatar}
                  alt={`Avatar of ${user.name}`}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <span className="mr-2">
                    {user.password}
                  </span>
                  <button
                    onClick={() => togglePasswordVisibility(user.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                   
                  </button>
                </div>
              </TableCell>
              <TableCell>
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(user.status)}`}>
                  {user.status}
                </span>
              </TableCell>
              <TableCell>{user.lastLogin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
     
      </Table>
    </div>
  )
}
