import React, { useState } from 'react';
import './Profile.css';
import avt from './avt.jpg';

function Profile() {
    const [edit_status, set_edit_status] = useState('edit_profile');
    const [name, set_name] = useState('Nguyen Van A');
    const [username, set_username] = useState('nguyenvana');
    const [email, set_email] = useState('nguyenvana@example.com');
    const [password, set_password] = useState('');
    const [new_password, set_new_password] = useState('');
    const [compare_password, set_compare_password] = useState('');

    return (
        <div className="container mt-5 pt-4" style={{ paddingBottom: '4rem' }}>
            <div className="group_profile">
                <div className="group_setting mt-3">
                    <div className="setting_left">
                        <div className={edit_status === 'edit_profile' ? 'setting_item setting_item_active' : 'setting_item'}
                            onClick={() => set_edit_status('edit_profile')}>
                            <a className={edit_status === 'edit_profile' ? 'a_setting_active' : ''} style={{ fontSize: '1.1rem' }}>Edit Profile</a>
                        </div>
                        <div className={edit_status === 'change_password' ? 'setting_item setting_item_active' : 'setting_item'}
                            onClick={() => set_edit_status('change_password')}>
                            <a className={edit_status === 'change_password' ? 'a_setting_active' : ''} style={{ fontSize: '1.1rem' }}>Change Password</a>
                        </div>
                    </div>
                    <div className="setting_right">
                        {edit_status === 'edit_profile' ? (
                            <div className="setting_edit_profile">
                                <div className="txt_setting_edit pt-3 pb-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span style={{ fontWeight: '600' }}>Name</span>
                                    </div>
                                    <div>
                                        <input className="txt_input_edit" type="text" value={name} onChange={(e) => set_name(e.target.value)} />
                                    </div>
                                </div>
                                <div className="txt_setting_edit pt-3 pb-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span style={{ fontWeight: '600' }}>Username</span>
                                    </div>
                                    <div>
                                        <input className="txt_input_edit" type="text" value={username} onChange={(e) => set_username(e.target.value)} />
                                    </div>
                                </div>
                                <div className="txt_setting_edit pt-3 pb-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span style={{ fontWeight: '600' }}>Email</span>
                                    </div>
                                    <div>
                                        <input className="txt_input_edit" type="text" disabled={true} value={email} />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="setting_change_password">
                                <div className="txt_setting_edit pt-3 pb-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span style={{ fontWeight: '600' }}>Old Password</span>
                                    </div>
                                    <div>
                                        <input className="txt_input_edit" type="password" value={password} onChange={(e) => set_password(e.target.value)} />
                                    </div>
                                </div>
                                <div className="txt_setting_edit pt-3 pb-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span style={{ fontWeight: '600' }}>New Password</span>
                                    </div>
                                    <div>
                                        <input className="txt_input_edit" type="password" value={new_password} onChange={(e) => set_new_password(e.target.value)} />
                                    </div>
                                </div>
                                <div className="txt_setting_edit pt-3 pb-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span style={{ fontWeight: '600' }}>Confirm New Password</span>
                                    </div>
                                    <div>
                                        <input className="txt_input_edit" type="password" value={compare_password} onChange={(e) => set_compare_password(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
