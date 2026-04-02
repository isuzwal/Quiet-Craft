// import BentoCard from '@/components/ui/bento-card';
// import Button from '@/components/ui/button';
import { AnimationCard } from '@/components/animation-card';
import { ButtonView } from '@/components/custom-button-view';
import { HeroSection } from '@/components/ui/hero-section';
import NavBara from '@/components/ui/navbara.view';

import { Screen } from '@/components/ui/section-view';

export default function page() {
  return (
    <Screen>
      <NavBara />
      <HeroSection />
      {/* <CardUserProfile /> */}
      <ButtonView />
      <AnimationCard />
    </Screen>
  );
}
