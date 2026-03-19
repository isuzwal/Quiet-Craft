import { Button } from '@/components/ui/button';

import Link from 'next/link';

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  return <div className="">Hello{slug}</div>;
}
