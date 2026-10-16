import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <div>
          <span className="footer-monogram">YPC</span>
          <p className="footer-title">{siteConfig.name}</p>
        </div>
        <p className="footer-mission">Supporting young musicians in Huntington, West Virginia.</p>
      </div>

      <div className="footer-grid">
        <div>
          <p className="footer-label">Explore</p>
          <div className="footer-links">
            <Link href="/competition">Competition</Link>
            <Link href="/apply">Apply</Link>
            <Link href="/winners">Winners</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
        <div>
          <p className="footer-label">Organization</p>
          <div className="footer-links">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
        <div><p className="footer-label">Information</p><div className="footer-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Young People’s Competition.</p>
        <p>Huntington, West Virginia</p>
      </div>
    </footer>
  );
}
