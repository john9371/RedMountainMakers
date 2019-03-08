import React from 'react';

export default function DataFunction(props) {

    const { update_id, total_members, total_basic_members, total_boss_members,
        total_new_members_december, total_new_members_january, total_new_members_february,
        total_new_members_march, members_unpaid } = props.info;

    return (
        <>
            <div>
                <p> UPDATE #{update_id}
                    <br />total_members: {total_members}
                    <br />total_basic_members = {total_basic_members}
                    <br />total_boss_members = {total_boss_members}
                    <br />total_new_members_december ={total_new_members_december}
                    <br />total_new_members_january = {total_new_members_january} 
                    <br />total_new_members_february = {total_new_members_february}
                    <br />total_new_members_march = {total_new_members_march}
                    <br />members_unpaid = {members_unpaid}
                </p>
            </div>
        </>
    )
}