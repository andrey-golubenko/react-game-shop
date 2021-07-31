import React, {createContext, useContext, useReducer} from 'react'
import {IGoods, IOrderItem, IShopContext} from "./interfaces";
import {reducer} from "./shopReducer";
import {
    CLOSE_TOOLTIP,
    BASKET_SHOW,
    DELETE_ORDER_ITEM,
    ADD_ORDER_ITEM,
    ADD_ORDER_QUANTITY,
    SET_GOODS, DELETE_ORDER_QUANTITY
} from "./constants";

const EmittedContext  = createContext ({});

export const useShopContext = (): IShopContext => useContext(EmittedContext);

export const ShopContext: React.FC = (props) => {

    const [state, dispatch]  = useReducer(reducer, {
        goods: [],
        loading: true,
        order: [],
        isBasketShow: false,
        tooltipName: ''
    });

    const setGoods = (goods: IGoods[]) => dispatch({ type: SET_GOODS, payload: { goods } });

    const addOrderItem = (orderItem: IOrderItem) => {
        dispatch({ type: ADD_ORDER_ITEM, payload: {orderItem}})
    };

    const deleteOrderItem = (mainId: string) => {
        dispatch({ type: DELETE_ORDER_ITEM, payload:{mainId} });
    };

    const addOrderQuantity = (mainId: string) => {
        dispatch({ type: ADD_ORDER_QUANTITY, payload: {mainId} });
    };

    const deleteOrderQuantity = (mainId: string) => {
        dispatch({ type: DELETE_ORDER_QUANTITY, payload: {mainId} });
    };

    const handleBasketShow = () => {
        dispatch({ type: BASKET_SHOW });
    };

    const closeTooltip = () => {
        dispatch({ type: CLOSE_TOOLTIP });
    };

    const contextValue = {
         goods: state.goods,
         setGoods,
         loading: state.loading,
         order: state.order,
         isBasketShow: state.isBasketShow,
         tooltipName: state.tooltipName,
         addOrderItem,
         deleteOrderItem,
         addOrderQuantity,
         deleteOrderQuantity,
         handleBasketShow,
         closeTooltip
    };

    return <EmittedContext.Provider value={ contextValue }>
              { props.children }
           </EmittedContext.Provider>
};