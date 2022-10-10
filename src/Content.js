import React from "react";
import { data } from "./data/data";
import Card from "./Card";
export default function Content() {
    return (
        <div id="content" className="d-flex flex-wrap justify-content-center mt-4">
            {data.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
}
