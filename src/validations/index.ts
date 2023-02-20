import * as Yup from "yup";

export const formValidationSchema = Yup.object({
  costOfItem: Yup.number().typeError("Must be a number").required("Required"),
  markup: Yup.number().typeError("Must be a number").required("Required"),
});
