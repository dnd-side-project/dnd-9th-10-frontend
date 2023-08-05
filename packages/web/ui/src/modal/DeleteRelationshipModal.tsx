import * as Dialog from "@radix-ui/react-dialog";
import cn from "classnames";
import Button from "../button/Button";
import SubmitButton from "../button/SubmitButton";
import { Bold20, Medium14 } from "../text/Typographies";
import styles from "./DeleteRelationshipModal.module.css";
import Modal from "./Modal";
import Image from "next/image";
import { images } from "@dnd9-10/shared/src/libs/images";

export interface DeleteRelationshipModalProps {
  className?: string;
  TriggerComponent: React.ReactNode;
  onClose?: () => void;
  onSubmit?: () => void;
}

export function DeleteRelationshipModal(props: DeleteRelationshipModalProps) {
  const { className, TriggerComponent, onClose, onSubmit } = props;
  return (
    <Modal
      TriggerComponent={TriggerComponent}
      className={cn(styles.wrap, className)}
      useClose={false}
    >
      <>
        <Bold20 className={styles.title}>정말 삭제하시겠어요?</Bold20>
        <Medium14 className={styles["content"]} as="p">
          관계정리를 하면
          <span className={styles.highlight}> 일화를 더이상 쓸 수 없어요.</span>
          <br />
          되살리고 싶다면 고객센터에 문의해주세요.
        </Medium14>
        <Image
          className={styles.image}
          width={173}
          height={135}
          alt="clear"
          src={images.CLEAR_RELATIONSHOP}
        />
        <Dialog.Close asChild>
          <div className={styles.bottom}>
            <SubmitButton
              className={styles["bottom-button"]}
              type="disabled"
              name="취소"
              onClick={onClose}
            />
            <SubmitButton
              className={styles["bottom-button"]}
              type="warn"
              name="정리하기"
              onClick={onSubmit}
            />
          </div>
        </Dialog.Close>
      </>
    </Modal>
  );
}

export default DeleteRelationshipModal;
