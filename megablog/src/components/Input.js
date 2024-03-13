import React, { useId } from "react";

const Input = React.forwardRef(function Input({
  label,
  type = "text",
  ...props
}, ref) {
const id = useId()

  return <div className="w-full">
    {label && <label className = "" htmlFor={id} >{label}</label>}
    <input
    type = {type}
    {...props}
    ref = {ref}
    />
  </div>;
});


export default Input;