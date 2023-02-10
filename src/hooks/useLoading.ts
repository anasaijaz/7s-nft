import {useDispatch, useSelector} from "react-redux";
import {uiSlice} from "../store/slices/uiSlice";

export const useLoading = () => {
    // @ts-ignore
    const isLoading = useSelector(state => state.ui.loading)
    const dispatch = useDispatch()
    const startLoading = () => {
        dispatch(uiSlice.actions.startLoading())
    }

    const stopLoading = () => {
        dispatch(uiSlice.actions.stopLoading())
    }

    return [isLoading, startLoading, stopLoading]
}
