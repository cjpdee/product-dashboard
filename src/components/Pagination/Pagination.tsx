import React from "react";

interface PaginationProps {
    numPages: number;
    currentPage: number;
    handleClick(value: number): void;
}

export default class Pagination extends React.Component<PaginationProps> {
    pageIsActive(page) {
        return page === this.props.currentPage;
    }

    paginationList() {
        let pageBtns = [];
        for (let i = 0; i < this.props.numPages; i++) {
            console.log("yes");
            pageBtns.push(
                <button
                    className={`pagination__item ${this.pageIsActive(i) &&
                        "pagination__item--active"}`}
                    key={i}
                    onClick={() => {
                        this.props.handleClick(i);
                    }}
                ></button>
            );
        }
        return pageBtns;
    }

    render() {
        return <div className="pagination">{this.paginationList()}</div>;
    }
}
