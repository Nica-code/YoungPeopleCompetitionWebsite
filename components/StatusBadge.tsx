import {
  statusLabel,
  type ConfirmationStatus,
} from "@/content/site";

export function StatusBadge({ status }: { status: ConfirmationStatus }) {
  return (
    <span className={`status-badge status-${status}`}>
      {statusLabel(status)}
    </span>
  );
}
