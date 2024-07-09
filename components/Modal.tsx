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
      <DialogContent className="lg:rounded-2xl xl:max-w-4xl xl:px-20 xl:py-20 ">
        <DialogHeader>
          <DialogTitle className="font-bold lg:text-4xl">
            {titleModal}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          {/* <FormContact /> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
