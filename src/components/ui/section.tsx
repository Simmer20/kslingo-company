import { cn } from "@/lib/cn";

export function Section({
  id,
  children,
  className,
  containerClassName,
  as: Tag = "section",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div" | "footer";
}) {
  return (
    <Tag
      id={id}
      className={cn("relative w-full py-24 md:py-32", className)}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-6 md:px-10",
          containerClassName
        )}
      >
        {children}
      </div>
    </Tag>
  );
}