

import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import List from "../UI/List/List";
import { ToastContainer, toast } from 'react-toastify';

const Todo = () => {

    const [openModal, setOpenModal] = useState(false);
    const [todo, setTodo] = useState([ ]);

    const addTodo = (nameref, phonenumberef, picref) => {
    
        const newTodo={
            id: Date.now(),
            name: nameref,
            phonenumber: phonenumberef,
            image: picref
        }

        setTodo([...todo, newTodo]);
    }

    const deleteTask = (id) => {
        const filterdTodo = todo.filter((item) => item.id != id);
        setTodo(filterdTodo);
        toast.info("Deleted successfully!", {autoClose: 2000})
    };

    return (
        <div>
            <ToastContainer/>
           {openModal && <Modal addTodo={addTodo} setOpenModal={setOpenModal} />}

            <section className="pt-10">
                <div className="container mx-auto px-5">
                    <div className="wrapper mx-auto border-2 border-sky-600 max-w-[800px] p-5">
                        <div className="todo-header flex items-end justify-end">
                            <button onClick={() => setOpenModal(true)} className="todo-btn px-[50px] py-[10px] duration-300 bg-green-600 hover:bg-green-500 text-white rounded font-semibold">Add Contact</button>
                        </div>

                        <h1 className="text-[30px] font-bold uppercase text-center my-5">My contacts</h1>
                        <span className="w-full bg-slate-400 h-[2px] block rounded-md"></span>
                        <div className="todo-body pt-8">
                            <ul className="flex flex-col gap-y-4">


                               {
                                    todo.map((item) => {
                                        return (
                                            <List  state={item} key={item.id} deleteTodo={deleteTask} />
                                        );
                                    })
                               }

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Todo;