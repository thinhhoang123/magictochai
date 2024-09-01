import { UserButton } from '@clerk/nextjs';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';
import Image from 'next/image';
import navItems from '@/constants/nav-items';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import ActiveLink from '../shared/active-link';

export default function AppHeader() {
  const t = useTranslations('TITLE');

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <SheetHeader>
            <SheetTitle>
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Image src="/logo.svg" alt="logo" height={30} width={30} />
                <span className="">Magic Touch AI</span>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-2 text-lg font-medium">
            {navItems.map((item) => {
              return (
                <ActiveLink href={item.link} key={item.title}>
                  {item.icon}
                  {t(item.title)}
                </ActiveLink>
              );
            })}
          </div>
          <div className="mt-auto">
            <Card>
              <CardHeader>
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1"></div>
      <UserButton />
    </header>
  );
}
