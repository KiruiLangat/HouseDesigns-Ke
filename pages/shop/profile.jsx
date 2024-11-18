import React from 'react';
import '@fontsource/poppins';
const style = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '20px',
    textAlign: 'center',
    padding: '20px',
};

const Profile = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', style }}>
            <h1 style={{fontWeight:'300'}}>User Profile</h1>
            <h2 style={{fontWeight:'300', fontSize:'16px'}}>Page is currently Under Modification!</h2>
        </div>
    );
};

export default Profile;
