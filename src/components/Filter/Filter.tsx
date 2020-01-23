import React from "react";

import { convertKebabCase } from "../../utils/index.ts";

interface FilterProps {
    value: number;
    label: string;
    active: boolean;
    handleClick(value: number): void;
}

export default class Filter extends React.Component<FilterProps> {
    render() {
        return (
            <button
                className="filter"
                onClick={() => {
                    this.props.handleClick(this.props.value);
                }}
            >
                <div
                    className={`filter__status filter__status--${convertKebabCase(
                        this.props.label
                    )}`}
                ></div>
                <span className="filter__label">{this.props.label}</span>
            </button>
        );
    }
}
