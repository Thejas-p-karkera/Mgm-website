import HostelInfo from './Hostels';
import ParkingInfo from './Parking';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';

function Facilities() {
  return (
    <>
      {/* <Header /> */}
      <HostelInfo />
      <ParkingInfo />
      {/* <Footer /> */}
      <BackToTop />
    </>
  );
}

export default Facilities;
