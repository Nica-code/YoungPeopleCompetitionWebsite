"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { navigation } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const applicationHref = ["/", "/apply", "/apply/", "/application-form", "/application-form/"].includes(pathname) ? "#application" : "/#application";

  function focusApplication() {
    setMenuOpen(false);
    window.requestAnimationFrame(() => document.getElementById("application-title")?.focus({ preventScroll: true }));
  }

  return (
    <header className="site-header"><div className="header-inner">
      <Link className="wordmark" href="/" aria-label="YPC — Young People’s Competition home"><span className="wordmark-monogram">YPC</span><span className="wordmark-name">Young People’s<br />Competition</span></Link>
      <nav id="primary-navigation" className={`primary-navigation${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
        {navigation.map((item) => <Link key={item.href} href={item.href} aria-current={item.href === pathname ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
      </nav>
      <Link className="button button-small button-accent header-apply" href={applicationHref} onClick={focusApplication}>Apply</Link>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}><span className="sr-only">{menuOpen ? "Close navigation" : "Open navigation"}</span><Icon name={menuOpen ? "x" : "list"} /></button>
    </div></header>
  );
}
