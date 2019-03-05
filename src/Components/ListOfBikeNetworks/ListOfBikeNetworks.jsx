import React, {useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import ListBikes from '../ListBikes/ListBikes';
import Api from "../../Utils/api";


function ListOfBikeNetworks(props) {
        const [show, setShow] = useState(false);
        

        return (<div>

            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>setShow(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <ListBikes items={props.items} setShow={setShow} />
        </div>)

}



export default ListOfBikeNetworks;