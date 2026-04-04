import { HeroSection } from '@/components/hero-section';
import NavBara from '@/components/navbara.view';
import { SiteFooter } from '@/components/site-footer';

import { Screen } from '@/components/ui/section-view';

export default function page() {
  return (
    <Screen>
      <NavBara />
      <HeroSection />
      {/* <SiteFooter /> */}
    </Screen>
  );
}
