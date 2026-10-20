"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { navigation } from "@/content/site";

function revealSection(hash: string) {
  document.querySelectorAll("[data-section-active]").forEach((section) => section.removeAttribute("data-section-active"));
  if (hash !== "#recent-past-winners" && hash !== "#contact") return;
  const section = document.getElementById(hash.slice(1));
  if (!section) return;
  // History-based client navigation does not reliably update CSS :target.
  section.setAttribute("data-section-active", "true");
  section.focus({ preventScroll: true });
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    section.getAnimations().forEach((animation) => animation.cancel());
    section.animate(
      [{ backgroundColor: "#eddae1" }, { backgroundColor: "#f8f0f3" }],
      { duration: 1200, easing: "ease-out" },
    );
  }
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const showDestination = () => {
      setActiveHash(window.location.hash);
      revealSection(window.location.hash);
    };
    showDestination();
    window.addEventListener("hashchange", showDestination);
    window.addEventListener("popstate", showDestination);
    return () => {
      window.removeEventListener("hashchange", showDestination);
      window.removeEventListener("popstate", showDestination);
    };
  }, [pathname]);

  return (
    <header className="site-header"><div className="header-inner">
      <Link className="wordmark" href="/" aria-label="YPC — Young People’s Competition home" onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        setMenuOpen(false);
        setActiveHash("");
        revealSection("");
      }}><span className="wordmark-monogram">YPC</span><span className="wordmark-name">Young People’s<br />Competition</span></Link>
      <nav id="primary-navigation" className={`primary-navigation${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
        {navigation.map((item) => {
          const hash = item.href.includes("#") ? item.href.slice(item.href.indexOf("#")) : "";
          const isSection = hash && pathname === "/" && activeHash === hash;
          return <Link key={item.href} href={item.href} aria-current={isSection ? "location" : item.href === pathname ? "page" : undefined} onClick={(event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            setMenuOpen(false);
            if (hash && pathname === "/") {
              setActiveHash(hash);
              // Next handles the URL and scroll; repeat clicks still give feedback.
              requestAnimationFrame(() => revealSection(hash));
            }
          }}>{item.label}</Link>;
        })}
      </nav>
      <Link className="button button-small button-accent header-apply" href="/apply" onClick={() => setMenuOpen(false)}>Apply</Link>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}><span className="sr-only">{menuOpen ? "Close navigation" : "Open navigation"}</span><Icon name={menuOpen ? "x" : "list"} /></button>
    </div></header>
  );
}
