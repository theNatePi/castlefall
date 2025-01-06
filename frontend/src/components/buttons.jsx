function LargeButton({ buttonText } ) {
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
			color: "white",
			fontWeight: 700,
			margin: "10px",
		}}>
			{buttonText}
		</button>
	)
}

export { LargeButton };
