"use client";

export function PrintApplicationButton() {
  return (
    <button className="button button-accent" type="button" onClick={() => window.print()}>
      Print or save as PDF
    </button>
  );
}
