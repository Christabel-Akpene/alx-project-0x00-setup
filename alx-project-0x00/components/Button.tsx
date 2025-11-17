import { ButtonProps } from "@/interfaces"

const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-3 py-1 text-base",
    large: "px-3 py-1 text-lg"
};
const shapes = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-lg": "rounded-lg"
};


const Button = ({title, size="small", shape="rounded-sm"}: ButtonProps) => {
     

const buttonSize = sizes[size]
const buttonShape = shapes[shape]


  return (
    <div>
        <button className={`border text-lg mt-3 bg-blue-500 text-white ${buttonShape} ${buttonSize}`}>{title}</button>
    </div>
  )
}

export default Button