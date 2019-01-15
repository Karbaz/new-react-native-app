export interface category_interface {
    total_product_count?: any,
    product_count?: any,
    default_sortby?: any,
    show_filter?: any,
    products?: any,
    segments?: any,
    id?: any,
    name?: any,
    url?: any,
    title?: any,
    description?: any,
    desktop_banner?: any,
    banner?: any,
    meta_title?: any,
    meta_description?: any,
    meta_keywords?: any,
    h?: any,
    total_page_count?: any,
    type?: any,
    clevertap_object: {
        event?: any,
        ec?: any,
        pixel_data?: any
    },
    labels?: any,

    // product object inside products array
    product_object: {
        id?: any,
        name?: any,
        url?: any,
        gender?: any,
        mrp?: any,
        price?: any,
        status?: any,
        flip_image?: any,
        display_image?: any,
        limited_edition?: any,
        color_name?: any,
        group_count?: any,
        category_info: {
            gender?: any,
            subclass?: any
        },
        sp?: any,
        designer?: any,
        cat_designer?: any,
        offer?: any,
        in_stock?: any,
        coin_statement?: any

    }
}