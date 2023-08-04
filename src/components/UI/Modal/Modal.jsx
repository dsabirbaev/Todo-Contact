
import { useRef } from "react";
import "./style.scss";

const Modal = ({setOpenModal, addTodo}) => {
    const userNameRef = useRef("")
    const phoneNumberRef = useRef("")
  
    return (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center">
            
            <form onSubmit={(e) => addTodo(userNameRef.current.value, phoneNumberRef.current.value, e)} className="bg-white shadow-lg rounded-md flex flex-col gap-y-5 w-[500px] p-10 relative">
                
                <i onClick={() => setOpenModal(false)} className='bx bx-x absolute top-[-50px] right-[-50px] text-white text-4xl border rounded-md cursor-pointer hover:text-black hover:bg-white'></i>
                <input ref={userNameRef} className="border p-4 rounded-sm text-lg outline-none" type="text" placeholder="Enter name:"/>
                <input ref={phoneNumberRef} className="border p-4 rounded-sm text-lg outline-none" type="text" placeholder="Enter cell number:" />
                <button type="submit" className="bg-green-600 hover:bg-white hover:text-black border duration-300 hover:border-green-600 text-white py-4 rounded-md text-[18px] font-bold outline-none">Add</button>
            </form>
        </div>
    );
};

export default Modal;