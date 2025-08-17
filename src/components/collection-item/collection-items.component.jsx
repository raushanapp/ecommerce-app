import React from "react";
import "./collection-items.styles.scss";

const CollectionItems = ({id, name,price,imageUrl}) => (
    <div className="collection-items" key={id}>
        <div
            className="image"
            style={{backgroundImage:`url(${imageUrl})`}}
        />
        <div className="collection-footer">
            <span className="name" >{name}</span>
            <span className="price">{price}</span>
        </div>

    </div>
)
export default CollectionItems