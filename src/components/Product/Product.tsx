import React from "react";

import { ProductData } from "../../types/types.ts";
import { convertKebabCase } from "../../utils/index.ts";
import { FILTERS } from "../../constants/index";

export default class ProductListItem extends React.Component<ProductData> {
    // TODO: add image to api
    // TODO: rename 'product' to something more generic
    // TODO: replace all 'colour' with 'color'
    // TODO: use vw scaling? ???
    // TODO: add some client side validation to check there are no id duplicates possibly although this should be handled by server
    // TODO: numPages should be adjusted according to filters
    componentWillUpdate() {
        console.log("updating <Product>");
    }

    render() {
        return (
            <div className="product">
                <div
                    className={`
                        product__status
                        product__status--${convertKebabCase(
                            FILTERS[this.props.status]
                        )}
                    `}
                ></div>
                <div className="product__content">
                    <div className="product__image">
                        <img
                            src="https://images-na.ssl-images-amazon.com/images/I/71AoUS3O4RL._AC_UX500_.jpg"
                            alt=""
                        />
                    </div>
                    <span className="product__title">
                        {this.props.product_name}
                    </span>
                    <br />
                    <div>
                        <span className="product__detail">Category:</span>
                        <span className="product__detail product__detail--black">
                            {this.props.category}
                        </span>
                    </div>
                    <div>
                        <span className="product__detail">Size:</span>
                        <span className="product__detail product__detail--black">
                            UK {this.props.size_uk}
                        </span>
                    </div>
                    <div>
                        <span className="product__detail">Colour:</span>
                        <span className="product__detail product__detail--black">
                            {this.props.colour}
                        </span>
                    </div>
                    <span className="product__initials">
                        {this.props.customer_initials}
                    </span>
                </div>
            </div>
        );
    }
}
