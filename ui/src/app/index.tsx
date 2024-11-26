import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { BaseLayout } from "../layouts/BaseLayout";
import { Home } from "../pages/home";
import { Call } from "../pages/call";
import { Login } from "../pages/authentication/login";
import { SignUp } from "../pages/authentication/signup";
import { Profile } from "../pages/profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="call" element={<Call />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
