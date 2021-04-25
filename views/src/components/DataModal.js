import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DataForm from './DataForm'


const DataModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);

    return (
          <>
          <div className="d-flex justify-content-end">
            <Button className="mt-2 mb-2" variant="success" onClick={handleShow}>
              Add
            </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Entry</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <DataForm openModal={(showModal) => setShow(showModal)}/>
              </Modal.Body>
            </Modal>
          </>
        );
      
}

export default DataModal
