import React from "react";

import { ProductData } from "../../types/types.ts";
import { convertKebabCase } from "../../utils/index.ts";
import { FILTERS } from "../../constants/index";

export default class ProductListItem extends React.Component<ProductData> {
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
                            src={this.props.image}
                            alt={this.props.product_name}
                        />
                    </div>
                    <span className="product__title">
                        {this.props.product_name}
                    </span>
                    <div className="product__content-item">
                        <span className="product__detail">Category:</span>
                        <span className="product__detail product__detail--black">
                            {this.props.category}
                        </span>
                    </div>
                    <div className="product__content-item">
                        <span className="product__detail">Size:</span>
                        <span className="product__detail product__detail--black">
                            UK {this.props.size_uk}
                        </span>
                    </div>
                    <div className="product__content-item">
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
