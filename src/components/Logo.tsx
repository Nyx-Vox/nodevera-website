import Image from "next/image";
import Link from "next/link";

const logoSizes = {
  header: "h-16 w-16 sm:h-[70px] sm:w-[70px]",
  footer: "h-24 w-24",
  compact: "h-12 w-12",
};

type LogoProps = {
  variant?: keyof typeof logoSizes;
  className?: string;
  priority?: boolean;
};

export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white ${className}`}>
      <Image
        src="/images/nodevera-logo-mark.png"
        alt="NodeVera logo mark"
        fill
        sizes="48px"
        className="object-contain"
        priority
      />
    </div>
  );
}

export default function Logo({
  variant = "header",
  className = "",
  priority = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="NodeVera Cyber IT & Services home"
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
    >
      <Image
        src="/images/nodevera-logo-full.png"
        alt="NodeVera Cyber IT & Services logo"
        width={160}
        height={160}
        sizes="(max-width: 640px) 64px, 76px"
        className={`${logoSizes[variant]} object-contain`}
        priority={priority}
      />
    </Link>
  );
}
