export interface IUser {
  id: string
  username: string
  email: string
  isAdmin: boolean
  lastLoginedAt?: Date
  createdAt: Date
  updatedAt: Date
}
