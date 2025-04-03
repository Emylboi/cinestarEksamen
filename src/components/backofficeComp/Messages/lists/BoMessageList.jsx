import styles from "./boMessageList.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import MessageModal from "./MessageModal";


// This component shows the list of all our messages in the backoffice section.
const BoMessageList = ({ messages, deleteMessage }) => {
  const [selectedMessage, setSelectedMessage] = useState(null); //Holds the message for the modal.
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

  // Function that navigates to the edit/update page of the message
  const editMessage = (id) => {
    navigate(`/backoffice/messages/edit/${id}`);
  };

  // Function that navigates to the add/create page of the message
  const createMessage = () => {
    navigate(`/backoffice/messages/add`);
  };

  const handleDelete = (id, name) => {
    Swal.fire({
      title: `Vil du slette, "${name}"?, fra databasen?`,
      text: "Denne handling kan ikke fortrydes!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ja, slet den!",
      cancelButtonText: "Annuller",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMessage(id);
        Swal.fire("Slettet!", "Beskeden er blevet slettet.", "success");
      }
    });
  };

  const openModal = (message) => {
    setStatus(true);
    setSelectedMessage(message);
  };

  const closeModal = () => {
    setSelectedMessage(null);
  };

  return (
    <div className={styles.list}>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>subject</th>
            <th>description</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody className={styles.backofficeList}>
          {messages.map((message) => {
            let { _id, name, subject, description, status } = message;

            const statusText = status ? "Read" : "Unread";

            // Lists the information of each message in the backoffice section, based on id's
            return (
              <tr key={_id} className={styles.item}>
                <td>{name}</td>
                <td>{subject}</td>
                <td>{description}</td>
                <td>{statusText}</td>
                <td className={styles.actions}>
                  <button onClick={() => openModal(message)}>View</button>{" "}
                  <button onClick={() => handleDelete(_id, name)}>SLET</button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <MessageModal message={selectedMessage} closeModal={closeModal} />
    </div>
  );
};
export default BoMessageList;
