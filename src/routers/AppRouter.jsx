import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SuspenseWrapper from "../container/SuspenseWrapper";
import PageWrapper from "../container/PageWrapper";
const Root = lazy(() => import("../pages/Front/Front"));
const Login = lazy(() => import("../pages/Login/Login"));
const Home = lazy(() => import("../pages/Home/Home"));
const MovieDetails = lazy(() =>
  import("../components/MovieDetails/MovieDetails")
);
const Mylist = lazy(() => import("../pages/Mylist/Mylist"));
const Movie = lazy(() => import("../components/Movie/Movie"));
const Singlepage = lazy(() => import("../components/SingleNav/SingleNav"));
const Search = lazy(() => import("../components/Search/SearchResult"));
const Error = lazy(() => import("../pages/Error/Error"));
const Register = lazy(() => import("../pages/Register/Register"));

const AppRouters = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SuspenseWrapper>
            <Root />
          </SuspenseWrapper>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <SuspenseWrapper>
            <Login />
          </SuspenseWrapper>
        }
      ></Route>
      <Route
        path="/register"
        element={
          <SuspenseWrapper>
            <Register />
          </SuspenseWrapper>
        }
      ></Route>
      <Route
        path="/home"
        element={
          <SuspenseWrapper>
            <PageWrapper>
              <Home />
            </PageWrapper>
          </SuspenseWrapper>
        }
      ></Route>
      <Route
        path="/home/:id"
        element={
          <SuspenseWrapper>
            <MovieDetails />
          </SuspenseWrapper>
        }
      ></Route>
      <Route
        path="/tv Shows"
        element={
          <SuspenseWrapper>
            <PageWrapper>
              <Singlepage />
            </PageWrapper>
          </SuspenseWrapper>
        }
      ></Route>
      <Route
        path="/movies"
        element={
          <SuspenseWrapper>
            <PageWrapper>
              <Singlepage />
            </PageWrapper>
          </SuspenseWrapper>
        }
      ></Route>
      <Route
        path="/new & Popular"
        element={
          <SuspenseWrapper>
            <PageWrapper>
              <Singlepage />
            </PageWrapper>
          </SuspenseWrapper>
        }
      ></Route>
      <Route
        path="/my List"
        element={
          <SuspenseWrapper>
            <PageWrapper>
              <Mylist />
            </PageWrapper>
          </SuspenseWrapper>
        }
      ></Route>
      <Route
        path="/browser by languages"
        element={
          <SuspenseWrapper>
            <PageWrapper>
              <Singlepage />
            </PageWrapper>
          </SuspenseWrapper>
        }
      ></Route>
      <Route
        path="/search"
        element={
          <SuspenseWrapper>
            <PageWrapper>
              <Search />
            </PageWrapper>
          </SuspenseWrapper>
        }
      ></Route>
      <Route
        path="/watch/:id"
        element={
          <SuspenseWrapper>
            <Movie />
          </SuspenseWrapper>
        }
      ></Route>
      <Route
        path="/*"
        element={
          <SuspenseWrapper>
            <Error />
          </SuspenseWrapper>
        }
      ></Route>
    </Routes>
  );
};

export default AppRouters;
