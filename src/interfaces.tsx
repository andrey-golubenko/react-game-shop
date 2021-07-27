export interface IGoods {
    mainId              : string
    displayDescription  : string
    displayName         : string
    price               : {finalPrice: number}
    displayAssets       : {full_background: string}[]
}

export interface IAddOrderItem {
    addOrderItem : ( item: IOrderItem  ) => void
}

export interface IGoodsListProps extends IAddOrderItem {
    goods : IGoods []
}

export interface IOrderItem {
    mainId          : string
    displayName     : string
    itemPrice       : number
    orderQuantity?  : number
}

interface IBasketShow {
    basketShow  : () => void
}

interface IDeleteOrderItem {
    deleteOrderItem : (mainId: string) => void
}

interface IAddOrderQuantity {
    addOrderQuantity: (mainId: string) => void
}

interface IDeleteOrderQuantity {
    deleteOrderQuantity: (mainId: string) => void
}

export interface IBasketItemProps extends IOrderItem, IDeleteOrderItem, IAddOrderQuantity, IDeleteOrderQuantity {}

export interface IBasketListProps extends IBasketShow, IDeleteOrderItem, IAddOrderQuantity, IDeleteOrderQuantity {
    order: IOrderItem[]
}

export interface ICartProps extends IBasketShow {
    quantity    : number
}

export interface ITooltipProps {
    name: string
    closeToolTip: () => void
}
