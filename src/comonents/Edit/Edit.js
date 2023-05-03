import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { AddEdit } from "../../api/dataApi";
import { AuthContext } from "../../context/AuthContext";

const Edit = () => {
  const navigate = useNavigate();
  const { data } = useContext(DataContext);
  const { auth } = useContext(AuthContext);
  const token = auth.accessToken;
  const { id } = useParams();
  const current = data.find((x) => x._id === id);

  const SubmitHandler = (e) => {
    e.preventDefault();
    
    const { singer, album, imageUrl, release, label, sales }= Object.fromEntries(new FormData(e.target));
   
    AddEdit(token, { singer, album, imageUrl, release, label, sales }, id);

    navigate("/Dashboard");
  };

  return (
    <section className="bg-white px-[20vw] py-[10vh] min-h-[80vh]">
      <div className="w-[60vw] bg-rose-700 border-2 border-rose-900 rounded-3xl">
        <h2 className=" text-2xl text-rose-100 italic my-10 font-bold text-center">
          Edit Album
        </h2>
        <form
          className="flex flex-col items-center  w-full"
          onSubmit={SubmitHandler}
        >
          <input
            type="text"
            className="block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            name="singer"
            id="album-singer"
            placeholder="Singer/Band"
            defaultValue={current.singer}
          />
          <input
            type="text"
            className="block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            name="album"
            id="album-album"
            placeholder="Album"
            defaultValue={current.album}
          />
          <input
            type="text"
            className="block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            name="imageUrl"
            id="album-img"
            placeholder="Image url"
            defaultValue={current.imageUrl}
          />
          <input
            type="text"
            className="block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            name="release"
            id="album-release"
            placeholder="Release date"
            defaultValue={current.release}
          />
          <input
            type="text"
            className="block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            name="label"
            id="album-label"
            placeholder="Label"
            defaultValue={current.label}
          />
          <input
            type="text"
            className="block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            name="sales"
            id="album-sales"
            placeholder="Sales"
            defaultValue={current.sales}
          />
          <button
            type="submit"
            className="mt-5 border-[0.5px] enabled:mb-7 trxt-primary border-rose-900 italic text-semibold rounded-full capitalize px-6 m-1 py-1 text-bold bg-rose-200 enabled:hover:bg-primary enabled:hover:text-rose-200 duration-500 ease-in-out enabled:hover:border-rose-700"
          >
            post
          </button>
        </form>
      </div>
    </section>
  );
};

export default Edit;
