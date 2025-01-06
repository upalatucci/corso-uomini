import { getPassword } from "@/lib/getPassword";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      credentials: {
        password: {},
      },
      authorize: async (credentials) => {
        const password = await getPassword();

        if (credentials?.password !== password) {
          throw new Error("Password errata");
        }

        // return user object with their profile data
        return { id: "user" };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
