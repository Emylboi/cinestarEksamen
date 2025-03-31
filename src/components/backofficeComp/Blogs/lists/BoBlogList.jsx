import { useNavigate } from "react-router-dom";
import styles from "./boBlogList.module.css";
import Swal from "sweetalert2";

// This component shows the list of all our blogs in the backoffice section.
const BoBlogList = ({ blogs, deleteBlog }) => {
  const navigate = useNavigate();

  // Function that navigates to the edit/update page of the blog
  const editBlog = (id) => {
    navigate(`/backoffice/blogs/edit/${id}`);
  };

  // Function that navigates to the add/create page of the blog
  const createBlog = () => {
    navigate(`/backoffice/blogs/add`);
  };

  const handleDelete = (id, title) => {
    Swal.fire({
      title: `Vil du slette, "${title}"?, fra databasen?`,
      text: "Denne handling kan ikke fortrydes!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ja, slet bloggen!",
      cancelButtonText: "Annuller",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBlog(id);
        Swal.fire("Slettet!", "Bloggen er blevet slettet.", "success");
      }
    });
  };

  return (
    <div className={styles.list}>
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>title</th>
            <th>teaser</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody className={styles.backofficeList}>
          {blogs.map((blog) => {
            let { _id, title, teaser, image, description } = blog;

            // Lists the information of each blog in the backoffice section, based on id's
            return (
              <tr key={_id} className={styles.item}>
                <td>
                  <img src={image}></img>
                </td>
                <td>{title}</td>
                <td>{teaser}</td>
                <td>{description}</td>
                <td className={styles.actions}>
                  <button className={styles.action} onClick={() => editBlog(_id)}>REDIGÈR</button>{" "}
                  {/* Clicking the button, runs the editBlog function above. */}
                  <button className={styles.action} onClick={() => handleDelete(_id, name)}>SLET</button>{" "}
                  {/* Clicking the button, runs the deleteBlog function that we get as a prop from BackofficeBlogsPage. */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className={styles.action} onClick={createBlog}>OPRET</button>{" "}
      {/* Clicking the button, runs the createBlog function above. */}
    </div>
  );
};
export default BoBlogList;
