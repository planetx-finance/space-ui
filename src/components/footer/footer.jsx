import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { colors } from "../../theme";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import SecurityIcon from "@material-ui/icons/Security";
import DescriptionIcon from "@material-ui/icons/Description";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

import ForumIcon from "@material-ui/icons/Forum";
import BarChartIcon from "@material-ui/icons/BarChart";
import BuildIcon from "@material-ui/icons/Build";

import BuiltWithModal from "../builtwith/builtwithModal.jsx";

const styles = (theme) => ({
  footer: {
    padding: "24px",
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    background: colors.white,
    borderRadius: "50px 50px 0px 0px",
    border: "1px solid " + colors.red,
    borderBottom: "none",
    marginTop: "48px",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
  heading: {
    marginBottom: "12px",
    paddingBottom: "9px",
    borderBottom: "3px solid " + colors.red,
    width: "fit-content",
    marginLeft: "30px",
  },
  link: {
    paddingBottom: "12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  icon: {
    fill: "black",
    marginRight: "6px",
  },
  yearnIcon: {
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
  },
  builtWith: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  builtWithLink: {
    paddingTop: "12px",
  },
  builtHeading: {
    marginBottom: "12px",
    paddingBottom: "9px",
    borderBottom: "3px solid " + colors.red,
    width: "fit-content",
  },
  products: {
    padding: "0px 24px",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "24px",
    },
  },
  community: {
    padding: "0px 24px",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "24px",
    },
  },
  socials: {
    padding: "0px 24px",
  },
});

class Footer extends Component {
  constructor(props) {
    super();

    this.state = {
      modalBuiltWithOpen: false,
    };
  }

  render() {
    const { classes, location } = this.props;
    const { modalBuiltWithOpen } = this.state;

    if (location.pathname === "" || location.pathname === "/") {
      return null;
    }

    return (
      <div className={classes.footer}>
        <div className={classes.builtWith}>
          <Typography className={classes.builtHeading} variant={"h6"}>
            PlanetX
          </Typography>
          <img
            alt=""
            src={require("../../assets/DifyLogo.png")}
            height={"120px"}
            width={"120px"}
          />
        </div>

        <div className={classes.community}>
          <Typography className={classes.heading} variant={"h6"}>
            Community
          </Typography>
          <div
            className={classes.link}
            onClick={() =>
              window.open(
                "https://www.canva.com/design/DAEVvehynq0/HAW0vmlhQ7vGL_16c27u8g/view?utm_content=DAEVvehynq0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
                "_blank"
              )
            }
          >
            <DescriptionIcon height="15px" className={classes.icon} />
            <Typography variant={"h4"}>Whitepaper</Typography>
          </div>
          <div
            className={classes.link}
            onClick={() =>
              window.open(
                "https://pltx.io",
                "_blank"
              )
            }
          >
            <DescriptionIcon height="15px" className={classes.icon} />
            <Typography variant={"h4"}>FAQ</Typography>
          </div>
          <div
            className={classes.link}
            onClick={() =>
              window.open(
                "https://pltx.io",
                "_blank"
              )
            }
          >
            <BarChartIcon height="15px" className={classes.icon} />
            <Typography variant={"h4"}>About Us</Typography>
          </div>
          <div
            className={classes.link}
            onClick={() =>
              window.open(
                "https://pltx.io",
                "_blank"
              )
            }
          >
            <ForumIcon height="15px" className={classes.icon} />
            <Typography variant={"h4"}>How-To Guides</Typography>
          </div>
        </div>
        <div className={classes.socials}>
          <Typography className={classes.heading} variant={"h6"}>
            Socials
          </Typography>
          <div
            className={classes.link}
            onClick={() =>
              window.open("https://twitter.com/#", "_blank")
            }
          >
            <img
              alt=""
              src={require("../../assets/twitter.svg")}
              height="24px"
              className={classes.icon}
            />
            <Typography variant={"h4"}>Twitter</Typography>
          </div>
          <div
            className={classes.link}
            onClick={() =>
              window.open(
                "https://medium.com",
                "_blank"
              )
            }
          >
            <img
              alt=""
              src={require("../../assets/medium.svg")}
              height="24px"
              className={classes.icon}
            />
            <Typography variant={"h4"}>Medium</Typography>
          </div>

          <div
            className={classes.link}
            onClick={() => window.open("https://t.me/planetx_chat", "_blank")}
          >
            <img
              alt=""
              src={require("../../assets/telegram.svg")}
              height="24px"
              className={classes.icon}
            />
            <Typography variant={"h4"}>Telegram</Typography>
          </div>
          <div
            className={classes.link}
            onClick={() =>
              window.open("https://github.com/planetx-io", "_blank")
            }
          >
            <img
              alt=""
              src={require("../../assets/github.svg")}
              height="24px"
              className={classes.icon}
            />
            <Typography variant={"h4"}>Github</Typography>
          </div>
        </div>
        {modalBuiltWithOpen && this.renderBuiltWithModal()}
      </div>
    );
  }

  renderBuiltWithModal = () => {
    return (
      <BuiltWithModal
        closeModal={this.closeBuiltWithModal}
        modalOpen={this.state.modalBuiltWithOpen}
      />
    );
  };

  builtWithOverlayClicked = () => {
    this.setState({ modalBuiltWithOpen: true });
  };

  closeBuiltWithModal = () => {
    this.setState({ modalBuiltWithOpen: false });
  };
}

export default withRouter(withStyles(styles)(Footer));
