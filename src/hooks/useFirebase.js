import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Components/Firebase/firebase.init';
import Swal from 'sweetalert2';

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [success, setSuccess] = useState(false);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (name, email, password, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                //save user to the database
                saveUser(email, name, 'POST')

                // send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                    })
                    .catch((error) => {
                    });
                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                authError && Swal.fire(
                    'Something went wrong!',
                    `Please try again.`,
                    'error'
                );
            })
            .finally(() => {
                setIsLoading(false);
                setSuccess(true);
                success && Swal.fire(
                    'Registration Successfully!',
                    `Welcome, <b>${user?.displayName ? user?.displayName : 'User' }</b>`,
                    'success'
                );
            });
    }

    const loginUser = (email, password, location, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination)
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
                authError && Swal.fire(
                    'Something went wrong!',
                    `Please try again.`,
                    'error'
                );
            })
            .finally(() => {
                setIsLoading(false);
                setSuccess(true);
                success && Swal.fire(
                    'Login Successfully!',
                    `Welcome, <b>${user?.displayName ? user?.displayName : 'User' }</b>`,
                    'success'
                );
            });
    }

    // google sign in
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, user.photoURL, 'PUT')
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
                authError && Swal.fire(
                    'Something went wrong!',
                    `Please try again.`,
                    'error'
                );
            })
            .finally(() => {
                setIsLoading(false);
                setSuccess(true);
                success && Swal.fire(
                    'Login Successfully!',
                    `Welcome, <b>${user?.displayName ? user?.displayName : 'User' }</b>`,
                    'success'
                );
                const destination = location.state.from || '/';
                navigate(destination);
            });
    }

    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe
    }, [auth]);

    // for checking admin
    useEffect(() => {
        fetch(`https://smart-it-firm.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [user.email]);

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => { })
            .finally(() => { 
                setIsLoading(false);
                setSuccess(true);
                success && Swal.fire(
                    'Logout Successfully!',
                    `See you again, <b>${user?.displayName }</b>`,
                    'success'
                );
            });
    }

    const saveUser = (email, displayName, userImg, method) => {
        const user = { email, displayName, userImg };

        fetch('https://smart-it-firm.herokuapp.com/users', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
        user,
        isLoading,
        authError,
        admin
    }
}

export default useFirebase;