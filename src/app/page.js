import Image from "next/image";
import { auth, signOut } from "../../auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await auth()
  console.log("session",session)


  if (!session) {
    redirect("/signin")
  }

  return (
  <>
  <div>
    FINDYOURFRIEND
  </div>
  <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  </>
  );
}
