import Image from "next/image";
import Link from "next/link";

export function LogoMark() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white">
      <Image
        src="/images/nodevera-logo-mark.png"
        alt="NodeVera logo mark"
        width={48}
        height={48}
        className="h-12 w-12 object-contain"
        priority
      />
    </div>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <LogoMark />

      <div>
        <p className="text-xl font-black tracking-tight text-navy-950">
          Node<span className="text-cyan-500">Vera</span>
        </p>
        <p className="-mt-1 text-xs font-semibold tracking-[0.28em] text-slate-500">
          CYBER IT & SERVICES
        </p>
      </div>
    </Link>
  );
}