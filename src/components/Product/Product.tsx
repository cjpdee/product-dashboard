import React from "react";

import { ProductData } from "../../types/types.ts";

export default class ProductListItem extends React.Component<ProductData> {
    constructor(props) {
        super(props);
    }
    // TODO: add image to api
    render() {
        console.log(this.props.product_name);
        return (
            <div>
                <div className={this.statusClass(this.props.status)}>
                    {this.props.status}
                </div>
                <div>
                    <img src="" alt="" />
                </div>
                <span>{this.props.product_name}</span>
                <span>{this.props.category}</span>
                <span>{this.props.size_uk}</span>
                <span>{this.props.colour}</span>
                <span>{this.props.customer_initials}</span>
            </div>
        );
    }

    statusClass(status: number) {
        let className: string;
        if (!status) className = "status--out-of-stock";
        if (status === 1) className = "status--in-queue";
        if (status === 2) className = "status--on-the-way";
        if (status === 3) className = "status--ready-to-try";

        return className;
    }
}
