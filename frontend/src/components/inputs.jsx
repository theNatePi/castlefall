import React, { useState } from 'react';
import "./styles/inputs.css";

function Input({placeholder, password = false, maxLen = 20 }) {
	const [inputValue, setInputValue] = useState(null);
	const [showPassword, setShowPassword] = useState(false);
	
	function passwordButton() {
		if (inputValue) {
			setShowPassword(!showPassword);
		}
	}
	
	function validateInput(val) {
    if (val.length <= maxLen) {
        const validatedVal = val.replace(/[^a-zA-Z0-9]/g, '');
        setInputValue(validatedVal.length > 0 ? validatedVal : "");
    }
	}
	
	return (
		<div style={{width: "300px"}}>
			{inputValue ? <h3 className='above-p'>{placeholder}</h3> : null}
			<div style={{display: "flex", flexDirection: "row"}}>
				<input 
					type={(password && !showPassword) ? "password" : "text"}
					value={inputValue}
					placeholder={placeholder}
					className={password ? "password-input" : "input"}
					onChange={(e) => validateInput(e.target.value)}
				/>
				{password ? 
					<button 
						onClick={() => passwordButton()}
						className={inputValue ? "password-button" : "password-button-inactive"}
					>
						{showPassword ? "Hide" : "Show"}
					</button>
					: null	
				}
			</div>
		</div>
	);
}

export { Input };
