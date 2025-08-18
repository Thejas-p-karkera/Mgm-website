import HostelInfo from './Facilities-Thejas/Hostels';
import ParkingInfo from './Facilities-Thejas/Parking';
import BackToTop from './BackToTop';
import Canteen from './Facilities-Thejas/Annapoorna';
import CoOpStore from './Facilities-Thejas/Co-op';
import ClsAndLabs from './Facilities-Thejas/ClsAndLabs';
import ComputerCenter from './Facilities-Thejas/CompCenter';
import Library from './Facilities-Thejas/Library';
import StaffRoom from './Facilities-Thejas/StaffRoom';

function Facilities() {
  return (
    <>
      <Canteen/>
      <CoOpStore/>
      <ClsAndLabs/>
      <ComputerCenter/>
      <HostelInfo />
      <Library/>
      <StaffRoom/>
      <ParkingInfo />
      <BackToTop />
    </>
  );
}

export default Facilities;
