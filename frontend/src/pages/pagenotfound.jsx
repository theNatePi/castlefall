import { BackButon } from "../components/buttons";
import { HomeCard } from "../components/cards";
import prSvg from '../assets/pr.svg';

function NotFound() {
	return (
		<div>
			<div style={{
				textAlign: "center",
			}}>
				<div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
					<h1 className="title" style={{textAlign: "right"}}>Castlef</h1>
					<h1 className="title" style={{textAlign: "right", paddingTop: "10px"}}>a</h1>
					<h1 className="title" style={{textAlign: "right", paddingTop: "20px"}}>l</h1>
					<h1 className="title" style={{textAlign: "right", paddingTop: "30px"}}>l</h1>
					<h1 style={{alignSelf: "center", fontFamily: "IBM Plex Mono, Courier New, monospace", fontSize: "3em", padding: "44px 0 0 0"}}>2</h1>
					<h1 style={{alignSelf: "center", fontFamily: "IBM Plex Mono, Courier New, monospace", fontSize: "3em", padding: "90px 0 0 0"}}>5</h1>
				</div>
				<div style={{border: "0.5px var(--primary) solid", margin: "30px 0 20px 0"}} />
				<h3 style={{fontSize: "5em", marginTop: "0em"}}>404</h3>
				<h3 style={{fontSize: "2em", marginTop: "-1.5em"}}>Page Not Found</h3>
				<BackButon />
				<div style={{border: "0.5px var(--primary) solid", margin: "30px 0 20px 0"}} />
				<div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
					<p>Did a bug get you here?</p>
					<HomeCard cardText="" cardImg={prSvg} cardLink="https://github.com/theNatePi/castlefall" />
				</div>
			</div>
		</div>
	);
}

export default NotFound;
