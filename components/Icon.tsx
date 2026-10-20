import { assetBase } from "@/lib/paths";

type IconName = "calendar-blank" | "users-three" | "trophy" | "envelope-simple" | "phone" | "download-simple" | "file-text" | "list" | "x" | "arrow-right";

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return <img className={`icon ${className}`} src={`${assetBase}/icons/${name}.svg`} alt="" aria-hidden="true" width="24" height="24" />;
}
