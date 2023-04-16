import { Add } from "../../api/dataApi";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
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
    <section className="bg-white px-[20vw] py-[10vh] min-h-[90vh]">
      <div className="w-[60vw] bg-rose-700 border-2 border-rose-900 rounded-3xl">
        <h2 className=" text-2xl text-rose-100 italic my-10 font-bold text-center">
          Add Album
        </h2>
        <form
          className="flex flex-col items-center  w-full"
          onSubmit={SubmitHandler}
        >
          <input
            className="block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            type="text"
            name="singer"
            id="album-singer"
            placeholder="Singer/Band"
            value={value.singer}
            onChange={ChangeHandler}
          />
          <input
            className="block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            type="text"
            name="album"
            id="album-album"
            placeholder="Album"
            value={value.album}
            onChange={ChangeHandler}
          />
          <input
            className="block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            type="text"
            name="imageUrl"
            id="album-img"
            placeholder="Image url"
            value={value.imageUrl}
            onChange={ChangeHandler}
          />
          <input
            className="block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            type="text"
            name="release"
            id="album-release"
            placeholder="Release date"
            value={value.release}
            onChange={ChangeHandler}
          />
          <input
            className="block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            type="text"
            name="label"
            id="album-label"
            placeholder="Label"
            value={value.label}
            onChange={ChangeHandler}
          />
          <input
            className="block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            type="text"
            name="sales"
            id="album-sales"
            placeholder="Sales"
            value={value.sales}
            onChange={ChangeHandler}
          />
          <button
            className="mt-5 border-[0.5px] enabled:mb-7 trxt-primary border-rose-900 italic text-semibold rounded-full capitalize px-6 m-1 py-1 text-bold bg-rose-200 enabled:hover:bg-primary enabled:hover:text-rose-200 duration-500 ease-in-out enabled:hover:border-rose-700"
            type="submit"
            disabled={!Object.values(value).every((x) => x !== "")}
          >
            post
          </button>
          {!Object.values(value).every((x) => x !== "") && (
            <div className="text-red-900 font-bold bg-white rounded m-4 block py-1 px-2 md:px-9 ">
              All fields must be filled.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
export default Create;
