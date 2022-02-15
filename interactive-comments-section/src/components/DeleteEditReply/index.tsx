import React from "react";
import { ReactComponent as IconEdit } from "../../assets/images/icon-edit.svg";
import { ReactComponent as IconReply } from "../../assets/images/icon-reply.svg";
import { ReactComponent as IconDelete } from "../../assets/images/icon-delete.svg";
interface DeleteEditReplyProps {
  isOwnComment: boolean;
}

export default function DeleteEditReply(props: DeleteEditReplyProps) {
  return (
    <div className="">
      <div className="">
        <IconDelete />
        Delete
      </div>
      <div className="">
        <IconReply />
        Reply
      </div>
      <div className="">
        <IconEdit />
        Edit
      </div>
    </div>
  );
}
