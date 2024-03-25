import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import styles from "./Modal.module.css";

interface ModalProps {
  titleBtn: string;
  titleModal: string;
  description: string;
}

const Modal = ({ titleBtn, titleModal, description }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger className={styles.bn5}>{titleBtn}</DialogTrigger>
      <DialogContent className="sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle>{titleModal}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
