import { Add } from "../../api/dataApi";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CheckPassword } from "../Utils/util.validate";
const Create = () => {
  const { auth } = useContext(AuthContext);
  const token = auth.accessToken;
  const navigate = useNavigate();
  const [value, setValue] = useState({
    singer: "",
    album: "",
    imageUrl: "",
    release: "",
    label: "",
    sales: "",
  });

  const ChangeHandler = (e) => {
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const { singer, album, imageUrl, release, label, sales } = value;

    Add(token, { singer, album, imageUrl, release, label, sales });
    navigate("/Dashboard");
  };

  return (
    <section id="create">
      <div className="form">
        <h2>Add Album</h2>
        <form className="create-form" onSubmit={SubmitHandler}>
          <input
            type="text"
            name="singer"
            id="album-singer"
            placeholder="Singer/Band"
            value={value.singer}
            onChange={ChangeHandler}
          />
          <input
            type="text"
            name="album"
            id="album-album"
            placeholder="Album"
            value={value.album}
            onChange={ChangeHandler}
          />
          <input
            type="text"
            name="imageUrl"
            id="album-img"
            placeholder="Image url"
            value={value.imageUrl}
            onChange={ChangeHandler}
          />
          <input
            type="text"
            name="release"
            id="album-release"
            placeholder="Release date"
            value={value.release}
            onChange={ChangeHandler}
          />
          <input
            type="text"
            name="label"
            id="album-label"
            placeholder="Label"
            value={value.label}
            onChange={ChangeHandler}
          />
          <input
            type="text"
            name="sales"
            id="album-sales"
            placeholder="Sales"
            value={value.sales}
            onChange={ChangeHandler}
          />
          <button type="submit" disabled={!Object.values(value).some((x) => x)}>
            post
          </button>
        </form>
      </div>
    </section>
  );
};
export default Create;
