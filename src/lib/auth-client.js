import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "https://sun-cart-seven.vercel.app",
});

export const { signIn, signUp, signOut, useSession } = createAuthClient();
