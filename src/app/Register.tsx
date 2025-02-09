import React, { useState } from "react";
import GooglecityTextLogo from "../assets/icons/GoogleCity.svg";
import { Button, IconButton } from "@mui/material";
import {
  // CancelOutlined,
  // CheckCircleOutline,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
// import { useUserSelector } from "../hooks/selectorHook";
const Register = () => {
  // const { user } = useUserSelector();
  // const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <main className="h-screen w-screen flex justify-center items-start ">
        <form
          className=" mt-12 text-white bg-black border border-white border-opacity-15 flex items-center gap-2 flex-col xs:w-[400px] w-[90%] p-2 rounded-md  "
          onSubmit={handleSubmit}
        >
          <img src={GooglecityTextLogo} className="w-2/3 mt-4" />
          <div className="w-full p-4 ">
            <label htmlFor="username" className="text-base xs:text-xl" hidden>
              Username
            </label>
            <div className="w-full  pt-1 border-b-2 flex relative focus:bg-slate-950">
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="false"
                className="px-2 w-full xs:text-base text-sm  rounded-tl-md rounded-tr-md pt-3 pb-1  outline-none border-b-2 focus:bg-slate-950 bg-black transition-colors duration-300 "
                placeholder="Username"
              />
              {/* <IconButton
                sx={{
                  color: "white",
                  position: "absolute",
                  right: 0,
                }}
              >
                {usernameAvailable ? (
                  <CheckCircleOutline
                    sx={{
                      color: "green",
                    }}
                  />
                ) : (
                  <CancelOutlined
                    sx={{
                      color: "red",
                    }}
                  />
                )}
              </IconButton> */}
            </div>
            <div className="w-full  pt-1 border-b-2 flex relative focus:bg-slate-950">
              <input
                type={seePassword ? "text" : "password"}
                name="username"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="false"
                className="px-2 rounded-tl-md rounded-tr-md xs:text-base text-sm pr-[44px] w-full pt-3 pb-1  outline-none bg-black focus:bg-slate-950  transition-colors duration-300 "
                placeholder="Enter your password"
              />
              <IconButton
                sx={{
                  color: "white",
                  position: "absolute",
                  right: 0,
                }}
                onClick={() => setSeePassword(!seePassword)}
              >
                {!seePassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
            <div className="w-full  pt-1 border-b-2 flex relative focus:bg-slate-950">
              <input
                type={seePassword ? "text" : "password"}
                name="username"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="false"
                className="px-2 rounded-tl-md rounded-tr-md xs:text-base text-sm pr-[44px] w-full pt-3 pb-1  outline-none bg-black focus:bg-slate-950  transition-colors duration-300 "
                placeholder="Confirm your password"
              />
              <IconButton
                sx={{
                  color: "white",
                  position: "absolute",
                  right: 0,
                }}
                onClick={() => setSeePassword(!seePassword)}
              >
                {!seePassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "100%",
                marginTop: "20px",
              }}
            >
              Register
            </Button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Register;
