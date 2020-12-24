import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";
import { WbSunny } from "@material-ui/icons";
import { connect } from "react-redux";

const useStyles = makeStyles({
  card: {
    marginTop: "2%",
    width: "22%",
  },
});
const FavoriteCard = (props) => {
  const classes = useStyles();
  const { navigateToCityCard, name, degrees, isCelsius, weatherText } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => navigateToCityCard(name)}>
        <CardHeader title={<Typography variant="h4">{name}</Typography>} />
        <CardContent>
          <WbSunny size="large" />
          <Typography variant="h6">
            {degrees} {isCelsius ? "\u00b0C" : "\u00b0F"}
          </Typography>
          <Typography variant="h5">{weatherText}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  isCelsius: state.UI.isCelsius,
});

export default connect(mapStateToProps)(FavoriteCard);
