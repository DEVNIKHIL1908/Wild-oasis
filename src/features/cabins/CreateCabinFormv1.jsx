import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";


function CreateCabinForm() {
  const  {register, handleSubmit,reset, getValues,formState} = useForm()
  const {errors}  = formState
  const queryClient = useQueryClient()
  const {isLoading,mutate} = useMutation({
    mutationFn: createEditCabin,
    onSuccess:()=>{
      toast.success("New Cabin Successfully created")
      queryClient.invalidateQueries({
        queryKey: ["cabins"],       
      })
      reset()
    },
    onError: (err)=>toast.error("Failed to add cabin")
  })
  

  function onSubmit(data){
    mutate({...data, image: data.image[0]})
  }

  function onError(error){
    console.log(error)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit , onError)}>

      <FormRow label="Cabin Name" errors={errors?.name?.message}>
      <Input type="text" id="name" {...register("name", {
          required : "This field is required"
        })} />
      </FormRow>

      <FormRow label="Max Cpacity" errors={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity"  {...register("maxCapacity" ,{required : "This field is required", min: {
          value: 1,
          message: "Cpacity Should Be greater than 1"
        }})}/>
      </FormRow>

      <FormRow label="Regular Price" errors={errors?.regularPrice?.message}>
        <Input type="number" id="regularPrice"  {...register("regularPrice",{required : "This field is required", min:{
          value: 10,
          message: "Price should be greater than 10"
        }})}/>
      </FormRow>

      <FormRow label="Discount" errors={errors?.maxCapacity?.message}>
        <Input type="number" id="discount" defaultValue={0} {...register("discount",{required : "This field is required", validate: (value)=> value <= getValues().regularPrice || "Discount should less than regular price"})}/>
        {errors?.discount?.message && <Error>{errors.discount.message}</Error>}
        
      </FormRow>

      <FormRow  label="Desc. for website" errors={errors?.description?.message}>
        <Textarea type="number" id="description" defaultValue="" {...register("description",{required : "This field is required"})}/>        
      </FormRow>

      <FormRow label="Cabin Image" errors={errors?.image?.message}>
        <FileInput id="image" type="file" accept="image/*" {...register("image",{required : "This field is required"})} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variations="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}  variations="primary">Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
