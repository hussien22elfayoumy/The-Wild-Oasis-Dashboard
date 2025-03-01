import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { HiPencil } from 'react-icons/hi2';
import CreateCabinForm from './CreateCabinForm';
import Button from '../../components/global/Button';

export default function UpdateCabin({
  cabin,
  disable,
}: {
  cabin: TCabins;
  disable: boolean;
}) {
  const [openModal, setOpenModal] = useState(false);
  function closeModal() {
    setOpenModal(false);
  }

  return (
    <>
      <Button
        variation="primary"
        size="small"
        disabled={disable}
        onClick={() => setOpenModal(true)}
      >
        <HiPencil className="size-4" />
      </Button>
      <Modal
        className="bg-my-grey-600/80 !z-50 backdrop:backdrop-blur-md"
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
