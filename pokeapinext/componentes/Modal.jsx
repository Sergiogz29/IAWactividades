'use client';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/navigation';

function ModalComponent({ title, bodyContent, secondaryButtonText }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    router.push('/pokemon');
  };

  return (
    <Modal show={show} size="lg" onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{bodyContent}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {secondaryButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;