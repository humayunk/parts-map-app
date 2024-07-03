// src/app/protected/page.js
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to sign-in page if not authenticated
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {session.user.email}</p>
    </div>
  );
}
