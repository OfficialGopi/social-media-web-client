import { useState } from "react";
import { Avatar, Divider, IconButton } from "@mui/material";
import { SearchIcon } from "../../assets/icons/AsideIcons";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDialogSelector } from "./../../hooks/selectorHook";

const SearchDialog = () => {
  const { isSearchOpen } = useDialogSelector();
  const [searchVal, setSearchVal] = useState<string>("");
  const [searchResult, setSearchResult] = useState<any[]>([]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     searchUser(searchVal).then((users: any) => {
  //       setSearchResult(users);
  //     });
  //   }, 500);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [searchVal]);

  return (
    <>
      <section
        className={`h-full bg-black  duration-500 transition-all  border-r   border-white border-opacity-15 rounded-tr-3xl overflow-hidden rounded-br-2xl absolute z-[5]  top-0 left-0 ${
          isSearchOpen ? "md:w-[400px] translate-x-[73px]" : "w-0"
        }`}
      >
        <h1 className="font-bold text-2xl p-4">Search</h1>
        <div className="px-4">
          <div className="h-10 w-full relative my-6  bg-[rgb(54,54,54)] outline-none rounded-lg pl-4 pr-8">
            <input
              type="text"
              className="h-full w-full bg-inherit outline-none"
              placeholder={"Search"}
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
            {!searchVal.length && (
              <IconButton
                sx={{
                  position: "absolute",
                  color: "white",
                  right: 0,
                  top: 0,
                }}
              >
                <SearchIcon />
              </IconButton>
            )}
            {!!searchVal.length && (
              <IconButton
                onClick={() => setSearchVal("")}
                sx={{
                  position: "absolute",
                  color: "white",
                  right: 0,
                  top: 0,
                }}
              >
                <Close />
              </IconButton>
            )}
          </div>
        </div>
        <Divider
          sx={{
            bgcolor: "rgba(255,255,255,0.15)",
            position: "relative",
            width: "100%",
            margin: 0,
            padding: 0,
          }}
        />
        {searchResult.map((user, index) => (
          <SearchResult user={user} key={index} />
        ))}
      </section>
    </>
  );
};

const SearchResult = ({ user }: { user: any }) => {
  return (
    <Link
      to={`/${user.username}`}
      className="w-full gap-3 items-center hover:bg-white hover:bg-opacity-15 px-6 py-3 flex"
    >
      <Avatar src={user.profilePic} />
      <div className="flex flex-col">
        <span>{user.name}</span>
        <span className="text-sm">{user.username}</span>
      </div>
    </Link>
  );
};

export default SearchDialog;
