import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

// This is temporary - in a real app, you'd fetch from your database
const MOCK_USER = {
  email: 'test@example.com',
  // This is "password123" hashed
  password: '$2a$10$zQV9q5UgJXkPYDAEPtO4OeYmtQYIP0wf6Zk9Qwm0zKt8rKXXUNlK2'
};

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // In a real app, you'd fetch the user from your database here
    if (email !== MOCK_USER.email) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, MOCK_USER.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Successfully authenticated
    return NextResponse.json({
      message: 'Login successful',
      user: { email: MOCK_USER.email }
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
