import Link from "next/link";
import { partners, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <div>
          <span className="footer-monogram">YPC</span>
          <p className="footer-title">{siteConfig.name}</p>
        </div>
        <p className="footer-mission">
          A regional tradition connecting young musicians, careful preparation,
          and the experience of live orchestral performance.
        </p>
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
        <div>
          <p className="footer-label">Policies</p>
          <div className="footer-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
        <div className="footer-partners">
          <p className="footer-label">Documented & proposed partners</p>
          <ul>
            {partners.map((partner) => (
              <li key={partner.name}>{partner.name}</li>
            ))}
          </ul>
          <p className="footer-fine">
            Current roles remain subject to organizer confirmation.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Young People’s Competition.</p>
        <p>Huntington, West Virginia</p>
      </div>
    </footer>
  );
}
