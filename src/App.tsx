import React from "react";
import "./App.css";

import ProductListItem from "./components/Product/ListItem.tsx";

interface apiSchema {
    items: [
        {
            id: string;
            product_name: string;
            category: string;
            size_uk: number;
            colour: string;
            customer_initials: string;
            status: 0 | 1 | 2 | 3;
        }
    ];
}
// TODO: consider changing this to function?
class App extends React.Component {
    state = {
        items: [{}]
    };
    render() {
        return (
            <div className="App">
                <header className="App-header"></header>
                <div>
                    {this.state.items.map(item => {
                        return <ProductListItem props={item}></ProductListItem>;
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
