import React, { useState, useEffect } from 'react';

import { FaPlus } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { GrNext, GrClose, GrTrash } from 'react-icons/gr';
import Modal from 'react-modal';
import {
    Container,
    List,
    Header,
    SubmitButton,
    CloseButton,
    LinkButtons,
    ItemList,
} from './styles';

// export default CloseButton;
// const StyledModal = {
//     content: {
//         width: '300px',
//     },
// };

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(0);
    const [doneCount, setDoneCount] = useState(0 && null);
    const [done, setDone] = useState(null);
    const [modalInfo, setModalInfo] = useState(false);
    const [textInfo, setNewTextInfo] = useState([]);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const taskStorage = localStorage.getItem('tasks');

        if (taskStorage) {
            setTasks(JSON.parse(taskStorage));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function handleInputChange(e) {
        setNewTasks(e.target.value);
    }
    function handleTextChange(e) {
        setNewTextInfo(e.target.value);
    }

    function ShowModal() {
        setShowModal(true);
        setNewTextInfo('');
        setNewTasks('');
    }
    function hideModal() {
        setShowModal(false);
        setModalInfo(false);
    }
    function ModalInfo() {
        setModalInfo(true);
        // setNewTasks(newTasks[1]);
        // setNewTasks();
    }

    function handleAddTask() {
        setTasks([...tasks, newTasks]);
        // setNewTextInfo('');
        // setNewTasks('');
        setShowModal(false);
        setModalInfo(false);
        setCount(count + 1);
    }
    function handleDelete(t) {
        setTasks(tasks.filter((task) => task !== t));
        setDoneCount(
            doneCount > 0 || doneCount > count ? count - 1 : 0 && count - 1
        );
        setCount(count > 0 ? count - 1 : 0);
        console.log(handleDelete);
    }
    function handleDoneTask() {
        setDoneCount(
            true && doneCount >= count ? doneCount - 1 : doneCount + 1
        );
        setDone(true);
        // setDoneCount(count > doneCount ? -1 : +1);
        console.log(setDoneCount);
    }

    return (
        <Container>
            <Header>
                <h1>Tasks</h1>
                <span>{doneCount}</span>
                <span>/{count}</span>

                <SubmitButton onClick={ShowModal}>
                    <FaPlus size={15} color="#FFF" />
                </SubmitButton>
            </Header>

            <Modal
                isOpen={showModal || modalInfo}
                style={{
                    content: {
                        transition: '2s',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '15px',
                        top: '50px',
                        width: '400px',
                        height: '380px',
                        margin: 'auto',
                        overflow: 'none',
                    },
                }}
            >
                <div style={{ top: '15px' }}>
                    {showModal}
                    <input
                        onChange={handleInputChange}
                        style={{
                            padding: '15px',
                            marginBottom: '10px',
                            background: '#fff',
                            width: '85%',
                            marginRight: '25px',
                            border: '1px solid #666',
                            borderRadius: '4px',
                            fontSize: '13px',

                            color: '#666',
                            fontWeight: 'bold',
                        }}
                        value={newTasks}
                        type="text"
                        placeholder="Digite o nome da tarefa"
                    />
                    <CloseButton>
                        <GrClose
                            size={14}
                            color="#FFF"
                            type="button"
                            onClick={hideModal}
                        >
                            Fechar
                        </GrClose>
                    </CloseButton>
                    <textarea
                        va
                        id=""
                        cols="30"
                        rows="10"
                        style={{
                            padding: '10px',
                            flex: '1',
                            width: '304px',
                            height: '100px',
                            display: 'inline-block',
                            borderRadius: '4px',
                            color: '#666',
                            border: '1px solid #666',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                        }}
                        value={textInfo}
                        onChange={handleTextChange}
                        placeholder="Digite uma descricao sobre a tarefa"
                    />
                    <button
                        onClick={handleAddTask}
                        style={{
                            padding: '20px',
                            border: '0',
                            backgroundColor: '#cd1083',
                            color: '#fff',
                            fontWeight: 'bold',
                            borderRadius: '4px',
                            marginBottom: '55px',
                        }}
                        type="button"
                    >
                        Adicionar tarefa
                    </button>
                </div>
            </Modal>
            <List>
                {tasks.map((t) => (
                    <li key={t}>
                        <ItemList setDone={done}>
                            <label onClick={handleDoneTask}>
                                <input type="checkbox" />
                            </label>
                            {t}
                        </ItemList>
                        <LinkButtons>
                            <GrNext
                                onClick={ModalInfo}
                                size={18}
                                color="#666"
                            />

                            <GrTrash
                                onClick={() => handleDelete(t)}
                                size={20}
                                color="#666"
                            />
                        </LinkButtons>
                    </li>
                ))}
            </List>
            {/* <div
                style={{
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '0px',
                    margin: '200px auto',
                }}
            >
                {showModal === true ? (
                    <Modal>
                        <input
                            value={newTasks}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Digite o nome da tarefa"
                        />
                        <CloseButton>
                            <GrClose
                                size={15}
                                color="#fff"
                                type="button"
                                onClick={hideModal}
                            >
                                Fechar
                            </GrClose>
                        </CloseButton>
                        <textarea
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Digite uma descricao sobre a tarefa"
                        />
                        <button onClick={handleAddTask} type="button">
                            Adicionar tarefa
                        </button>
                    </Modal>
                ) : null}
            </div> */}
        </Container>
    );
}

export default Tasks;
