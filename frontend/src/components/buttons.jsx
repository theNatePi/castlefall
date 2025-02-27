import { useNavigate} from "react-router-dom";

function LargeButton({ buttonText, buttonLink=undefined, buttonFunction=undefined, active=true } ) {
	let navigate = useNavigate();
	
	if (!buttonLink && !buttonFunction) {
		throw new Error("LargeButton must have a buttonLink or buttonFunction prop");
	}
	
	function handleClick() {
		if (active) {
			if (buttonLink) {
				navigate(buttonLink);
			} else {
				buttonFunction();
			}
		}
	}
	
	return (
		<button style={{
			height: "50px",
			width: "300px",
			backgroundColor: "var(--tertiary)",
			border: "var(--primary) 2px solid",
			borderRadius: "5px",
			fontSize: "25px",
			fontFamily: "Times New Roman, serif",
			letterSpacing: "3px",
			color: active ? "var(--primary)" : "grey",
			fontWeight: 700,
			marginTop: "10px",
			marginBottom: "10px",
		}}
		onClick={() => handleClick()}
		>
			{buttonText}
		</button>
	)
}

function BackButon() {
	let navigate = useNavigate();

	return (
		<button style={{
			height: "50px",
			width: "300px",
			backgroundColor: "var(--tertiary)",
			border: "var(--primary) 2px solid",
			borderRadius: "5px",
			fontSize: "25px",
			fontFamily: "Times New Roman, serif",
			letterSpacing: "3px",
			color: "var(--primary)",
			fontWeight: 700,
			margin: "10px",
		}}
		onClick={() => navigate(-1)}
		>
			Back
		</button>
	)
}

export { LargeButton, BackButon };
