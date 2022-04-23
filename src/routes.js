import EditMovies from "./Components/EditMovies";
import LogIn from "./Components/LogIn";
import ShowAllMovies from "./Components/ShowAllMovies";
import SignUp from "./Components/SignUp";

const routes = [
    {
            path: "/login",
            name: "LogIn",
            component: LogIn,
            // layout: '/admin',
            hide: true,
            protected: false
          
    }, {
        path: "/signUp",
        name: "signUp",
        component: SignUp,
        // layout: "/admin",
        hide: true,
        protected: false
    },
    {
        path: "/movies",
        name: "showMovies",
        component: ShowAllMovies,
        // layout: "/admin",
        protected: true
      },
      {
        path: "/movies/edit",
        name: "editMovies",
        component: EditMovies,
        // layout: "/admin",
        protected: true
      },
    //   {
    //     path: "/movies/delete",
    //     name: "deleteMovies",
    //     component: DeleteMovies,
    //     layout: "/admin",
    //     protected: true
    //   },
]

export default routes;