import HomeContainer from "../Containers/Home/HomeContainer";
import FavoriteCardContainer from "../Containers/FavoriteCard/FavoriteCardContainer";
import {
  Home as HomeIcon,
  Favorite as FavoritesIcon,
} from "@material-ui/icons";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface TabsObject {
  label: string,
  route: string,
  component: React.FC,
  icon:  React.ReactElement<SvgIconProps>,
  exact: boolean,
};

export const tabs: TabsObject[] = [
  {
    label: "Home",
    route: "/Weather-App",
    component: HomeContainer,
    icon: <HomeIcon />,
    exact: true,
  },
  {
    label: "Favorites",
    route: "/Weather-App/favorites",
    component: FavoriteCardContainer,
    icon: <FavoritesIcon />,
    exact: false,
  },
];
