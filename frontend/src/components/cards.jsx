function HomeCard({ cardText, cardImg, cardLink } ) {
	return (
		<a 
			href={cardLink} 
			style={{textDecoration: "none"}}
		>
		<div style={{
			display: "flex",
			flexDirection: "column",
			width: "5em",
		}}
		>
			<div style={{
				background: "var(--primary)",
				border: "var(--secondary) 2px solid",
				borderRadius: "10px",
				width: "100%",
				height: "5em",
				justifyContent: "center",
				alignItems: "center",
				display: "flex",
			}}>
				<img src={cardImg} alt="card" style={{
					width: "80%",
					height: "80%",
				}} />
			</div>
			<h3 style={{
				margin: "0",
				paddingTop: "5px",
				fontSize: "1em",
			}}>
				{cardText}
			</h3>
		</div>
		</a>
	)
}

export { HomeCard };
