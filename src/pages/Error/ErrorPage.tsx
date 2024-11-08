import { useNavigate, useRouter } from "@tanstack/react-router";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};
function ErrorPage({ error }: ErrorPageProps) {
  const router = useRouter();
  const navigate = useNavigate();
  console.error(error.message);

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
          Error
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Sorry, an error occurred while loading this page.
          <br />
          If this happens frequently, please contact us.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => {
              // Invalidate the route to reload the loader, and reset any router error boundaries
              router.invalidate();
              navigate({ to: "/" });
            }}
            className="bg-red-primary px-6 py-3 font-semibold text-white shadow-sm hover:bg-red-primary/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Return to Home
          </button>
        </div>
      </div>
      <p className="mb-40"></p>
    </main>
  );
}

export default ErrorPage;
