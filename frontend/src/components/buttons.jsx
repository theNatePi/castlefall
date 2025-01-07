import { useNavigate} from "react-router-dom";

function LargeButton({ buttonText, buttonLink } ) {
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
			letterSpacing: "5px",
			color: "var(--primary)",
			fontWeight: 700,
			margin: "10px",
		}}
		onClick={() => navigate(buttonLink)}
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
			letterSpacing: "5px",
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
