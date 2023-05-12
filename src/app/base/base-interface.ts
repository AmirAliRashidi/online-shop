export interface ICategories {
    category_name: string,
    items: string[],
    image?: string,
    active?: boolean,
}

export interface IItems {
    title: string,
    image?: string,
    colors?: string[],
    price?: number,
}