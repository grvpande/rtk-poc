import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./user-slice";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <>
            <h2>UserList</h2>
            {users.usersList.length ? (
                <ul className="user-list">
                    {users.usersList.map((user) => (
                        <li key={user.id}>{user.name.firstname}</li>
                    ))}
                </ul>
            ) : null}
        </>
    );
};

export default UserList;
