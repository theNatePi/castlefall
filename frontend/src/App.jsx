import { 
	Navigate,
	Route,
	BrowserRouter as Router, 
	Routes 
} from "react-router-dom";

import "./App.css";
import Home from "./pages/home.jsx";
import Rules from "./pages/rules.jsx";
import CreateRoom from "./pages/create.jsx";

import NotFound from "./pages/pagenotfound.jsx";

const App = () => {
	return (
		<div className="app" style={{display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "98vh"}}>
			<Router>
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="/home" element={<Home />} />
					<Route path="/rules" element={<Rules />} />
					<Route path="/create" element={<CreateRoom />} />
					
					<Route
            path="*"
            element={<NotFound />}
          />
				</Routes>
			</Router>
			<p style={{marginTop: "auto", fontStyle: "italic", alignSelf: "center", fontSize: "12px", paddingTop: "30px"}}>2025 <a href="https://github.com/theNatePi/castlefall">theNatePi</a> | Client Version: 0.1.0 | Server Version: 0.1.0</p>
		</div>
	);
};

export default App;
