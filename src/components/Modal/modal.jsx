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
                <Button color="danger" onClick={this.toggle}>Ver Términos y Condiciones</Button>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                       toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Confirmación de T&C</ModalHeader>
                    <ModalBody>
                        ¿Estas seguro que deseas continuar? Al clickear en "Sí" estarás aceptando nuestros Terminos y Condiciones de uso de nuestras aplicaciones.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Sí</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ModalConfirmation