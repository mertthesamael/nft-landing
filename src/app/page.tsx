import AttributesSection from '@/containers/attributes-section'
import BannerSection from '@/containers/banners-section'
import HeroSection from '@/containers/hero-section'
import NftsSection from '@/containers/nfts-section'
import RoadmapSection from '@/containers/roadmap-section'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BannerSection />
      <AttributesSection />
      <NftsSection />
      <RoadmapSection />
    </main>
  )
}
