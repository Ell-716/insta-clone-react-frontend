import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "react-router";
import stylesheet from "./app.css?url";

export function links() {
  return [{ rel: "stylesheet", href: stylesheet }];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='min-h-screen'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='min-h-screen bg-gray-50 text-gray-800'>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <header className='sticky top-0 z-50 w-full border-b bg-white'>
        <nav className='container mx-auto px-4 py-3'>
          <h1 className='text-xl font-bold'>Instagram</h1>
        </nav>
      </header>
      <main className='container mx-auto p-4'>
        <Outlet />
      </main>
      <footer className='py-4 text-center text-sm text-gray-500'>
        <p>&copy; 2025 Webeet</p>
      </footer>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <Layout>
      <div className='container mx-auto p-4 text-center'>
        <h1 className='text-2xl font-bold'>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        {isRouteErrorResponse(error) && (
          <p className='text-red-500'>
            <i>
              {error.status} {error.statusText}
            </i>
          </p>
        )}
      </div>
    </Layout>
  );
}
