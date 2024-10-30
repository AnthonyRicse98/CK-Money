import { Button , ButtonProps } from "@material-tailwind/react";

interface IButton extends ButtonProps {}

const CKButton = ( props : IButton ) => {
  return <Button {...props}/>
};

export { CKButton }