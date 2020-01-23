import React from "react";

interface FilterProps {
    value: number;
    label: string;
    active: boolean;
    handleClick(value: number): void;
}

export default class Filter extends React.Component<FilterProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
                onClick={() => {
                    this.props.handleClick(this.props.value);
                }}
            >
                <div>{this.props.value}</div>
                <span>{this.props.label}</span>
            </button>
        );
    }
}
