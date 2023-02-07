
import './App.css';
import { ClientReview } from './ClientReview';
import { CompanyWork } from './CompanyWork';
import { Faq } from './Faq.js';
import { FeaturesPage } from './FeaturesPage';
import { FreeTrial } from './FreeTrial';
import { Home } from './Home';
import { Integration } from './Integration';
import { Naavbar } from './Naavbar';
import { Pricing } from './Pricing';
import { WorkProcess } from './WorkProcess';

function App() {
  return (
    <>
      <Naavbar/>
      <Home />
      <FeaturesPage />
      <CompanyWork />
      <ClientReview />
      <WorkProcess />
      <Pricing />
      <Faq />
      <FreeTrial/>
    </>
  );
}

export default App;
