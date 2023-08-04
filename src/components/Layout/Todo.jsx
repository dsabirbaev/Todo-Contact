

import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import List from "../UI/List/List";

const Todo = () => {

    const [openModal, setOpenModal] = useState(false);
    const [todo, setTodo] = useState([ ]);

    const addTodo = (nameref, phonenumberef, e) => {
        e.preventDefault()
     
        
        const newTodo={
            id: Date.now(),
            name: nameref,
            phonenumber: phonenumberef
        }

        if(newTodo.name.trim().length && newTodo.phonenumber.trim().length){
            setTodo([...todo, newTodo]);
            // nameref.current.value = "";
            // phonenumber.current.value = "";
        }else{
            alert('addd')
        }

    }

    const deleteTask = (id) => {
        const filterdTodo = todo.filter((item) => item.id != id);
        setTodo(filterdTodo);
    
    };

    return (
        <div>
           {openModal && <Modal addTodo={addTodo} setOpenModal={setOpenModal} />}

            <section className="pt-10">
                <div className="container mx-auto px-5">
                    <div className="wrapper mx-auto border-2 border-sky-600 max-w-[800px] p-5">
                        <div className="todo-header flex items-end justify-end">
                            <button onClick={() => setOpenModal(true)} className="todo-btn px-[50px] py-[10px] duration-300 bg-green-600 hover:bg-green-500 text-white rounded font-semibold">Add Contact</button>
                        </div>

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