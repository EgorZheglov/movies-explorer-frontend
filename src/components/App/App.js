import "./App.css";
import React from "react";
import Main from "../Main/Main";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import NavMenu from "../NavMenu/NavMenu";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Spinner from "../Spinner/Spinner";
import InfoPopup from "../InfoPopup/InfoPopup";
import { UserContext } from "../contexts/UserContext";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loggedIn, setLogIn] = React.useState(true);
  const [movies, setMovies] = React.useState(null);
  const [openPopup, setIsOpen] = React.useState(false);
  const [signSucces, setSignSucces] = React.useState(true);
  const [currentUser, setUser] = React.useState({
    name: "",
    email: "",
    _id: "",
  });

  const history = useHistory();

  function handleLogOut() {
    history.push("/");
    localStorage.removeItem("jwt");
    localStorage.removeItem("checkbox");
    localStorage.removeItem("movies");
    localStorage.removeItem("value");
    setLogIn(false);

    mainApi.setToken(null);
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      setIsLoading(false);
      setLogIn(false);
      return;
    }

    mainApi
      .tokenCheck(jwt)
      .then((res) => {
        mainApi.setToken(jwt);

        moviesApi
          .getMovies()
          .then((res) => {
            setMovies(res);
            mainApi
              .getUserData()
              .then((res) => setUser(res))
              .catch((er) => {
                console.log(`ошибка загрузки данных пользователя ${er}`);
                history.push("/");
              });
          })
          .catch((er) =>
            console.log(`ошибка загрузки фильмов из стороннего api
             попробуйте позже ${er}`)
          );

        setIsLoading(false);
        setLogIn(true);
      })
      .catch((e) => {
        localStorage.removeItem("jwt");
        console.log(`ошибка проверки токена! ${e}`);
        history.push("/");
      });
  }, []);

  function handleSignIn(email, password) {
    mainApi
      .signIn(email, password)
      .then((res) => {
        setLogIn(true);

        mainApi.setToken(res.token);
        localStorage.setItem("jwt", res.token);

        moviesApi
          .getMovies()
          .then((res) => {
            setMovies(res);
            mainApi
              .getUserData()
              .then((res) => setUser(res))
              .catch((er) =>
                console.log(`ошибка загрузки данных пользователя ${er}`)
              );
          })
          .catch((er) => console.log(`ошибка загрузки фильмов ${er}`));

        history.push("/movies");
      })
      .catch((err) => {
        openPopupHandler(false);
        console.log(`Ошибка авторизации ${err}`);
        history.push("/");
      });
  }

  function handleSignUp(name, email, password) {
    mainApi
      .signUp(name, email, password)
      .then((res) => {
        handleSignIn(email, password);
        openPopupHandler(true);
      })
      .catch((err) => {
        openPopupHandler(false);
        console.log(`Ошибка Регистрации ${err}`);
      });
  }

  const updateUser = (name, email) => {
    mainApi
      .sendUserData(name, email)
      .then((res) => {
        setUser(res);
        openPopupHandler(true);
      })
      .catch((e) => {
        openPopupHandler(false);
        console.log(`ошибка обновления данных!${e}`);
      });
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const openPopupHandler = (succes) => {
    setSignSucces(succes);
    setIsOpen(true);
  };

  return (
    <div className="app__content">
      <UserContext.Provider value={currentUser}>
        {!isLoading ? (
          <>
            <Switch>
              <Route exact path="/">
                <Main loggedIn={loggedIn} />
              </Route>
              <ProtectedRoute
                path="/movies"
                component={Movies}
                movies={movies}
                loggedIn={loggedIn}
              />
              <ProtectedRoute
                path="/saved-movies"
                component={SavedMovies}
                loggedIn={loggedIn}
              />
              <ProtectedRoute
                path="/profile"
                component={Profile}
                loggedIn={loggedIn}
                handleUpdate={updateUser}
                handleLogOut={handleLogOut}
              />
              <ProtectedRoute
                path="/menu"
                component={NavMenu}
                loggedIn={loggedIn}
              />
              <Route path="/sign-up">
                <Register loggedIn={loggedIn} handleSignUp={handleSignUp} />
              </Route>
              <Route path="/login">
                <Register loggedIn={loggedIn} handleSignIn={handleSignIn} />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </>
        ) : (
          <Spinner />
        )}
      </UserContext.Provider>
      <InfoPopup
        isSuccesed={signSucces}
        isOpen={openPopup}
        onClose={closePopup}
      />
    </div>
  );
}

export default App;
