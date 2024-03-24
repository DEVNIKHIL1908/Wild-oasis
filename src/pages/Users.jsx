import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm"
import { useForm } from "react-hook-form";
function NewUsers() {

  return <>
   <Heading as="h1">Create a new user</Heading>
    <SignupForm/>
  </>
      
  ;
}

export default NewUsers;
