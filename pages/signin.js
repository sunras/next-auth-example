import { signIn } from "next-auth/client"

export default function SignIn() {
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('test');
      signIn("email", { email, callbackUrl: '/protected' });
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email address
        <input type="email" id="email" name="email" />
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
