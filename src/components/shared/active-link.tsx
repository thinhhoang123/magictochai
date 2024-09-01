'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ActiveLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  console.log(pathname.split('/'));
  const isActive = pathname.includes(href);
  return (
    <Link
      href={href}
      className={cn(
        `flex items-center gap-3 rounded-lg px-3 py-2 ${
          isActive ? 'text-primary bg-muted' : 'text-muted-foreground'
        } transition-all hover:text-primary hover:bg-muted`
      )}
    >
      {children}
    </Link>
  );
}
