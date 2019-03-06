import React from 'react';

export default function SingleUserFunction(props) {

    const { member_id, name, email, date_created, member_status, last_payed, parent_id } = props.oneUser;

    return (
        <>
            <div>
                <div>
                    {/*<h3>{member_id} ({name} {email} {date_created} 
                    {member_status} {last_payed} {parent_id})</h3> */}
                    <p>Member ID: {member_id} </p>
                    <p> Name: {name} </p>
                    <p>Email: {email} </p>
                    <p> Member Status: {member_status} </p>
                    <p>Date Created: {date_created} </p>
                    <p>Last Payed: {last_payed} </p>
                    <p>Parent ID: {parent_id} </p>
                </div>
            </div>
        </>
    )
}