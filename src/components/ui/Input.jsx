import { cva } from "class-variance-authority";
import { cn } from "../utils/utils";

const inputVariants = cva(["w-full", "outline-0"], {
  variants: {
    variant: {
      searchBar: ["bg-transparent", "placeholder:text-info"],
      border: [
        "border",
        "border-info",
        "rounded-md",
        "w-full",
        "bg-transparent",
      ],
    },
    sizes: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-sm", "py-2", "px-4"],
    },
  },
  defaultVariants: {
    variant: "searchBar",
    sizes: "small",
  },
});

const Input = ({
  type,
  variant,
  sizes,
  value,
  className,
  onChange,
  name,
  placeholder,
  ...props
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <>
      {type && type == "textarea" ? (
        <textarea
          required
          onChange={handleChange}
          value={value}
          name={name}
          placeholder={placeholder}
          className={cn(inputVariants({ variant, sizes, className }))}
        />
      ) : (
        <input
          required
          name={name}
          onChange={onChange}
          type={type || "text"}
          placeholder={placeholder}
          className={cn(inputVariants({ variant, sizes, className }))}
        />
      )}
    </>
  );
};

export default Input;
