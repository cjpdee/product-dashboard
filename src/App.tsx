import React from "react";
import "./App.css";

import ProductListItem from "./components/Product/Product.tsx";
import Filter from "./components/Filter/Filter.tsx";

import { ProductData } from "./types/types.ts";

import data from "./mockdata.ts";
import { ENTRIES_PER_PAGE, FILTERS } from "./constants";

interface appState {
    items: ProductData[];
    activeFilter: 0 | 1 | 2 | 3 | null;
    currentPage: number;
    numPages: number;
}

// TODO: consider changing this to function?
class App extends React.Component {
    state: appState = {
        items: data,
        numPages: Math.ceil(data.length / ENTRIES_PER_PAGE),
        activeFilter: null,
        currentPage: 0
    };

    getCurrentPageData(): ProductData[] {
        // TODO:
        // first this.state.items must be reduced by the selected filter if it exists
        let output = [...this.state.items];
        if (this.state.activeFilter !== null)
            output = this.state.items.filter(item => {
                console.log(item);
                return item.status === this.state.activeFilter;
            });

        console.log(
            "output",
            output.slice(
                this.state.currentPage * ENTRIES_PER_PAGE,
                (this.state.currentPage + 1) * ENTRIES_PER_PAGE
            )
        );

        return output.slice(
            this.state.currentPage * ENTRIES_PER_PAGE,
            (this.state.currentPage + 1) * ENTRIES_PER_PAGE
        );
    }

    render() {
        return (
            <div className="page">
                <header className="page__header">
                    {FILTERS.map((item, key) => {
                        return (
                            <Filter
                                label={item}
                                value={key}
                                key={key}
                                handleClick={chosenFilter => {
                                    this.setState({
                                        activeFilter: chosenFilter
                                    });
                                }}
                            ></Filter>
                        );
                    })}
                </header>
                <main className="page__body">
                    {this.getCurrentPageData().map(item => {
                        return (
                            <ProductListItem
                                {...item}
                                key={item.id}
                            ></ProductListItem>
                        );
                    })}
                </main>
                <footer>
                    <div>pagination</div>
                    <span>
                        {this.state.currentPage + 1} | {this.state.numPages}
                    </span>
                </footer>
            </div>
        );
    }

    fetchData() {
        // TODO: do the api call or return a json file
    }
}

export default App;
