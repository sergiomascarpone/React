export const LOGIN = 'LOGIN';
export const Open_Modal = 'Open_Modal';
export const Close_Modal = 'Close_Modal';
export const On_Add = 'On_Add';



export const onLogin = (user) => {
    return {
        type: LOGIN,
        payload: user,
    }
}

export const onOpenModal = () => {
    return {
        type: Open_Modal,

    }
}

export const onCloseModal = () => {
    return {
        type: Close_Modal,
    }
}
export const onAdd = () => {
    return {
        type: On_Add,
    }
}