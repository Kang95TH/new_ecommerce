import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "ID & PASSWD",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "ID (email)" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const res = await fetch("http://localhost:3001/sessionRequest", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()

                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    secret: process.env.SECRET,
})