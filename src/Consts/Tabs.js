import HomeContainer from "../Containers/Home/HomeContainer";
import FavoriteCardContainer from "../Containers/FavoriteCard/FavoriteCardContainer";
import {
  Home as HomeIcon,
  Favorite as FavoritesIcon,
} from "@material-ui/icons";

export const tabs = [
  {
    label: "Home",
    route: "/",
    component: HomeContainer,
    icon: <HomeIcon />,
    exact: true,
  },
  {
    label: "Favorites",
    route: "/favorites",
    component: FavoriteCardContainer,
    icon: <FavoritesIcon />,
    exact: false,
  },
];
