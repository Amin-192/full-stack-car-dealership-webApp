import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDb } from '@/app/utils/database';
import User from '@/app/models/User';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session }) {
            try {
                await connectToDb();
                const sessionUser = await User.findOne({ email: session.user.email });
                if (sessionUser) {
                    session.user.id = sessionUser._id.toString();
                }
                return session;
            } catch (error) {
                console.error("Session error:", error);
                return Promise.reject(new Error("Failed to fetch session"));
            }
        },
        async signIn({ profile }) {
            try {
                await connectToDb();
                const userExists = await User.findOne({ email: profile.email });
                
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        userName: profile.name.replace(/\s+/g, '').toLowerCase(), // or rename to `username`
                        image: profile.picture,
                    });
                }
                return true;
            } catch (error) {
                console.error("SignIn error:", error);
                return Promise.resolve(false);
            }
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/Login',
    },
});

export { handler as GET, handler as POST };