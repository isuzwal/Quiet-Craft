'use client';

import BentoCard from '@/components/ui/bento-card';
import Button from '@/components/ui/button';
import NavBara from '@/components/ui/navbara.view';

import { Screen } from '@/container/section-view';

export default function Home() {
  return (
    <Screen>
      <div>
        <NavBara />
      </div>
      {/* <BentoCard /> */}
      {/* <Button variant={"deafault"} size={"md"} className="bg-red-400">
        Login
      </Button> */}
    </Screen>
  );
}
