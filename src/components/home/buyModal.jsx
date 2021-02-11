import React, { Component } from "react";
import { DialogContent, Dialog, Slide } from "@material-ui/core";

import Buy from "./buy.jsx";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class BuyModal extends Component {
  render() {
    const { closeModal, modalOpen } = this.props;

    const fullScreen = window.innerWidth < 450;

    return (
      <Dialog
        open={modalOpen}
        onClose={closeModal}
        fullWidth={true}
        maxWidth={"sm"}
        TransitionComponent={Transition}
        fullScreen={fullScreen}
      >
        <DialogContent>
          <Buy closeModal={closeModal} />
        </DialogContent>
      </Dialog>
    );
  }
}

export default BuyModal;
