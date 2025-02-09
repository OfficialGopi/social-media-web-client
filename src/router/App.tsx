import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../utils/ProtectedRoute";
import Loader from "../components/Loader/Loader";
import { useLoginDispatcher, useLogoutDispatcher } from "../hooks/dispatchHook";
import { autoLogin } from "../services/users.service";
import { useUserSelector } from "../hooks/selectorHook";
import { Toaster } from "react-hot-toast";

const Login = lazy(() => import("../app/Login"));
const Register = lazy(() => import("../app/Register"));
const Home = lazy(() => import("../app/Home"));
const Profile = lazy(() => import("../app/Profile"));
const Reels = lazy(() => import("../app/Reels"));
const Inbox = lazy(() => import("../app/Inbox"));
const Explore = lazy(() => import("../app/Explore"));
const ChatSection = lazy(() => import("../components/specific/ChatSection"));
const NoChat = lazy(() => import("../components/specific/NoChat"));

const App = () => {
  const [inLoading, setLoading] = useState(true);
  const login = useLoginDispatcher();
  const logout = useLogoutDispatcher();

  const user = useUserSelector();

  useEffect(() => {
    if (!user.isAuthenticated) {
      if (
        localStorage.getItem("access-token") &&
        localStorage.getItem("refresh-token")
      ) {
        autoLogin()
          .then((data) => {
            if (data.success) {
              login(data.data.info);
            } else {
              localStorage.removeItem("access-token");
              localStorage.removeItem("refresh-token");
              logout();
            }
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    }
  }, [user.isAuthenticated]);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Toaster position="top-right" />
        <Routes>
          {inLoading ? (
            <Route path="*" element={<Loader />} />
          ) : (
            <>
              <Route
                element={
                  <ProtectedRoute user={!user.isAuthenticated} path="/" />
                }
              >
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              <Route
                element={
                  <ProtectedRoute user={user.isAuthenticated} path="/login" />
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="/:username" element={<Profile />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/reels" element={<Reels />} />
                <Route path="/direct/inbox/" element={<Inbox />}>
                  <Route path="" element={<NoChat />} />
                  <Route path=":id" element={<ChatSection />} />
                </Route>
                <Route path="*" element={<>404 Not Found</>} />
              </Route>
            </>
          )}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
