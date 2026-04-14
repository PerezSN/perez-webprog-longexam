import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500';

const actionButtonClassName = 'w-full rounded-xl py-3 text-xs tracking-[0.2em]';

const SignInPage = () => {
  return (
    <div className="mx-auto max-w-md text-white">

      {/* HEADER */}
      <h1 className="text-4xl font-bold">Log In</h1>

      <p className="mt-3 text-sm text-zinc-400 leading-6">
        Access your GameSphere account to view orders, saved items, and pickup details.
      </p>

      {/* FORM */}
      <form className="mt-8 space-y-5">

        {/* EMAIL */}
        <div>
          <label htmlFor="signin-email" className="text-sm text-zinc-300">
            Email Address
          </label>

          <input
            id="signin-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label htmlFor="signin-password" className="text-sm text-zinc-300">
            Password
          </label>

          <input
            id="signin-password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            className={inputClasses}
          />

          <p className="mt-2 text-xs text-zinc-500">
            Minimum 8 characters with letters, numbers, and symbols.
          </p>
        </div>

        {/* OPTIONS */}
        <div className="flex items-center justify-between text-sm">

          <label className="flex items-center gap-2 text-zinc-400">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 accent-indigo-500"
            />
            Remember me
          </label>

          <button
            type="button"
            className="text-zinc-400 hover:text-white transition"
          >
            Forgot Password?
          </button>
        </div>

        {/* LOGIN BUTTON */}
        <Button
          to="/"
          type="submit"
          variant="primary"
          className={actionButtonClassName}
        >
          Log In
        </Button>

        {/* SOCIAL LOGIN */}
        <div className="grid gap-3 sm:grid-cols-2">

          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Google
          </Button>

          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Apple
          </Button>

        </div>

      </form>

      {/* FOOTER */}
      <div className="mt-8 border-t border-zinc-800 pt-6 text-sm text-zinc-400">
        No account yet?{' '}
        <Link
          to="/auth/signup"
          className="text-white font-semibold hover:text-indigo-400 transition"
        >
          Sign Up
        </Link>
      </div>

    </div>
  );
};

export default SignInPage;