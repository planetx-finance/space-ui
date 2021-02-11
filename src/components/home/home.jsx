import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { withNamespaces } from "react-i18next";
import { colors } from "../../theme";

import UnlockModal from "../unlock/unlockModal.jsx";
import BuyModal from "./buyModal.jsx";

import ENS from "ethjs-ens";
import { CONNECTION_CONNECTED, CONNECTION_DISCONNECTED } from "../../constants";

import Store from "../../stores";
const emitter = Store.emitter;
const store = Store.store;

const styles = (theme) => ({
  root: {
    backgroundColor: "#000",
    backgroundImage: "linear-gradient(315deg, #000 0%, #000 74%)",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    //maxWidth: "1200px",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  investedContainerLoggedOut: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100%",
    marginTop: "40px",
    [theme.breakpoints.up("md")]: {
      minWidth: "1400px",
    },
  },
  investedContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingLeft: "50px",
    paddingRight: "50px",
    //marginTop: "40px",
    [theme.breakpoints.up("md")]: {
      minWidth: "1400px",
    },
  },

  portfolioContainer: {
    //width: "100%",
    //width: "50%",
    display: "flex",
    //justifyContent: "space-between"
  },
  header: {
    width: "100%",
    top: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    flexWrap: "wrap",
  },

  gray: {
    color: colors.darkGray,
  },
  between: {
    width: "40px",
    height: "40px",
  },
  titleBalance: {
    //padding: "28px 30px",

    //background: colors.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  prettyAlign: {
    display: "flex",
    alignItems: "center",
  },
  infoIcon: {
    fontSize: "1em",
    marginRight: "6px",
  },
  heading: {
    //marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    minWidth: "200px",
    alignItems: "flex-end",
    //textAlign: "center",
    color: colors.white,
    textTransform: "uppercase",
  },
  headingName: {
    display: "flex",
    alignItems: "center",
    width: "325px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      flex: 1,
    },
  },
  flexy: {
    display: "flex",
    alignItems: "center",
  },
  vault: {
    borderBottom: "1px solid rgba(25, 101, 233, 0.2)",
    padding: "12px",
    "&:last-child": {
      borderBottom: "none",
    },
  },
  sectionHeading: {
    color: colors.darkGray,
    width: "100%",
    marginLeft: "54px",
  },
  inline: {
    display: "flex",
    alignItems: "baseline",
  },
  symbol: {
    paddingLeft: "6px",
  },
  symbolAt: {
    paddingLeft: "6px",
    color: colors.darkGray,
  },
  basedOnContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  presale: {
    display: "flex",
    //paddingBottom: "60px",
    alignItems: "center",
    flex: 1,
  },
  walletAddress: {
    color: colors.white,
    padding: "12px",
    border: "2px solid rgb(174, 174, 174)",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid " + colors.gray,
      background: "rgba(255, 255, 255, 0.05)",
    },
  },
  connectedDot: {
    background: colors.compoundGreen,
    opacity: "1",
    borderRadius: "10px",
    width: "10px",
    height: "10px",
    marginRight: "3px",
    marginLeft: "6px",
  },
  icon: {
    display: "flex",
  },
  links: {
    color: colors.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: "60px",
  },
  link: {
    marginRight: "20px",
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: "20px",

    padding: "7px",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.5)",
    },
  },
  downloadFile: {
    color: "#fff",
    textDecoration: "none",
  },
  contribute: {
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#7a4cf5",
    color: "#eaeaea",
    textTransform: "uppercase",
    fontSize: "30px",
  },

  contract: {
    width: "85%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.black,
    textTransform: "uppercase",
    textAlign: "center",
  },
  token: {
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "15px",
    backgroundColor: colors.black,
    color: colors.white,
    textTransform: "uppercase",
    textAlign: "center",
  },
  buyModal: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#2236cb",
    color: colors.white,
    padding: "20px",
    "& h3": {
      marginTop: "15px",
    },
  },

  input: {
    "&::placeholder": {
      color: colors.white,
    },
    color: colors.white,
  },
  cssOutlinedInput: {
    borderRadius: "5px",
  },
  notchedOutline: {
    border: "1px solid",
    borderColor: "white !important",
  },

  actionButton: {
    color: colors.white,
    borderRadius: "5px",
    backgroundColor: "#7a4cf5",
    margin: "15px 0",
    "&:hover": {
      border: "1px solid",
      borderColor: "white !important",
      backgroundColor: "#7a4cf5",
    },
  },

  buttonText: {
    fontSize: "24px",
  },

  description: {
    padding: "20px 0",
    color: "#6d6d6d",
  },
  footer: {
    display: "flex",
    width: "100%",
    padding: "20px",
    justifyContent: "start",
    color: "#6d6d6d",
  },
  button: {
    marginRight: "20px",
    cursor: "pointer",
  },
});

class Home extends Component {
  constructor(props) {
    super();

    this.state = {
      modalOpen: false,
      account: store.getStore("account"),
      projectAmount: "",
      liquidityAmount: "",
      tokenPrice: 1 / 9,
    };
  }

  componentWillMount() {
    emitter.on(CONNECTION_CONNECTED, this.connectionConnected);
    emitter.on(CONNECTION_DISCONNECTED, this.connectionDisconnected);
  }

  componentWillUnmount() {
    emitter.removeListener(CONNECTION_CONNECTED, this.connectionConnected);
    emitter.removeListener(
      CONNECTION_DISCONNECTED,
      this.connectionDisconnected
    );
  }

  connectionConnected = () => {
    this.setState({ account: store.getStore("account") });
    this.setAddressEnsName();
  };

  connectionDisconnected = () => {
    this.setState({ account: store.getStore("account") });
  };

  setAddressEnsName = async () => {
    const provider = store.getStore("web3context").library.provider;
    const account = store.getStore("account");
    const { address } = account;
    const network = provider.networkVersion;
    const ens = new ENS({ provider, network });
    const addressEnsName = await ens.reverse(address).catch(() => {});
    if (addressEnsName) {
      this.setState({ addressEnsName });
    }
  };

  render() {
    const { classes } = this.props;

    const { account, addressEnsName, modalOpen } = this.state;

    var address = null;
    if (account.address) {
      address = account.address;
    }
    const addressAlias = addressEnsName || address;

    return (
      <div className={classes.root}>
        <div className={`${classes.header} header`}>
          <div className={`${classes.presale} presale`}>
            <div>
              <div className={`${classes.icon} icon`}>
                <img
                  alt=""
                  src={require("../../assets/TrustyLogo.png")}
                  height="100px"
                />
              </div>
            </div>
          </div>
          {/*<div className={`${classes.icon} icon`}>
            <img
              alt=""
              src={require("../../assets/YGEM-logo.png")}
              height="100px"
            />
          </div>*/}

          <div className={`${classes.links} links`}>
            <div className={`${classes.flexy} header-links-soc flexy`}>
              <Typography
                variant={"h4"}
                className={`${classes.link} link`}
                onClick={() => {
                  this.nav("vaults");
                }}
              >
                Platform
              </Typography>

              <Typography variant={"h4"} className={`${classes.link} link`}>
                <a
                  href="https://www.canva.com/design/DAEVvehynq0/HAW0vmlhQ7vGL_16c27u8g/view?utm_content=DAEVvehynq0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                  target="_blank"
                  className={`${classes.downloadFile}`}
                >
                  Whitepaper
                </a>
              </Typography>
            </div>
            <div className={`${classes.flexy} flexy`}>
              <div
                className={classes.link}
                onClick={() =>
                  window.open("https://twitter.com/", "_blank")
                }
              >
                <img
                  alt=""
                  src={require("../../assets/twitter_white.svg")}
                  height="30px"
                  className={classes.icon}
                />
              </div>
              <div
                className={classes.link}
                onClick={() =>
                  window.open("https://medium.com/", "_blank")
                }
              >
                <img
                  alt=""
                  src={require("../../assets/medium_white.svg")}
                  height="30px"
                  className={classes.icon}
                />
              </div>

              <div
                className={classes.link}
                onClick={() =>
                  window.open("https://t.me/planetx_chat", "_blank")
                }
              >
                <img
                  alt=""
                  src={require("../../assets/telegram_white.svg")}
                  height="30px"
                  className={classes.icon}
                />
              </div>
              <div
                className={classes.link}
                onClick={() =>
                  window.open("https://github.com/planetx-io", "_blank")
                }
              >
                <img
                  alt=""
                  src={require("../../assets/github_white.svg")}
                  height="30px"
                  className={classes.icon}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.investedContainer}>
          <div>
            <div className={classes.heading}>
              <Typography variant={"h2"}>
                Invest into Leading Space Travel companies
              </Typography>
            </div>
            <div className={classes.description}>
              <Typography variant={"h3"}>
                Yield farm on SpaceX derivatives | PlanetX
              </Typography>
            </div>
            <div className={classes.portfolioContainer}>
              <div className={classes.button}>
                {
                  <Typography
                    variant={"h4"}
                    className={classes.walletAddress}
                    noWrap
                    onClick={this.addressClicked}
                  >
                    Contribute to the development
                  </Typography>
                }
              </div>
              <div className={classes.button}>
                <Typography
                  variant={"h4"}
                  className={classes.walletAddress}
                  noWrap
                  onClick={() =>
                    window.open("https://t.me/planetx_chat", "_blank")
                  }
                >
                  Telegram Group
                </Typography>
              </div>
            </div>
          </div>
          <div className="theHomeimg">
            <img
              alt=""
              src={require("../../assets/background.png")}
              height="500px"
            />
          </div>
        </div>
        <div className={`${classes.footer} footer`}>
          <Typography variant={"h4"}>PlanetX 2020</Typography>
        </div>
        {modalOpen && this.renderModal(address)}
      </div>
    );
  }

  addressClicked = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  renderModal = (address) => {
    return (
      <span>
        {!address && (
          <UnlockModal
            closeModal={this.closeModal}
            modalOpen={this.state.modalOpen}
          />
        )}
        {address && (
          <BuyModal
            closeModal={this.closeModal}
            modalOpen={address ? true : false}
          />
        )}
      </span>
    );
  };

  nav = (screen) => {
    this.props.history.push(screen);
  };
}

export default withNamespaces()(withRouter(withStyles(styles)(Home)));
