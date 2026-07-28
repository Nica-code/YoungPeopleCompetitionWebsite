import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow eyebrow-light">404</p>
        <h1>This page missed its entrance.</h1>
        <p>
          The address may have changed, or the page may belong to a future
          competition edition.
        </p>
        <Link className="button button-accent" href="/">
          Return home
        </Link>
      </div>
    </section>
  );
}
