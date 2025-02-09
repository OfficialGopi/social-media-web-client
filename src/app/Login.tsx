import { Button, IconButton } from "@mui/material";
import GooglecityTextLogo from "../assets/icons/GoogleCity.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

import { loginWithUserDetailsAndPassword } from "../services/users.service";
import { useLoginDispatcher } from "../hooks/dispatchHook";

const Login = () => {
  const loginDispatch = useLoginDispatcher();

  const [userDetails, setUserDetails] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginWithUserDetailsAndPassword({
      userAccessDetails: userDetails,
      password,
    })
      .then((data: any) => {
        loginDispatch(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main className="h-screen w-screen flex justify-center items-start ">
      <form
        className=" mt-12 text-white bg-black border border-white border-opacity-15 flex items-center gap-2 flex-col xs:w-[400px] w-[90%] p-2 rounded-md  "
        onSubmit={handleSubmit}
      >
        <img src={GooglecityTextLogo} className="w-2/3 mt-4" />
        <div className="w-full p-4 ">
          <label htmlFor="userDetails" className="text-base xs:text-xl" hidden>
            userDetails
          </label>
          <div className="w-full   py-1  ">
            <input
              type="text"
              name="userDetails"
              value={userDetails}
              onChange={(e) => setUserDetails(e.target.value)}
              autoComplete="false"
              className="px-2 w-full xs:text-base text-sm  rounded-tl-md rounded-tr-md pt-3 pb-1  outline-none border-b-2 focus:bg-slate-950 bg-black transition-colors duration-300 "
              placeholder="Username or Gmail"
            />
          </div>
          <div className="w-full  pt-1 border-b-2 flex relative focus:bg-slate-950">
            <input
              type={seePassword ? "text" : "password"}
              name="userDetails"
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
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "100%",
              marginTop: "20px",
            }}
          >
            Login
          </Button>
        </div>
        {/* <div className="w-full flex justify-center clas items-center gap-3 px-5">
          <span className="flex-1 bg-white py-[0.5px]"></span>
          <span>OR</span>
          <span className="flex-1 bg-white py-[0.5px]"></span>
        </div>
        <div className="p-4 w-full">
          <Button
            variant="contained"
            sx={{
              width: "100%",
              marginTop: "20px",
            }}
            onClick={() => googleLoginHandler({ setTempAuthData })}
          >
            <Google sx={{ mr: 1 }} />
            Login with Google
          </Button>
        </div> */}
      </form>
    </main>
  );
};

export default Login;
