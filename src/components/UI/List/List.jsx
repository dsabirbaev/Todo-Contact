
import avatar from "../../../assets/images/user.png";
import "./style.scss";

const List = ({state: {name, phonenumber, id}, deleteTodo}) => {
    return (
        <li className="flex gap-x-4 shadow-md p-4 rounded-lg bg-sky-100">
            <img src={avatar} alt="" className="w-[100px]" />
            <dir className="flex justify-between w-full">
                <div>
                    <p className="font-bold text-[20px] mb-5">{name}</p>
                    <p className="font-semibold text-[16px]">{phonenumber}</p>
                </div>
                <button onClick={() => deleteTodo(id)} className="duration-300 hover:bg-red-400 bg-red-600 text-white rounded-md px-5 py-2 self-end">Delete</button>
            </dir>

        </li>
    );
};

export default List;