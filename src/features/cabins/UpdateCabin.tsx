import { Modal } from 'flowbite-react';
import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import Button from '../../components/global/Button';
import { HiPencil } from 'react-icons/hi2';

export default function UpdateCabin({ cabin }: { cabin: TCabins }) {
  const [openModal, setOpenModal] = useState(false);
  function closeModal() {
    setOpenModal(false);
  }

  return (
    <>
      <Button
        variation="primary"
        size="small"
        onClick={() => setOpenModal(true)}
      >
        <HiPencil />
      </Button>
      <Modal
        className="bg-my-grey-600/80 backdrop:backdrop-blur-md"
        dismissible
        show={openModal}
        onClose={closeModal}
      >
        <Modal.Header className="bg-my-brand-600 py-4 ps-3">
          UpdateCabin
        </Modal.Header>
        <Modal.Body className="bg-my-grey-50 rounded-b-md p-0">
          <CreateCabinForm
            cabinDefaultValues={cabin}
            onCloseModal={closeModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
