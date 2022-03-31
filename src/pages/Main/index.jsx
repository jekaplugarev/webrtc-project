import React, {useEffect, useRef, useState} from 'react';
import socket from "../../socket";
import ACTIONS from "../../socket/actions";
import {useNavigate} from "react-router";
import {v4} from "uuid";


export default function Main() {
    const [rooms, updateRooms] = useState([])
    const navigate = useNavigate()
    const rootNode = useRef()

    console.log(rooms)

    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []} = {}) => {
            if (rootNode.current) {
                updateRooms(rooms)
            }
        })
    }, [])

    return (
        <div ref={rootNode}>
            <h1>
                Комнаты
            </h1>
            <ul>
                {rooms.map(roomID => (
                    <li key={roomID}>
                        {roomID}
                        <button
                            onClick={() => {
                                navigate(`/room/${roomID}`)
                            }}
                        >
                            Подключиться к комнате
                        </button>
                    </li>
                ))}
            </ul>
            <button
             onClick={() => {
                 navigate(`/room/${v4()}`)
             }}
            >
                Создать новую комнату
            </button>
        </div>
    );
}