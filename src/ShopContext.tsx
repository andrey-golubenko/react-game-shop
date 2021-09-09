import React, {createContext, useContext, useReducer} from 'react';
import {IGoods, IOrderItem, IShopContext} from "./interfaces";
import {reducer} from "./shopReducer";
import {
    ADD_ORDER_ITEM,
    ADD_ORDER_QUANTITY,
    BASKET_SHOW,
    CLOSE_TOOLTIP,
    DELETE_ORDER_ITEM,
    DELETE_ORDER_QUANTITY,
    SET_GOODS
} from "./constants";

const EmittedContext  = createContext ({});

export const useShopContext = (): IShopContext => useContext(EmittedContext);

export const ShopContext: React.FC = (props) => {

    const [state, dispatch]  = useReducer(reducer, {
        goods: [],
        loading: true,
        order: [],
        isBasketShow: false,
        tooltipName: '',
    });

     state.setGoods = (goods: IGoods[]) => dispatch({ type: SET_GOODS, payload: { goods } });

     state.addOrderItem = (orderItem: IOrderItem) => {
        dispatch({ type: ADD_ORDER_ITEM, payload: {orderItem}})
    };

     state.deleteOrderItem = (mainId: string) => {
        dispatch({ type: DELETE_ORDER_ITEM, payload:{mainId} });
    };

     state.addOrderQuantity = (mainId: string) => {
        dispatch({ type: ADD_ORDER_QUANTITY, payload: {mainId} });
    };

     state.deleteOrderQuantity = (mainId: string) => {
        dispatch({ type: DELETE_ORDER_QUANTITY, payload: {mainId} });
    };

     state.handleBasketShow = () => {
        dispatch({ type: BASKET_SHOW });
    };

     state.closeTooltip = () => {
        dispatch({ type: CLOSE_TOOLTIP });
    };

    return <EmittedContext.Provider value={ state }>
              { props.children }
           </EmittedContext.Provider>
};