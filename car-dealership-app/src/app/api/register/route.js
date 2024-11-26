import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { connectToDb } from '@/app/utils/database'
import User from '@/app/models/User'

export async function POST(req) {
  try {
    // Connect to database
    await connectToDb()

    const { name, email, password } = await req.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    })

    // Remove password from response
    const userObject = user.toObject()
    delete userObject.password

    return NextResponse.json(
      { user: userObject },
      { status: 201 }
    )

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
