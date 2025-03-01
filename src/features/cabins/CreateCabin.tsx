import { Modal } from 'flowbite-react';
import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import Button from '../../components/global/Button';

export default function CreateCabin() {
  const [openModal, setOpenModal] = useState(false);
  function closeModal() {
    setOpenModal(false);
  }

  return (
    <>
      <Button variation="primary" onClick={() => setOpenModal(true)}>
        Create Cabin
      </Button>
      <Modal
        className="bg-my-grey-600/80 backdrop:backdrop-blur-md"
        dismissible
        show={openModal}
        onClose={closeModal}
      >
        <Modal.Header className="bg-my-brand-600 py-4 ps-3">
          Create new Cabin
        </Modal.Header>
        <Modal.Body className="bg-my-grey-50 rounded-b-md p-0">
          <CreateCabinForm onCloseModal={closeModal} />
        </Modal.Body>
      </Modal>
    </>
  );
}
