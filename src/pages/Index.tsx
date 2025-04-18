import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import MenuPreview from '@/components/home/MenuPreview';
import EventsPreview from '@/components/home/EventsPreview';
import Testimonials from '@/components/home/Testimonials';
import Reservation from '@/components/home/Reservation';
import PromoSection from '@/components/home/PromoSection';
import ContactInfo from '@/components/home/ContactInfo';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <MenuPreview />
      <EventsPreview />
      <Testimonials />
      <Reservation />
      <PromoSection />
      <ContactInfo />
    </Layout>
  );
};

export default Index;
