import AttributesSection from '@/containers/attributes-section'
import BannerSection from '@/containers/banners-section'
import FaqSection from '@/containers/roadmap-section'
import HeroSection from '@/containers/hero-section'
import NftsSection from '@/containers/nfts-section'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BannerSection />
      <AttributesSection />
      <NftsSection />
      <FaqSection />
    </main>
  )
}
