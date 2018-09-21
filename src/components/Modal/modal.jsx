import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalConfirmation extends Component{

    constructor() {
        super()
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <React.Fragment>
                <Button onClick={this.toggle} color='secondary'>Terms and Conditions</Button>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                       toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Confirmación de T&C</ModalHeader>
                    <ModalBody>
                        Are you sure you want to continue? Clicking 'Yes' results nothing, I just wanted to use a Reactstrap Modal.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Yes</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ModalConfirmation