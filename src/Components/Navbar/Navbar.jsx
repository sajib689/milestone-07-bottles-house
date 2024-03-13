import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ singleBottle }) => {
  console.log(singleBottle)
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Bottle House</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full ">
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()}
              >
                <FaShoppingCart className="text-xl" />
              </button>
              <dialog id="my_modal_1" className="modal">
                {singleBottle.map((bottle, index) => (
                  <div className="modal-box" key={index}>
                    <img className="w-150px]" src={bottle.image}/>
                    <h3 className="font-bold text-lg">{bottle.title}</h3>
                    <p className="py-4">
                      {bottle.description}
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                ))}
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
