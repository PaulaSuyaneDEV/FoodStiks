'use client'
import React, {ReactElement} from 'react';
import {onAuthStateChanged, User as FirebaseUser} from 'firebase/auth';
import {auth} from '../firebase/config';


export const AuthContext = React.createContext({});

export const useAuthContext = (): any => React.useContext(AuthContext);

export const AuthContextProvider = ({children}: { children: ReactElement }) => {
    const [user, setUser] = React.useState<FirebaseUser | null>(null);
    const [loading, setLoading] = React.useState(false);
    
    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{user}}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};
