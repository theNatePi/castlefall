import { useState } from "react";
import { Filter } from 'bad-words'
import { LargeButton, BackButon } from "../components/buttons";
import { Input } from "../components/inputs";
import { useNavigate } from "react-router";

class CustomFilter extends Filter {
	constructor() {
		super();
		this.badWords = this.list;
	}

	clean(text) {
		if (!text) {
			return "";
		}
		
		let cleanedText = text;
		
		// Check each bad word
		this.badWords.forEach(badWord => {
			// Create a case-insensitive regular expression that matches the bad word anywhere
			try {
				const regex = new RegExp(badWord, 'gi');
				
				// Replace the bad word with empty string
				cleanedText = cleanedText.replace(regex, '');
			} catch (_) {
				null;
			}
		});
		return cleanedText;
	}
}

function CreateRoom() {
	const [roomName, setRoomName] = useState('');
	const [password, setPassword] = useState('');
	const [roomAvailable, setRoomAvailable] = useState(true);
	let navigate = useNavigate();
	const filter = new CustomFilter();
	
	function onStartClick() {
		const cleanedRoomName = filter.clean(roomName);
		if (cleanedRoomName != roomName) {
			setRoomAvailable(false);
		} else {
			navigate(`/room/${roomName}`);
		}
	}
	
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
					<div style={{
						textAlign: "left",	
						fontFamily: "Times New Roman, serif",
						fontWeight: "500",
						fontSize: "1.1em",
						color: "var(--tertiary)",
						margin: "20px 0 20px 0",
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
					</div>
					{!roomAvailable ? <p style={{color: "red"}}>Room name not available</p> : null}
					<LargeButton buttonText="Start" buttonFunction={onStartClick} active={roomName ? true : false} />
				</div>
			</div>
			<BackButon />
		</div>
	);
}

export default CreateRoom;
