import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";
import { withNamespaces } from "react-i18next";
import { colors } from "../../theme";

const styles = (theme) => ({
  root: {
    flex: 1,
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  card: {
    position: "relative",
    flex: "1",
    height: "25vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    borderRadius: "0px",
    transition: "background-color 0.2s linear",
    [theme.breakpoints.up("sm")]: {
      height: "100vh",
      minHeight: "50vh",
    },
  },

  earn: {
    backgroundColor: "#f5ebf9",
    "&:hover": {
      backgroundColor: colors.pink,
      "& .notitle": {
        display: "none",
      },
      "& .title": {
        color: colors.white,
        width: "50%",
        margin: "auto",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "600",
        textTransform: "uppercase",
        marginTop: "7%",
      },
      "& .icon": {
        marginBottom: "55%",
        display: "block",
      },
      "& .noicon": {
        marginBottom: "55%",
        display: "none",
      },
      "& .description": {
        width: "50%",
        margin: "auto",
        marginTop: "-7%",
        fontSize: "22px",
        fontWeight: "400",
        fontFamily: "Montserrat",
        display: "block",
        color: colors.white,
        padding: "60px",
        textAlign: "center",
      },
      "& hr": {
        display: "block",
        border: "1px solid white",
        borderRadius: "5px",
        width: "10%",
      },
      "& .circle": {
        display: "block",
        "& img": {
          position: "absolute",
          margin: "auto",
          bottom: "55px",
          right: "53%",
          width: "123px",
          height: "132px",
          opacity: "0.12",
        },
      },
    },
    "& .notitle": {
      color: colors.pink,
      fontSize: "30px",
      fontWeight: "500",
      textTransform: "uppercase",
      marginTop: "13px",
    },
    "& .icon": {
      display: "none",
    },
    "& .description": {
      display: "none",
    },
    "& hr": {
      display: "block",
      border: "1px solid",
      borderColor: colors.pink,
      borderRadius: "5px",
      width: "70px",
    },
    "& .circle": {
      display: "none",
    },
  },

  zap: {
    backgroundColor: "#e4edfa",
    "&:hover": {
      backgroundColor: colors.blue,
      "& .notitle": {
        display: "none",
      },
      "& .title": {
        color: colors.white,
        width: "50%",
        margin: "auto",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "600",
        textTransform: "uppercase",
        marginTop: "7%",
      },
      "& .icon": {
        marginBottom: "55%",
        display: "block",
      },
      "& .noicon": {
        marginBottom: "55%",
        display: "none",
      },
      "& .description": {
        width: "50%",
        margin: "auto",
        marginTop: "-7%",
        fontSize: "22px",
        fontWeight: "400",
        fontFamily: "Montserrat",
        display: "block",
        color: colors.white,
        padding: "60px",
        textAlign: "center",
      },
      "& hr": {
        display: "block",
        border: "1px solid white",
        borderRadius: "5px",
        width: "10%",
      },
      "& .circle": {
        display: "block",
        "& img": {
          position: "absolute",
          margin: "auto",
          bottom: "55px",
          right: "53%",
          width: "123px",
          height: "132px",
          opacity: "0.12",
        },
      },
    },
    "& .notitle": {
      color: colors.blue,
      fontSize: "30px",
      fontWeight: "500",
      textTransform: "uppercase",
      marginTop: "13px",
    },
    "& .icon": {
      display: "none",
    },
    "& .description": {
      display: "none",
    },
    "& hr": {
      display: "block",
      border: "1px solid",
      borderColor: colors.blue,
      borderRadius: "5px",
      width: "70px",
    },
    "& .circle": {
      display: "none",
    },
  },

  apr: {
    backgroundColor: "#e6e6e8",
    "&:hover": {
      backgroundColor: colors.lightBlack,
      "& .notitle": {
        display: "none",
      },
      "& .title": {
        color: colors.white,
        width: "50%",
        margin: "auto",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "600",
        textTransform: "uppercase",
        marginTop: "7%",
      },
      "& .icon": {
        marginBottom: "55%",
        display: "block",
      },
      "& .noicon": {
        marginBottom: "55%",
        display: "none",
      },
      "& .description": {
        width: "50%",
        margin: "auto",
        marginTop: "-7%",
        fontSize: "22px",
        fontWeight: "400",
        fontFamily: "Montserrat",
        display: "block",
        color: colors.white,
        padding: "60px",
        textAlign: "center",
      },
      "& hr": {
        display: "block",
        border: "1px solid white",
        borderRadius: "5px",
        width: "70px",
      },
      "& .circle": {
        display: "block",
        "& img": {
          position: "absolute",
          margin: "auto",
          bottom: "55px",
          right: "53%",
          width: "123px",
          height: "132px",
          opacity: "0.12",
        },
      },
    },
    "& .notitle": {
      color: colors.lightBlack,
      fontSize: "30px",
      fontWeight: "500",
      textTransform: "uppercase",
      marginTop: "13px",
    },
    "& .icon": {
      color: colors.lightBlack,
      display: "none",
    },
    "& .description": {
      display: "none",
    },
    "& hr": {
      display: "block",
      border: "1px solid",
      borderColor: colors.lightBlack,
      borderRadius: "5px",
      width: "70px",
    },
    "& .circle": {
      display: "none",
    },
  },

  vault: {
    backgroundColor: "#f6ebed",
    "&:hover": {
      backgroundColor: colors.tomato,
      "& .notitle": {
        display: "none",
      },
      "& .title": {
        color: colors.white,
        width: "50%",
        margin: "auto",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "600",
        textTransform: "uppercase",
        marginTop: "7%",
      },
      "& .icon": {
        marginBottom: "55%",
        display: "block",
      },
      "& .noicon": {
        marginBottom: "55%",
        display: "none",
      },
      "& .description": {
        width: "50%",
        margin: "auto",
        marginTop: "-7%",
        fontSize: "22px",
        fontWeight: "400",
        fontFamily: "Montserrat",
        display: "block",
        color: colors.white,
        padding: "60px",
        textAlign: "center",
      },
      "& hr": {
        display: "block",
        border: "1px solid white",
        borderRadius: "5px",
        width: "10%",
      },
      "& .circle": {
        display: "block",

        "& img": {
          position: "absolute",
          margin: "auto",
          bottom: "55px",
          right: "53%",
          width: "123px",
          height: "132px",
          opacity: "0.12",
        },
      },
    },
    "& .notitle": {
      color: colors.tomato,
      fontSize: "30px",
      fontWeight: "500",
      textTransform: "uppercase",
      marginTop: "13px",
    },
    "& .icon": {
      display: "none",
    },
    "& .description": {
      display: "none",
    },
    "& hr": {
      display: "block",
      border: "1px solid",
      borderColor: colors.tomato,
      borderRadius: "5px",
      width: "70px",
    },
    "& .circle": {
      display: "none",
    },
  },

  cover: {
    backgroundColor: "#dff5f1",
    "&:hover": {
      backgroundColor: colors.compoundGreen,
      "& .notitle": {
        display: "none",
      },
      "& .title": {
        color: colors.white,
        width: "50%",
        margin: "auto",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "600",
        textTransform: "uppercase",
        marginTop: "7%",
      },
      "& .icon": {
        marginBottom: "55%",
        display: "block",
      },
      "& .noicon": {
        marginBottom: "55%",
        display: "none",
      },
      "& .description": {
        width: "50%",
        margin: "auto",
        marginTop: "-7%",
        fontSize: "22px",
        fontWeight: "400",
        fontFamily: "Montserrat",
        display: "block",
        color: colors.white,
        padding: "60px",
        textAlign: "center",
      },
      "& hr": {
        display: "block",
        border: "1px solid white",
        borderRadius: "5px",
        width: "10%",
      },
      "& .circle": {
        display: "block",

        "& img": {
          position: "absolute",
          margin: "auto",
          bottom: "55px",
          right: "53%",
          width: "123px",
          height: "132px",
          opacity: "0.12",
        },
      },
    },
    "& .notitle": {
      color: colors.compoundGreen,
      fontSize: "30px",
      fontWeight: "500",
      textTransform: "uppercase",
      marginTop: "13px",
    },
    "& .icon": {
      color: colors.lightBlack,
      display: "none",
    },
    "& .description": {
      display: "none",
    },
    "& hr": {
      display: "block",
      border: "1px solid",
      borderColor: colors.compoundGreen,
      borderRadius: "5px",
      width: "70px",
    },
    "& .circle": {
      display: "none",
    },
  },

  /*cover: {
    backgroundColor: "#dff5f1",
    "&:hover": {
      backgroundColor: colors.compoundGreen,
      "& .title": {
        color: colors.white,
      },
      "& .icon": {
        color: colors.white,
      },
      "& .description": {
        display: "block",
        color: colors.white,
        padding: "48px",
        textAlign: "center",
      },
    },
    "& .title": {
      color: colors.compoundGreen,
      fontSize: "30px",
      fontWeight: "500",
      textTransform: "uppercase",
    },
    "& .icon": {
      color: colors.compoundGreen,
    },
    "& .description": {
      display: "none",
    },
  },*/

  stats: {
    backgroundColor: "#fff2dd",
    "&:hover": {
      backgroundColor: "#FDB643",
      "& .notitle": {
        display: "none",
      },
      "& .title": {
        color: colors.white,
        width: "50%",
        margin: "auto",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "600",
        textTransform: "uppercase",
        marginTop: "7%",
      },
      "& .icon": {
        marginBottom: "55%",
        display: "block",
      },
      "& .noicon": {
        marginBottom: "55%",
        display: "none",
      },
      "& .description": {
        width: "50%",
        margin: "auto",
        marginTop: "-7%",
        fontSize: "22px",
        fontWeight: "400",
        fontFamily: "Montserrat",
        display: "block",
        color: colors.white,
        padding: "60px",
        textAlign: "center",
      },
      "& hr": {
        display: "block",
        border: "1px solid white",
        borderRadius: "5px",
        width: "10%",
      },
      "& .circle": {
        display: "block",

        "& img": {
          position: "absolute",
          margin: "auto",
          bottom: "55px",
          right: "53%",
          width: "123px",
          height: "132px",
          opacity: "0.12",
        },
      },
    },
    "& .notitle": {
      color: "#FDB643",
      fontSize: "30px",
      fontWeight: "500",
      textTransform: "uppercase",
      marginTop: "13px",
    },
    "& .icon": {
      color: colors.lightBlack,
      display: "none",
    },
    "& .description": {
      display: "none",
    },
    "& hr": {
      display: "block",
      border: "1px solid",
      borderColor: "#FDB643",
      borderRadius: "5px",
      width: "70px",
    },
    "& .circle": {
      display: "none",
    },
  },

  title: {
    padding: "12px",
    paddingBottom: "0px",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "12px",
    },
  },
  icon: {
    width: "152px",
    height: "163px",
  },
  noicon: {
    width: "152px",
    height: "163px",
  },
  link: {
    textDecoration: "none",
  },
  circleTop: {
    width: "194%",
    height: "52%",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.2)",
    position: "absolute",
    top: "-27%",
    left: "0",
  },
  circleBottom: {
    borderRadius: "50%",
    width: "650px",
    height: "465px",
    backgroundColor: "rgba(255,255,255,0.2)",
    position: "absolute",
    bottom: "-70px",
  },
});

class Platform extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    const { classes, t } = this.props;

    return (
      <div className={classes.root}>
        <Card
          className={`${classes.card} ${classes.apr}`}
          onClick={() => {
            this.nav("dashboard");
          }}
        >
          <div className={`${classes.circleTop} circle`}>
            <img
              alt=""
              src={require("../../assets/Dashbord_White.svg")}
              height="24px"
              className={`${classes.icon} icon`}
            />
          </div>
          <img
            alt=""
            src={require("../../assets/Dashboard_icon.svg")}
            height="24px"
            className={`${classes.noicon} noicon`}
          />
          <img
            alt=""
            src={require("../../assets/Dashbord_White.svg")}
            height="24px"
            className={`${classes.icon} icon`}
          />
          <Typography variant={"h3"} className={`${classes.notitle} notitle`}>
            <hr />
            Dashboard
          </Typography>
          <div className={`${classes.circleBottom} circle`}>
            <Typography variant={"h3"} className={`${classes.title} title`}>
              Dashboard
            </Typography>
            <hr />
            <Typography
              variant={"h4"}
              className={`${classes.description} description`}
            >
              {
                "Get a quick glance at how your portfolio is growing while invested in PLTX's products."
              }
            </Typography>
          </div>
        </Card>

        <Card
          className={`${classes.card} ${classes.vault}`}
          onClick={() => {
            this.nav("vaults");
          }}
        >
          <div className={`${classes.circleTop} circle`}>
            <img
              alt=""
              src={require("../../assets/vault_White.svg")}
              height="24px"
              className={`${classes.icon} icon`}
            />
          </div>
          <img
            alt=""
            src={require("../../assets/Vaults_icon.svg")}
            height="24px"
            className={`${classes.noicon} noicon`}
          />
          <img
            alt=""
            src={require("../../assets/vault_White.svg")}
            height="24px"
            className={`${classes.icon} icon`}
          />
          <Typography variant={"h3"} className={`${classes.notitle} notitle`}>
            <hr />
            {t("Home.Vaults")}
          </Typography>
          <div className={`${classes.circleBottom} circle`}>
            <Typography variant={"h3"} className={`${classes.title} title`}>
              {t("Home.Vaults")}
            </Typography>
            <hr />
            <Typography
              variant={"h4"}
              className={`${classes.description} description`}
            >
              {
                "Vaults follow unique strategies that are designed to maximize the yield of the deposited asset and minimize risk."
              }
            </Typography>
          </div>
        </Card>

        <Card
          className={`${classes.card} ${classes.earn}`}
          onClick={() => {
            this.nav("earn");
          }}
        >
          <div className={`${classes.circleTop} circle`}>
            <img
              alt=""
              src={require("../../assets/Earn_White.svg")}
              height="24px"
              className={`${classes.icon} icon`}
            />
          </div>
          <img
            alt=""
            src={require("../../assets/Earn_icon.png")}
            height="24px"
            className={`${classes.noicon} noicon`}
          />
          <img
            alt=""
            src={require("../../assets/Earn_White.svg")}
            height="24px"
            className={`${classes.icon} icon`}
          />
          <Typography variant={"h3"} className={`${classes.notitle} notitle`}>
            <hr />
            {t("Home.Earn")}
          </Typography>
          <div className={`${classes.circleBottom} circle`}>
            <Typography variant={"h3"} className={`${classes.title} title`}>
              {t("Home.Earn")}
            </Typography>
            <hr />
            <Typography
              variant={"h4"}
              className={`${classes.description} description`}
            >
              {
                "Earn performs profit switching for lending providers, moving your funds between dydx, Aave, Compound autonomously."
              }
            </Typography>
          </div>
        </Card>

        <Card
          className={`${classes.card} ${classes.zap}`}
          onClick={() => {
            this.nav("zap");
          }}
        >
          <div className={`${classes.circleTop} circle`}>
            <img
              alt=""
              src={require("../../assets/Zap_White.svg")}
              height="24px"
              className={`${classes.icon} icon`}
            />
          </div>
          <img
            alt=""
            src={require("../../assets/Zap_icon.png")}
            height="24px"
            className={`${classes.noicon} noicon`}
          />
          <img
            alt=""
            src={require("../../assets/Zap_White.svg")}
            height="24px"
            className={`${classes.icon} icon`}
          />
          <Typography variant={"h3"} className={`${classes.notitle} notitle`}>
            <hr />
            {t("Home.Zap")}
          </Typography>
          <div className={`${classes.circleBottom} circle`}>
            <Typography variant={"h3"} className={`${classes.title} title`}>
              {t("Home.Zap")}
            </Typography>
            <hr />
            <Typography
              variant={"h4"}
              className={`${classes.description} description`}
            >
              {
                "Zaps help you save on gas fees. Zap directly into or out of Curve pools from the base assets."
              }
            </Typography>
          </div>
        </Card>

        <Card
          className={`${classes.card} ${classes.cover}`}
          onClick={() => {
            window.open("https://pltx.io", "_blank");
          }}
        >
          <div className={`${classes.circleTop} circle`}>
            <img
              alt=""
              src={require("../../assets/Cover_White.svg")}
              height="24px"
              className={`${classes.icon} icon`}
            />
          </div>
          <img
            alt=""
            src={require("../../assets/Cover_icon.png")}
            height="24px"
            className={`${classes.noicon} noicon`}
          />
          <img
            alt=""
            src={require("../../assets/Cover_White.svg")}
            height="24px"
            className={`${classes.icon} icon`}
          />
          <Typography variant={"h3"} className={`${classes.notitle} notitle`}>
            <hr />
            {t("Home.Cover")}
          </Typography>
          <div className={`${classes.circleBottom} circle`}>
            <Typography variant={"h3"} className={`${classes.title} title`}>
              {t("Home.Cover")}
            </Typography>
            <hr />
            <Typography
              variant={"h4"}
              className={`${classes.description} description`}
            >
              {"Get cover with Nexus Mutual from dify.finance."}
            </Typography>
          </div>
        </Card>

        <Card
          className={`${classes.card} ${classes.stats}`}
          onClick={() => {
            this.nav("stats");
          }}
        >
          <div className={`${classes.circleTop} circle`}>
            <img
              alt=""
              src={require("../../assets/stats_white.svg")}
              height="24px"
              className={`${classes.icon} icon`}
            />
          </div>
          <img
            alt=""
            src={require("../../assets/stats.png")}
            height="24px"
            className={`${classes.noicon} noicon`}
          />
          <img
            alt=""
            src={require("../../assets/stats_white.svg")}
            height="24px"
            className={`${classes.icon} icon`}
          />
          <Typography variant={"h3"} className={`${classes.notitle} notitle`}>
            <hr />
            Stats
          </Typography>
          <div className={`${classes.circleBottom} circle`}>
            <Typography variant={"h3"} className={`${classes.title} title`}>
              Stats
            </Typography>
            <hr />
            <Typography
              variant={"h4"}
              className={`${classes.description} description`}
            >
              {"Get a quick glance at how PLTX's vaults are performing."}
            </Typography>
          </div>
        </Card>
      </div>
    );
  }

  nav = (screen) => {
    this.props.history.push(screen);
  };
}

export default withNamespaces()(withRouter(withStyles(styles)(Platform)));
