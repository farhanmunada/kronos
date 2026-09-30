import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Inquiry } from './components/sections/Inquiry';
import { Metrics } from './components/sections/Metrics';
import { PodExplorer } from './components/sections/PodExplorer';
import { Portfolio } from './components/sections/Portfolio';
import { Workflow } from './components/sections/Workflow';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:border focus:border-accent focus:bg-background focus:px-5 focus:py-3 focus:text-xs focus:uppercase focus:tracking-[0.2em]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <PodExplorer />
        <Metrics />
        <Workflow />
        <Portfolio />
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
