import {types} from "../types/types";

const openModal = (data)=> ({
        type: types.openModal,
        payload: data
})

const closeModal = ()=> ({
    type: types.closeModal
})


export {
    openModal,
    closeModal
}