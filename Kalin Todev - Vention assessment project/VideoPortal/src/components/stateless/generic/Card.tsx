import { useState } from "react";
import Modal from "react-bootstrap/Modal";

interface MovieCardDetailsProps {
  cardTitle: string;
  children?: React.ReactNode;
}

export const Card = ({ cardTitle, children }: MovieCardDetailsProps) => {
  const [show, setShow] = useState(true);

  return (
    <div className="card">
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title className="card-title">{cardTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </div>
  );
};
