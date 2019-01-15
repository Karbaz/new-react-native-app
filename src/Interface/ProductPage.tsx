export interface product_interface {
    id?: any,
    name?: any,
    url?: any,
    description: {
        left?: any,
        right?: any
    },
    meta_title?: any,
    meta_description?: any,
    meta_keywords?: any,
    clevertap_object: {
        event?: any,
        ec?: any,
        pixel_data?: any
    },
    price?: any,
    status?: any,
    limited_edition?: any,
    ptype?: any,
    gender?: any,
    canonical_url?: any,
    colors?: any,
    cat_material?: any,
    mrp?: any,
    offer?: any,
    updated_at?: any,
    sort_by_new?: any,
    brand?: any,
    parent_category: {
        id?: any,
        name?: any
    },
    child_categories?: any,
    product_description_images: {
        desktop?: any,
        mobilesite?: any
    },
    category_info: {
        cat_type?: any,
        subtype?: any,
        gender?: any,
        subclass?: any,
        sleeve?: any,
        fabric?: any,
        brand?: any,
        model?: any,
        is_printed?: any
    },
    images: {
        original?: any,
        display?: any,
        additional?: any,
        flip?: any
    },
    is_gift_card?: any,
    gift_card_occasions?: any,
    cod_enable?: any,
    breadCrumb?: any,
    product_type?: any,
    sizes?: any,
    coin_statement?: any,
    coin_know_more_statement?: any,
    in_stock?: any,
    stock_comment?: any,
    color?: {
        id?: any,
        name?: any
    },
    tabular_description: {
        fit_description: {
            name?: any,
            text?: any
        },
        fabric_detail: {
            name?: any,
            text?: any,
            image?: any
        },
        delivery_info: {
            name?: any,
            text?: any
        }

    },
    cod_statement?: any,
    tracker_data?: any

}