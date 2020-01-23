import React from "react";

import ProductListItem from "./components/Product/Product.tsx";
import Filter from "./components/Filter/Filter.tsx";
import Pagination from "./components/Pagination/Pagination.tsx";

import { ProductData } from "./types/types.ts";

import data from "./mockdata.ts";
import { ENTRIES_PER_PAGE, FILTERS } from "./constants";

interface appState {
    items: ProductData[];
    activeFilter: 0 | 1 | 2 | 3 | null;
    currentPage: number;
    numPages: number;
}

class App extends React.Component {
    state: appState = {
        items: data,
        numPages: Math.ceil(data.length / ENTRIES_PER_PAGE),
        activeFilter: null,
        currentPage: 0
    };

    getCurrentPageData(): ProductData[] {
        let output = [...this.state.items];

        if (this.state.activeFilter !== null)
            output = this.state.items.filter(item => {
                return item.status === this.state.activeFilter;
            });

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
                            />
                        );
                    })}
                </header>
                <main className="page__body">
                    {this.getCurrentPageData().map(item => {
                        return <ProductListItem {...item} key={item.id} />;
                    })}
                </main>
                <footer className="page__footer">
                    <Pagination
                        numPages={this.state.numPages}
                        currentPage={this.state.currentPage}
                        handleClick={chosenPage => {
                            this.setState({ currentPage: chosenPage });
                        }}
                    />
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
