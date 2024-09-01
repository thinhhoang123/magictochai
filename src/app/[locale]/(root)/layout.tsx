import AppLayout from '@/components/layout';

export default function LayoutRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
