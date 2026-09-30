import { Link } from "react-router-dom";
const NotFound = () => (
  <section className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-900 text-white">
    <h1 className="text-5xl font-bold">404</h1>
    <p>This page doesn't exist.</p>
    <Link to="/" className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-900">
      Back to home
    </Link>
  </section>
);
export default NotFound;