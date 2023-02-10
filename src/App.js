import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./HOC/Layout";
import HomePage from "./Pages/Homepage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Loading from "./Pages/Loading/Loading";
import LocationPage from "./Pages/LocationPage/LocationPage";
import MyProfile from "./Pages/MyProfile/MyProfile";
import UserAdminPage from "./Pages/AdminPage/UserAdminPage";
import AdminLayout from "./HOC/AdminLayout/AdminLayout";
import LocationAdminPage from "./Pages/AdminPage/LocationAdminPage";
import HouseAdminPage from "./Pages/AdminPage/HouseAdminPage";
import BookingAdminPage from "./Pages/AdminPage/BookingAdminPage";

function App() {
  return (
    <div>
      <Loading></Loading>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage></HomePage>
              </Layout>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Layout>
                <LoginPage></LoginPage>
              </Layout>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <Layout>
                <SignupPage></SignupPage>
              </Layout>
            }
          ></Route>
          <Route
            path="/location/:cityId"
            element={
              <Layout>
                <LocationPage></LocationPage>
              </Layout>
            }
          ></Route>

          <Route
            path="/detail/:id"
            element={
              <Layout>
                <DetailPage></DetailPage>
              </Layout>
            }
          ></Route>
          <Route
            path="/my-profile"
            element={
              <Layout>
                <MyProfile></MyProfile>
              </Layout>
            }
          ></Route>
          <Route path="/admin">
            <Route
              path="user"
              element={
                <AdminLayout>
                  <UserAdminPage></UserAdminPage>
                </AdminLayout>
              }
            />
            <Route
              path="location"
              element={
                <AdminLayout>
                  <LocationAdminPage></LocationAdminPage>
                </AdminLayout>
              }
            />
            <Route
              path="house"
              element={
                <AdminLayout>
                  <HouseAdminPage></HouseAdminPage>
                </AdminLayout>
              }
            />
            <Route
              path="booking"
              element={
                <AdminLayout>
                  <BookingAdminPage></BookingAdminPage>
                </AdminLayout>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
