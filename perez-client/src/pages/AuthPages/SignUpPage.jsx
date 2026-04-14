import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500';

const actionButtonClassName = 'w-full rounded-xl py-3 text-xs tracking-[0.2em]';

const SignUpPage = () => {
  return (
    <div className="mx-auto max-w-md text-white">

      {/* HEADER */}
      <h1 className="text-4xl font-bold">Sign Up</h1>

      <p className="mt-3 text-sm text-zinc-400 leading-6">
        Create your GameSphere account for faster checkout, order tracking, and exclusive drops.
      </p>

      {/* FORM */}
      <form className="mt-8 space-y-5">

        {/* NAME ROW */}
        <div className="grid gap-4 sm:grid-cols-2">

          <div>
            <label className="text-sm text-zinc-300">First Name</label>
            <input
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>

          <div>
            <label className="text-sm text-zinc-300">Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>

        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm text-zinc-300">Email</label>
          <input
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="text-sm text-zinc-300">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            className={inputClasses}
          />

          <p className="mt-2 text-xs text-zinc-500">
            Use a strong password with letters, numbers, and symbols.
          </p>
        </div>

        {/* CREATE BUTTON */}
        <Button
          to="/"
          type="submit"
          variant="primary"
          className={actionButtonClassName}
        >
          Create Account
        </Button>

        {/* SOCIAL SIGNUP */}
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
        Already have an account?{' '}
        <Link
          to="/auth/signin"
          className="text-white font-semibold hover:text-indigo-400 transition"
        >
          Log In
        </Link>
      </div>

    </div>
  );
};

export default SignUpPage;