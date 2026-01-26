import BentoCard from '@/components/ui/bento-card';
import Button from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import NavBara from '@/components/ui/navbara.view';

import { Screen } from '@/container/section-view';

export default function Home() {
  return (
    <div>
      <NavBara />
      <Screen>
        <HeroSection />
      </Screen>
    </div>
  );
}
