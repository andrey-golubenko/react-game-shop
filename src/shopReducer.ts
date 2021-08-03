import React from 'react'
import {IShopAction, IShopState} from "./interfaces";
import {
    CLOSE_TOOLTIP,
    BASKET_SHOW,
    DELETE_ORDER_ITEM,
    ADD_ORDER_ITEM,
    ADD_ORDER_QUANTITY,
    DELETE_ORDER_QUANTITY,
    SET_GOODS
} from "./constants";

export const reducer: React.Reducer<IShopState, IShopAction> = (state, { type, payload }) => {
    switch (type) {
        case ADD_ORDER_ITEM: {
            let newOrder = null;
            const itemIndex = state.order!.findIndex(item => item.mainId === payload!.orderItem!.mainId!);
            if (itemIndex < 0) {
                const newItem = {
                    ...payload!.orderItem!,
                    orderQuantity: 1
                };
                newOrder = [...state.order!, newItem]
            } else {
                newOrder = state.order!.map((item, index) => {
                    if (index === itemIndex) {
                        return {
                            ...item,
                            orderQuantity: item.orderQuantity! + 1
                        }
                    } else {
                        return item
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                tooltipName: payload?.orderItem?.displayName!
            }
        }
        case DELETE_ORDER_ITEM: {
            return { ...state, order: state.order!.filter(item => item.mainId !== payload?.mainId) };}
        case ADD_ORDER_QUANTITY: {
            return {
                ...state,
                order: state.order!.map(item => {
                    if (item.mainId === payload!.mainId!) {
                        return {
                            ...item,
                            orderQuantity: item.orderQuantity! + 1
                        }
                    }
                    return item
                })
            }
        }
        case DELETE_ORDER_QUANTITY: {
            return {
                ...state,
                order: state.order!.map(item => {
                    if (item.mainId === payload!.mainId! && item.orderQuantity! > 0) {
                        return {
                            ...item,
                            orderQuantity: item.orderQuantity! - 1
                        }
                    }
                    return item
                })
            }
        }
        case BASKET_SHOW: {
            return { ...state, isBasketShow: !state.isBasketShow };
        }
        case CLOSE_TOOLTIP: {
            return { ...state, tooltipName: '' };
        }
        case SET_GOODS: {
            return {
                ...state,
                goods: payload!.goods! || [],
                loading: false
            }
        }
        default: return state
    }
};