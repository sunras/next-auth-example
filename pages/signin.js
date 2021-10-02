import { signIn } from "next-auth/client"
import { useState } from "react";

export default function SignIn({ csrfToken }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('The name you entered was: ' +email)
    signIn("email", { email: email })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email address:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      <button type="submit">Sign in with Email</button>
    </form>
  )
}

// This is the recommended way for Next.js 9.3 or newer
// export async function getServerSideProps(context) {
//   const csrfToken = await getCsrfToken(context)
//   return {
//     props: { csrfToken },
//   }
// }

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await getCsrfToken(context)
  }
}
*/
