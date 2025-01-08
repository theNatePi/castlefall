import { useState } from "react";
import { LargeButton, BackButon } from "../components/buttons";
import { Input } from "../components/inputs";

function CreateRoom() {
	const [roomName, setRoomName] = useState(null);
	const [password, setPassword] = useState(null);
	
	return (
		<div className="page-with-bottom">
			<div style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				width: "100%"
			}}>
				<div style={{
					textAlign: "center",
					width: "100%",
				}}>
					<div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
						<h1 className="title" style={{textAlign: "right"}}>Castlefall</h1>
						<h1 style={{alignSelf: "center", fontFamily: "IBM Plex Mono, Courier New, monospace", fontSize: "3em", padding: "4px 0 0 5px"}}>25</h1>
					</div>
					
					<Input placeholder="Room Name" value={roomName} setValue={setRoomName}/>
					<Input placeholder="Password" value={password} setValue={setPassword} password={true} />
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
					
					<LargeButton buttonText="Start" buttonLink="/room" />
				</div>
			</div>
			<BackButon />
		</div>
	);
}

export default CreateRoom;
