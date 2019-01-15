interface payment_offers_common_object {
    title?: any,
    description?: any,
    name?: any,
    image?: any,
    offer_img?: any

}

export interface home_interface {
    path: {
        home_path?: any
        product_path?: any
        related_path?: any
        cart_path?: any
        single_product_path?: any
        banner_path?: any
        sizechart_path?: any
        home_bannerpath?: any
        cart_banner_path?: any
        fanbook_path?: any
        cat_banner_path?: any
        zoom_path_additional?: any
        zoom_path_original?: any
        product_media_path?: any
        payment_gateway_path?: any
        app_object_path?: any
        multiple_colors_path?: any
        style_filters_path?: any
        style_filters_extension?: any
        pg_path?: any,
    },
    blog_path?: any,
    contact_us: {
        headings?: any,
        values?: any,
        latitude?: any,
        longitude?: any
    },
    payment_offers: {
        save_cards: payment_offers_common_object,
        credit_card: payment_offers_common_object,
        net_banking: payment_offers_common_object,
        upi: payment_offers_common_object,
        paytm: payment_offers_common_object,
        phonepe: payment_offers_common_object
        paypal: payment_offers_common_object,
        amazonpay: payment_offers_common_object,
        mobikwik: payment_offers_common_object,
        payu_money: payment_offers_common_object,
        wallets: payment_offers_common_object,
        cash_on_delivery: payment_offers_common_object,
    },
    home_boxes: {
        hp_list?: any,
        men_hp_list?: any,
        women_hp_list?: any,
        segmentation?: any
    },
    home_page_planner: {
        hp_list_planner?: any
    },
    new_mobile_menu?: any

}