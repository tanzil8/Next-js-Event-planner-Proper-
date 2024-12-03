import { redirect } from "next/navigation"
import { auth, signIn } from "../../../auth"

 
export default async function SignIn() {
  const session = await auth()
 console.log('sessionnn',session)
 if (session) {
  if (session.user.role == 'user') {
    redirect('/')
  }else if (session.user.role == 'admin') {
    redirect('/admin/dashboard')
  
  }
 }
  return (
      <form
      action={async () => {
          "use server"
        await signIn("google")
      }}
    >
          <div className="flex justify-center items-center min-h-screen">
      <button type="submit">Signin with Google</button>
</div>
    </form>
    
  )
} 