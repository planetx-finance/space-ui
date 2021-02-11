import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { withNamespaces } from "react-i18next";
import { colors } from "../../theme";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import {
  ERROR,
  CONNECTION_DISCONNECTED,
  CONNECTION_CONNECTED,
} from "../../constants";

import ENS from "ethjs-ens";
import Store from "../../stores";
const emitter = Store.emitter;
const store = Store.store;

const styles = (theme) => ({
  root: {
    flex: 1,
    height: "auto",
    display: "flex",
    position: "relative",
  },
  contentContainer: {
    margin: "auto",
    //textAlign: "center",
    padding: "12px",
    display: "flex",
    flexWrap: "wrap",
  },
  cardContainer: {
    marginTop: "60px",
    minHeight: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  unlockCard: {
    padding: "24px",
  },

  instruction: {
    maxWidth: "400px",
    marginBottom: "32px",
    marginTop: "32px",
  },

  connect: {
    width: "100%",
  },
  closeIcon: {
    position: "absolute",
    right: "0px",
    top: "0px",
    cursor: "pointer",
  },
  titleBalance: {
    //padding: "28px 30px",

    //background: colors.white,
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  contribute: {
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: colors.black,
    color: "#eaeaea",
    textTransform: "uppercase",
    fontSize: "30px",
  },

  contract: {
    width: "85%",
    //height: "10%",
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
    backgroundColor: "#373737",
    color: colors.white,
    textTransform: "uppercase",
    textAlign: "center",
  },
  buyModal: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.black,
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
    color: colors.black,
    borderRadius: "5px",
    backgroundColor: colors.white,
    margin: "15px 0",
    "&:hover": {
      border: "1px solid",
      borderColor: "white !important",
      backgroundColor: colors.white,
    },
  },

  buttonText: {
    fontSize: "24px",
  },

  description: {
    marginTop: "28px",
    maxWidth: "700px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.black,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

class Buy extends Component {
  constructor(props) {
    super();

    this.state = {
      error: null,
      metamaskLoading: false,
      ledgerLoading: false,
      account: store.getStore("account"),
      liquidityAmount: "",
      tokenPrice: 0.1,
    };

    this.handleLiquidityAmountChange = this.handleLiquidityAmountChange.bind(
      this
    );
  }

  componentWillMount() {
    emitter.on(CONNECTION_CONNECTED, this.connectionConnected);
    emitter.on(CONNECTION_DISCONNECTED, this.connectionDisconnected);
    emitter.on(ERROR, this.error);
  }

  componentWillUnmount() {
    emitter.removeListener(CONNECTION_CONNECTED, this.connectionConnected);
    emitter.removeListener(
      CONNECTION_DISCONNECTED,
      this.connectionDisconnected
    );
    emitter.removeListener(ERROR, this.error);
  }

  navigateInvest = () => {
    this.props.history.push("/invest");
  };

  error = (err) => {
    this.setState({
      loading: false,
      error: err,
      metamaskLoading: false,
      ledgerLoading: false,
    });
  };

  connectionConnected = () => {
    if (this.props.closeModal != null) {
      this.props.closeModal();
    }
  };

  connectionDisconnected = () => {
    if (this.props.closeModal != null) {
      this.props.closeModal();
    }
  };

  metamaskUnlocked = () => {
    this.setState({ metamaskLoading: false });
    if (this.props.closeModal != null) {
      this.props.closeModal();
    }
  };

  ledgerUnlocked = () => {
    this.setState({ ledgerLoading: false });
    if (this.props.closeModal != null) {
      this.props.closeModal();
    }
  };

  cancelLedger = () => {
    this.setState({ ledgerLoading: false });
  };

  cancelMetamask = () => {
    this.setState({ metamaskLoading: false });
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

  handleLiquidityAmountChange = (e) => {
    this.setState({
      liquidityAmount: e.target.value ? Math.abs(e.target.value) : "",
    });
  };

  addLiguidity = () => {
    let amount = this.state.liquidityAmount * this.state.tokenPrice;

    store.buyToken(store.getStore("account"), amount);
  };

  render() {
    const { classes, closeModal } = this.props;

    const { account, addressEnsName } = this.state;

    var address = null;
    if (account.address) {
      address = account.address;
    }
    const addressAlias = addressEnsName || address;

    return (
      <div className={classes.root}>
        <div className={classes.closeIcon} onClick={closeModal}>
          <CloseIcon />
        </div>
        <div className={classes.contentContainer}>
          <Web3ReactProvider getLibrary={getLibrary}>
            <div className={classes.titleBalance}>
              <div className={classes.contribute}>
                <Typography variant={"h3"}>
                  Contribute to the development
                </Typography>
              </div>
              <div className={classes.contract}>
                <Typography variant={"h3"}>
                  This contract IS FOR THE TEAM TO DEVELOP THE PROTOCOL
                </Typography>
              </div>
              <div className={classes.token}>
                <Typography variant={"h3"}>PLTX tokens</Typography>
              </div>
              <div className={classes.buyModal}>
                <Typography variant={"h3"}>PLTX AMOUNT</Typography>
                <TextField
                  fullWidth
                  className={classes.actionInput}
                  value={this.state.liquidityAmount}
                  onChange={this.handleLiquidityAmountChange}
                  placeholder={"0 PLTX"}
                  variant="outlined"
                  type="number"
                  InputProps={{
                    inputProps: { min: 0 },
                    classes: {
                      root: classes.cssOutlinedInput,
                      input: classes.input,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
                <Typography variant={"h3"}>YOUR WALLET ADDRESS</Typography>
                <TextField
                  fullWidth
                  className={classes.actionInput}
                  value={addressAlias}
                  placeholder={"0x..."}
                  variant="outlined"
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      input: classes.input,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
                <Typography variant={"h3"}>
                  Buy Price: 0.1 ETH | 1 PLTX
                </Typography>
                <Typography variant={"h4"}>
                  {"You must send"}{" "}
                  {this.state.liquidityAmount * this.state.tokenPrice}{" "}
                  {"ETH for "}
                  {this.state.liquidityAmount
                    ? this.state.liquidityAmount
                    : 0}{" "}
                  {"PLTX"}
                </Typography>

                {
                  <Button
                    className={classes.actionButton}
                    variant="outlined"
                    color="primary"
                    onClick={this.addLiguidity}
                    //disabled={!address}
                    fullWidth
                  >
                    <Typography className={classes.buttonText} variant={"h4"}>
                      Buy Tokens
                    </Typography>
                  </Button>
                }
              </div>
            </div>
          </Web3ReactProvider>
        </div>
      </div>
    );
  }
}

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

function onConnectionClicked(
  currentConnector,
  name,
  setActivatingConnector,
  activate
) {
  const connectorsByName = store.getStore("connectorsByName");
  setActivatingConnector(currentConnector);
  activate(connectorsByName[name]);
}

function onDeactivateClicked(deactivate, connector) {
  if (deactivate) {
    deactivate();
  }
  if (connector && connector.close) {
    connector.close();
  }
  store.setStore({ account: {}, web3context: null });
  emitter.emit(CONNECTION_DISCONNECTED);
}

export default withNamespaces()(withRouter(withStyles(styles)(Buy)));
