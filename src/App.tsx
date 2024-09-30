import BannerLaslesVPN from "./components/BannerLaslesVPN/BannerLaslesVPN"
import Features from "./components/Features/Features"
import HappyCustomer from "./components/HappyCustomer/HappyCustomer"
import LayoutPrimary from "./components/Layout/LayoutPrimary"
import Metric from "./components/Metric/Metric"
import SubscribeNow from "./components/SubscribeNow/SubscribeNow"
import ChoosePlan from "./components/ChoosePlan/ChoosePlan";


function App() {
  return (
    <LayoutPrimary>
      <BannerLaslesVPN />
      <Metric />
      <Features />
      <ChoosePlan />
      <HappyCustomer />
      <SubscribeNow />
    </LayoutPrimary>
  );
}

export default App;
