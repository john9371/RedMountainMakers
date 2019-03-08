import React from 'react';

export default function AllUsersFunction(props) {

    const {name , member_id, email, member_status, date_created, last_payed, parent_id} = props.name;

    return (
        <>
            <div>
                <p>Member ID: {member_id} 
                    <br/> Name: {name} 
                    <br/>Email: {email} 
                    <br/> Member Status: {member_status} 
                    <br/>Date Created: {date_created} 
                    <br/>Last Payed: {last_payed} 
                    <br/>Parent ID: {parent_id} </p>
            </div>
        </>
    )
}