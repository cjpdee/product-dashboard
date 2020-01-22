import React from "react";

interface ProductData {}

export default class ProductListItem extends React.Component<ProductData> {
    render() {
        return (
            <div>
                <div>status colour</div>
                <div>
                    <img src="" alt="" />
                </div>
                <span>product name</span>
                <span>category</span>
                <span>size</span>
                <span>colour</span>
                <span>initials</span>
            </div>
        );
    }
}
