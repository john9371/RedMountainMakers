import React from 'react';
import { Link } from 'react-router-dom';

export default function AllUsersFunction(props) {

    const {name , member_id} = props.name;

    return (
        <>
            <div>
                <Link to={`/users/${member_id}`}>{name}</Link>
            </div>
        </>
    )
}