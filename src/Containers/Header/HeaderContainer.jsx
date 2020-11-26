import React, { useState } from "react";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../Components/Header/Header";

const HeaderContainer = (props) => {
  const { location } = props;
  const [selectedTab, setSelectedTab] = useState(location.pathname);

  useEffect(() => {
    if (location.search.includes("?")) {
      setSelectedTab(location.pathname);
    }
  }, [location]);

  const handleSelectedTab = (event, newSelectedTab) => {
    setSelectedTab(newSelectedTab);
  };

  return (
    <Header selectedTab={selectedTab} handleSelectedTab={handleSelectedTab} />
  );
};

export default withRouter(HeaderContainer);
