import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <SearchResults />
      <Footer/>
    </div>
  );
};

export default HomePage;
