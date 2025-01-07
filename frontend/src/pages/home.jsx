import { LargeButton } from "../components/buttons";
import { HomeCard } from "../components/cards";
import webSvg from '../assets/web.svg';
import bookSvg from '../assets/book.svg';
import prSvg from '../assets/pr.svg';


function Home() {
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
					<HomeCard cardText="Original Game" cardImg={webSvg} cardLink="https://www.bpchen.com/castlefall/#lobby" />
					<HomeCard cardText="Full Rules" cardImg={bookSvg} cardLink="/rules" />
					<HomeCard cardText="PRs Welcome" cardImg={prSvg} cardLink="https://github.com/theNatePi/castlefall" />
				</div>
				
				<div style={{border: "0.5px, var(--primary), solid"}} />
				
				<h1>Let's Start!</h1>
				<LargeButton buttonText="Open Room" buttonLink="/create"/>
				<LargeButton buttonText="Join Room" buttonLink="/join" />
			</div>
		</div>
	);
}

export default Home;
