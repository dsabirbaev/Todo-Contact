
import { useRef } from "react";
import "./style.scss";
import { ToastContainer, toast } from 'react-toastify';

const Modal = ({setOpenModal, addTodo}) => {
    const userNameRef = useRef("")
    const phoneNumberRef = useRef("")
    const imgRef = useRef("")

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(userNameRef.current.value.trim().length && phoneNumberRef.current.value.trim().length){
            addTodo(userNameRef.current.value, phoneNumberRef.current.value, imgRef.current.value)
            toast.success("Added successfully!", {autoClose: 2000})
            setOpenModal(false);
        }else{
            toast.error("Fill name and number!", {autoClose: 2000})
        }
  
       
    };


    return (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center">
            
            <form onSubmit={onSubmit} className="bg-white shadow-lg rounded-md flex flex-col gap-y-5 w-[500px] p-10 relative">
                
                <i onClick={() => setOpenModal(false)} className='bx bx-x absolute top-[-50px] right-[-50px] text-white text-4xl border rounded-md cursor-pointer hover:text-black hover:bg-white'></i>
                <span className="text-red-800 text-[20px] font-bold absolute top-4">*</span>
                <input ref={userNameRef} className="focus:border-green-400 border p-4 rounded-sm text-lg outline-none" type="text" placeholder="Enter name:"/>
                <span className="text-red-800 text-[20px] font-bold absolute top-[100px]">*</span>
                <input ref={phoneNumberRef} className="focus:border-green-400 border p-4 rounded-sm text-lg outline-none" type="text" placeholder="Enter cell number:" />
                <input ref={imgRef} type="text" className="focus:border-green-400 border p-4 rounded-sm text-lg outline-none" placeholder="Enter img url link"/>
                <button type="submit" className="bg-green-600 hover:bg-green-400 hover:text-black border duration-300 hover:border-green-600 text-white py-4 rounded-md text-[18px] font-bold tracking-[1px] outline-none">Submit</button>
            </form>
        </div>
    );
};

export default Modal;