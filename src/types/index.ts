export enum UserRole {
  TENANT = 'TENANT',
  OWNER = 'OWNER',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string
  email: string
  name: string | null
  role: UserRole | null
  createdAt: Date
  updatedAt: Date
}