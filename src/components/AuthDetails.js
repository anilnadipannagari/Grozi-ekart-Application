import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        // This listener function will be called whenever the user's auth state changes
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setAuthUser(user);
            } else {
                // User is signed out
                setAuthUser(null);
            }
        });

        // This is a cleanup function that will be called when the component is unmounted
        // It's important to prevent memory leaks
        return () => {
            listen();
        }
    }, []); // The empty array means this effect runs only once when the component mounts

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out successful');
        }).catch(error => console.log(error));
    }

    return (
        <div style={{ margin: '1rem auto', textAlign: 'center' }}>
            {authUser ? (
                <>
                    <p>{`Signed In as ${authUser.email}`}</p>
                    <button onClick={userSignOut} style={{ padding: '0.5rem 1rem', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Sign Out
                    </button>
                </>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    );
}

export default AuthDetails;
