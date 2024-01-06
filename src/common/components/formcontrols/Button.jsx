import React from "react";
import {Loader} from "rsuite";

const Button = ({
	disabled = false,
	label = "Submit",
	type = "button",
	onClick = () => {},
	className,
	loading = false,
	buttonType = "filled"
}) => {
	return (
		<button
			disabled={disabled}
			style={{
				backgroundColor: buttonType === "filled" ? disabled ? "#B5C9FD" : "#2B64F9" : "transparent",
			}}
			type={type}
			className={className}
			onClick={onClick}
		>
			{loading ? <Loader /> : label}
		</button>
	)
}
export default Button