import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import styles from "./Modal.module.css";
import FormContact from "./form/FormContact";

interface ModalProps {
  titleBtn: string;
  titleModal: string;
  description: string;
}

const Modal = ({ titleBtn, titleModal, description }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger className={`${styles.bn5}`}>{titleBtn}</DialogTrigger>
      <DialogContent className="sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold">{titleModal}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <FormContact />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
