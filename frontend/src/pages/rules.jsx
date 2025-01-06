import { BackButon } from "../components/buttons";

function Rules() {
	return (
		<div>
			<div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "-2em"}}>
				<h1 className="title" style={{textAlign: "right"}}>Castlefall</h1>
				<h1 style={{alignSelf: "center", fontFamily: "IBM Plex Mono, Courier New, monospace", fontSize: "3em", padding: "4px 0 0 5px"}}>25</h1>
			</div>
			
			<h1>Rules</h1>
			
			<h3>Welcome! filler ... blah blah filler ... blah blah filler ... blah blah filler ... 
				blah blah filler ... blah blah filler ... blah blah filler ... blah blah filler ... 
				blah blah filler ... blah blah filler ... blah blah
				filler ... blah blah filler ... blah blah filler ... blah blah filler ... 
				blah blah filler ... blah blah filler ... blah blah filler ... blah blah filler ... 
				blah blah filler ... blah blah filler ... blah blah
				filler ... blah blah filler ... blah blah filler ... blah blah filler ... 
				blah blah filler ... blah blah filler ... blah blah filler ... blah blah filler ... 
				blah blah filler ... blah blah filler ... blah blah
			</h3>
			<div style={{border: "0.5px, var(--primary), solid", margin: "30px 0 20px 0"}} />
			
			<div style={{width: "100%", justifyContent: "center", display: "flex"}}>
				<BackButon />
			</div>
		</div>
	);
}

export default Rules;
