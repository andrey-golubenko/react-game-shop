export interface IGoods {
    mainId              : string
    displayDescription  : string
    displayName         : string
    price               : {finalPrice: number}
    displayAssets       : {full_background: string}[]
}

export interface IOrderItem {
    mainId          : string
    displayName     : string
    itemPrice       : number
    orderQuantity?  : number
}

export interface IShopState {
    goods?: IGoods[] | [],
    loading?: boolean,
    order?: IOrderItem[] | [],
    isBasketShow?: boolean,
    tooltipName?: string,
    setGoods?: ([]) => void,
    addOrderItem?: ( orderItem: IOrderItem  ) => void,
    deleteOrderItem?: (mainId: string) => void,
    addOrderQuantity?: (mainId: string) => void,
    deleteOrderQuantity?: (mainId: string) => void,
    handleBasketShow?: () => void,
    closeTooltip?: () => void
}

export interface IShopContext extends IShopState {}

export interface IShopAction {
    type  : string
    payload?: {
        mainId?: string
        orderItem?: IOrderItem
        goods?: IGoods[]
    }
}

export interface ILoadableImageProps {
    src: string
    alt?: string
    onLoad?(): void
}