import { useOutletContext } from 'react-router';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Partners } from '../components/Partners';
import { Recruitment } from '../components/Recruitment';
import { FacebookBanner } from '../components/FacebookBanner';
import type { OutletContextType } from '../Root';

export function HomePage() {
  const { onOpenContact, theme } = useOutletContext<OutletContextType>();
  return (
    <>
      <Hero onOpenContact={onOpenContact} />
      <Stats />
      <Partners theme={theme} />
      <Recruitment />
      <FacebookBanner />
    </>
  );
}
