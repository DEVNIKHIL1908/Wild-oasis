import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "./useBooking";
import { useNavigate } from "react-router-dom";
import { useCheckOut } from "../check-in-out/useCheckout";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteBooking from "./useDeleteBooking";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const {isDeletingBooking,deletingBookingFn} = useDeleteBooking()
  const navigate = useNavigate();
  const {checkout} =useCheckOut()
  // const booking = {};
  // const status = "checked-in";

  const moveBack = useMoveBack();
  if(isLoading) return <Spinner/>
  if (!booking) return <Empty resource="booking"/> ;
  const { id, status } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };



  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking {booking?.id}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking != undefined && booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${id}`)}>Check In</Button>
        )}
        
        {status === "checked-in" && (
          <Button
           variation= "danger"
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(id)}
          >
            Check Out
          </Button>
        )}
     <Modal>
      <Modal.Open opens={"delete"}>
          <Button variation="danger" >Delete Booking</Button>
      </Modal.Open>
          <Modal.Window name={"delete"}>
            <ConfirmDelete resourceName={"bookign"} onConfirm={()=>deletingBookingFn(booking?.id,{
              onSettled: ()=>{
                navigate(-1)
              }
            })} disabled={isDeletingBooking}/>
            
          </Modal.Window>
      </Modal>   

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
        
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
