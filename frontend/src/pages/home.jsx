import { LargeButton } from "../components/buttons";
import { HomeCard } from "../components/cards";

function home() {
	return (
		<div>
			<div style={{
				textAlign: "center",
			}}>
				<div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
					<h1 className="title" style={{textAlign: "right"}}>Castlefall</h1>
					<h1 style={{alignSelf: "center", fontFamily: "IBM Plex Mono, Courier New, monospace", fontSize: "3em", padding: "4px 0 0 5px"}}>25</h1>
				</div>
				<h3>Welcome! filler ... blah blah filler ... blah blah filler ... blah blah filler ... blah blah filler ... blah blah filler ... blah blah filler ... blah blah filler ... blah blah filler ... blah blah filler ... blah blah</h3>
				
				<div style={{border: "0.5px, var(--primary), solid"}} />
				
				<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", margin: "30px 0 30px 0" }}>
					<HomeCard cardText="Original Game" cardImg="https://www.pngall.com/wp-content/uploads/4/World-Wide-Web-PNG-Images.png" cardLink="" />
					<HomeCard cardText="Full Rules" cardImg="https://webstockreview.net/images/dictionary-clipart-book-index-11.png" cardLink="" />
					<HomeCard cardText="PRs Welcome" cardImg="https://pngimg.com/uploads/github/github_PNG80.png" cardLink="https://github.com/theNatePi/castlefall" />
				</div>
				
				<div style={{border: "0.5px, var(--primary), solid"}} />
				
				<h1>Let's Start!</h1>
				<LargeButton buttonText="Open Room" />
				<LargeButton buttonText="Join Room" />
			</div>
		</div>
	);
}

export default home;
