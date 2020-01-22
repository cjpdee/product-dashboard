import React from "react";
import "./App.css";

import ProductListItem from "./components/Product/Product.tsx";

import { ProductList } from "./types/types.ts";

import data from "./mockdata.js";
import { ENTRIES_PER_PAGE } from "./constants";

interface appState extends ProductList {
    items: ProductList;
    activeFilter: 0 | 1 | 2 | 3 | null;
    currentPage: number;
    numPages: number;
}

// TODO: consider changing this to function?
class App extends React.Component {
    state: appState = {
        items: data,
        numPages: 1, // this.state.items.length / ENTRIES_PER_PAGE,
        activeFilter: null,
        currentPage: 1
    };

    render() {
        console.log(this.state);
        return (
            <div className="page">
                <header className="page__header"></header>
                <div className="page__body">
                    {this.state.items.map((item, key) => {
                        // TODO: this needs fixing
                        if (
                            key >=
                            (this.state.currentPage + 1) * ENTRIES_PER_PAGE
                        )
                            return;
                        else
                            return (
                                <ProductListItem
                                    {...item}
                                    key={item.id}
                                ></ProductListItem>
                            );
                    })}
                </div>
            </div>
        );
    }

    fetchData() {
        // TODO: do the api call or return a json file
    }
}

export default App;
