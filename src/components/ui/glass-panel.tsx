import { cn } from "@/lib/cn";

export function GlassPanel({
  children,
  className,
  strong = false,
}: {
  children: React.ReactNode;
  className?: string;
  strong?: boolean;
}) {
  return (
    <div
      className={cn(
        strong ? "glass-strong" : "glass",
        "rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
}