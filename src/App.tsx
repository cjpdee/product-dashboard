import React from "react";

import Product from "./components/Product/Product.tsx";
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
        items: [],
        numPages: Math.ceil(data.length / ENTRIES_PER_PAGE),
        activeFilter: null,
        currentPage: 0
    };

    componentDidMount() {
        this.setState({ items: this.fetchData() });

        setInterval(() => {
            this.nextPage();

            // This line could be used if the app was connected to an API
            // this.setState({items: this.fetchData()});
        }, 10000);
    }

    render() {
        return (
            <div className="page">
                <header className="page__header">
                    {this.state.activeFilter !== null && (
                        <button
                            className="filter"
                            onClick={() => {
                                this.clearFilters();
                            }}
                        >
                            <div className="filter__cross"></div>
                            <span className="filter__label">Clear Filters</span>
                        </button>
                    )}

                    {FILTERS.map((item, key) => {
                        return (
                            <Filter
                                label={item}
                                value={key}
                                key={key}
                                handleClick={chosenFilter => {
                                    this.setState({
                                        activeFilter: chosenFilter,
                                        currentPage: 0
                                    });
                                }}
                            />
                        );
                    })}
                </header>
                <main className="page__body">
                    {this.getCurrentPageData().map(item => {
                        return <Product {...item} key={item.id} />;
                    })}
                </main>
                <footer className="page__footer">
                    <Pagination
                        numPages={this.getPageCount()}
                        currentPage={this.state.currentPage}
                        handleClick={chosenPage => {
                            this.setState({ currentPage: chosenPage });
                        }}
                    />
                </footer>
            </div>
        );
    }

    nextPage() {
        this.state.currentPage < this.getPageCount() - 1
            ? this.setState({ currentPage: this.state.currentPage + 1 })
            : this.setState({ currentPage: 0 });
    }

    getFilteredData() {
        let output = [...this.state.items];
        if (this.state.activeFilter !== null)
            output = this.state.items.filter(item => {
                return item.status === this.state.activeFilter;
            });
        return output;
    }

    getPageCount() {
        return Math.ceil(
            (this.getFilteredData().length - 1) / ENTRIES_PER_PAGE
        );
    }

    getCurrentPageData(): ProductData[] {
        return this.getFilteredData().slice(
            this.state.currentPage * ENTRIES_PER_PAGE,
            (this.state.currentPage + 1) * ENTRIES_PER_PAGE
        );
    }

    clearFilters() {
        this.setState({ activeFilter: null });
    }

    fetchData() {
        // This function would include a fetch request to a corresponding API
        // and would return the response data
        return data;
    }
}

export default App;
