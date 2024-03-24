import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartPie } from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, numCabins }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc,curr)=>{
   return  acc+curr.totalPrice
  },0)

  const checkIns = confirmedStays.length
  const occupancyRate = confirmedStays.reduce((acc,curr)=>{
    return (acc+curr.numNights)/ (numDays*numCabins)
  },0)
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartPie />}
        value={Math.round(occupancyRate*100) +"%"}
      />
    </>
  );
}

export default Stats;
