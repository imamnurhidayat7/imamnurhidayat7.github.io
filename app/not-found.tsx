import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container-narrow flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page not found</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-hover"
      >
        Go home
      </Link>
    </main>
  );
}