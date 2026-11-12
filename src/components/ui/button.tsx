import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-all duration-300 ease-out focus-visible:outline-none " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-blue text-white hover:bg-accent-purple " +
    "shadow-[0_0_40px_-10px_var(--accent-blue)] hover:shadow-[0_0_60px_-10px_var(--accent-purple)]",
  ghost:
    "glass text-content-primary hover:bg-white/10 light:hover:bg-black/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = CommonProps & { href: string };

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps | LinkProps
>(function Button(props, ref) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && typeof rest.href === "string") {
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref} className={classes} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
});