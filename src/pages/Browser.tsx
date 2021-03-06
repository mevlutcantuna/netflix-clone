import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Home from "../components/home/Home";
import Search from "../components/search/Search";

const Browser: React.FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.trim() !== "") {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [search]);

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        handleChangeSearch={handleChangeSearch}
      />
      {!isSearching ? <Home /> : <Search search={search} />}
    </>
  );
};

export default Browser;
