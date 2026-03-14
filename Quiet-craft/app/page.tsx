// import BentoCard from '@/components/ui/bento-card';
// import Button from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import NavBara from '@/components/ui/navbara.view';
import { Screen } from '@/components/ui/section-view';

export default function Home() {
  return (
    <Screen>
      <NavBara />
      <HeroSection />
    </Screen>
  );
}
