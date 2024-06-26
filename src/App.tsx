import { Route, Routes } from "react-router-dom";
import useCustomRoutes from "./hooks/CustomRoutes";
import { IRoute } from "./hooks/Interfaces";
function App() {
	const customRoute = useCustomRoutes();
	return (
		<div>
			<Routes>
				{customRoute.map((elem: IRoute) => {
					return (
						<Route key={elem.key} path={elem.path} element={<elem.element />} />
					);
				})}
			</Routes>
		</div>
	);
}

export default App;
