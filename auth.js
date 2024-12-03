import { connectDB } from "@/lib/db/ConnectDB"
import { UserModels } from "@/lib/models/user"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
const handleUser = async (profile)=>{
await connectDB()
const user = await UserModels.findOne({email: profile.email})

if(user){
return user
}
let newUser = new UserModels({
  fullname: profile.name,
    email: profile.email,
    profileImg: profile.picture,
    
})
 newUser = await newUser.save()
 return newUser;
}
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      // if (account.provider === "google") {
      //   return profile.email_verified && profile.email.endsWith("@example.com")
      // }
const user = await handleUser(profile)


console.log(user.role);


      console.log('account',account)
      console.log('profile',profile)

      return true // Do different verification for other providers that don't have `email_verified`
    },
  async  jwt({ token, user }) {
      const UserFromDB = await handleUser(token)
      console.log('UserFromDB',UserFromDB);
      console.log('user',user);
      console.log('token',token);

      
      if (user) { // User is available during sign-in
        token._id = UserFromDB._id
        token.role = UserFromDB.role
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      session.user._id = token._id
      session.user.role = token.role
      
      return session
    },
  },
 
})