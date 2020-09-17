import React from "react";
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <div>
            <button onClick={create}>Create Room</button>
            <button onClick={() => console.log(props)}>See props</button>
        </div>
    );
};

export default CreateRoom;
