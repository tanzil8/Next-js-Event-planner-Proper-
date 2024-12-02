import { signIn } from "../../../auth"

 
export default function SignIn() {
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