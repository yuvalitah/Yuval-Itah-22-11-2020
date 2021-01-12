import React, { useState } from "react";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../Components/Header/Header";
import ReactRouterPropTypes from "react-router-prop-types";

const HeaderContainer = (props) => {
  const { location } = props;
  const [selectedTab, setSelectedTab] = useState<string>(location.pathname);

  useEffect(() => {
    if (location.search.includes("?")) {
      setSelectedTab(location.pathname);
    }
  }, [location]);

  const handleSelectedTab = (event: React.ChangeEvent, newSelectedTab: string): void => {
    setSelectedTab(newSelectedTab);
  };

  return (
    <Header selectedTab={selectedTab} handleSelectedTab={handleSelectedTab} />
  );
};

HeaderContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(HeaderContainer);
