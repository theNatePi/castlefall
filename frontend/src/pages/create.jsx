import { BackButon } from "../components/buttons";
import { Input } from "../components/inputs";

function CreateRoom() {
	
	
	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			justifyItems: "center",
		}}>
			<div style={{
				textAlign: "center",
			}}>
				<div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
					<h1 className="title" style={{textAlign: "right"}}>Castlefall</h1>
					<h1 style={{alignSelf: "center", fontFamily: "IBM Plex Mono, Courier New, monospace", fontSize: "3em", padding: "4px 0 0 5px"}}>25</h1>
				</div>
				
				<Input placeholder="Room Name"/>
				<Input placeholder="Password" password={true} />
				<p style={{
					textAlign: "left",	
					// margin: "30px 0 20px 20px",
				}}>
					Note:<br /><br />
					<ul
						style={{
							margin: "0 0 0 0",
						}}
					>
						<li>Passwords are optional</li>
						<li>Room names and Passwords must be between 1 and 20 alphanumeric characters</li>
						<li>Passwords are not encrypted, do not use anything personal</li>
						<li>Room names must be unique</li>
						<li>Room names are case-insensitive</li>
					</ul>
				</p>
				
				<BackButon />
			</div>
		</div>
	);
}

export default CreateRoom;
