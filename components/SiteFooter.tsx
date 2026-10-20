import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© 2026 Young People’s Competition<span className="footer-location">Huntington, West Virginia</span></p>
        <nav aria-label="Footer navigation"><Link href="/about">About</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/accessibility">Accessibility</Link></nav>
        <p className="footer-credit">Designed by <a href="https://alexmalaimare.com/">Alex Malaimare</a></p>
      </div>
    </footer>
  );
}
