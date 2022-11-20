import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import About from "./components/About";
import Stack from "./components/Stack";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <About />,
		children: [
			{
				path: "/about",
				element: <About />,
			}
		]
	},
	{
		path: "stack",
		element: <Stack />,
	},
	{
		path: "portfolio",
		element: <Portfolio />,
	},
	{
		path: "contact",
		element: <Contact />,
	}
]);

export {
	router,
	RouterProvider
}