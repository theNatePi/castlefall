import React, { useState } from 'react';
import "./styles/inputs.css";

function Input({placeholder, setValue, value = null, password = false, maxLen = 20 }) {
	const [showPassword, setShowPassword] = useState(false);
	
	function passwordButton() {
		if (value) {
			setShowPassword(!showPassword);
		}
	}
	
	function validateInput(val) {
    if (val.length <= maxLen) {
        const validatedVal = val.replace(/[^a-zA-Z0-9]/g, '');
        setValue(validatedVal.length > 0 ? validatedVal : "");
    }
	}
	
	return (
		<div style={{width: "100%"}}>
			{value ? <h3 className='above-p'>{placeholder}</h3> : null}
			<div style={{display: "flex", flexDirection: "row", width: "100%"}}>
				<input 
					type={(password && !showPassword) ? "password" : "text"}
					value={value}
					placeholder={placeholder}
					className={password ? "password-input" : "input"}
					onChange={(e) => validateInput(e.target.value)}
				/>
				{password ? 
					<button 
						onClick={() => passwordButton()}
						className={value ? "password-button" : "password-button-inactive"}
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
