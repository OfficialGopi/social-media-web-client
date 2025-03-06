import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../utils/ProtectedRoute";
import { useLoginDispatcher, useLogoutDispatcher } from "../hooks/dispatchHook";
import { autoLogin } from "../services/users.service";
import { useUserSelector } from "../hooks/selectorHook";

import {
  getAccessToken,
  getRefreshToken,
  resetTokens,
} from "../constants/tokens.constants";

const Login = lazy(() => import("../app/Login.tsx"));
const Register = lazy(() => import("../app/Register"));
const Home = lazy(() => import("../app/Home"));
const Profile = lazy(() => import("../app/Profile"));
const Reels = lazy(() => import("../app/Reels"));
const Explore = lazy(() => import("../app/Explore"));
const Inbox = lazy(() => import("../app/Inbox.tsx"));
const Direct = lazy(() => import("../app/Direct.tsx"));
const Message = lazy(() => import("../app/Message.tsx"));

const App = () => {
  const [inLoading, setLoading] = useState(true);
  const login = useLoginDispatcher();
  const logout = useLogoutDispatcher();

  const user = useUserSelector();

  useEffect(() => {
    setLoading(true);
    if (!user.isAuthenticated) {
      if (getAccessToken() && getRefreshToken()) {
        autoLogin()
          .then((data: any) => {
            if (data.success) {
              login(data.data.info);
            } else {
              resetTokens();
              logout();
            }
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [user.isAuthenticated]);

  return (
    <Router>
      <Suspense fallback={<>Loding</>}>
        <Routes>
          {inLoading ? (
            <Route path="*" element={<>Loading</>} />
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
                <Route element={<Direct isInChat={false} />}>
                  <Route path="/direct/inbox/" element={<Inbox />} />
                </Route>
                <Route element={<Direct isInChat={true} />}>
                  <Route path="/direct/chat/:chatId" element={<Message />} />
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
