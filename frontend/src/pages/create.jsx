import { BackButon } from "../components/buttons";

function CreateRoom() {
	return (
		<div>
			<div style={{
				textAlign: "center",
			}}>
				<div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
					<h1 className="title" style={{textAlign: "right"}}>Castlefall</h1>
					<h1 style={{alignSelf: "center", fontFamily: "IBM Plex Mono, Courier New, monospace", fontSize: "3em", padding: "4px 0 0 5px"}}>25</h1>
				</div>
				
				<BackButon />
			</div>
		</div>
	);
}

export default CreateRoom;
