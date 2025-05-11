import {cartActions} from "../store/slices/cartSlice.js";
import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";

const rootActions = {
    ...cartActions,
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() =>
            bindActionCreators(rootActions, dispatch),
        [dispatch])
}