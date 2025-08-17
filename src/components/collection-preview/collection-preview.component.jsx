import React from "react";
import "./collection-preview.styles.scss";
import CollectionItems from "../collection-item/collection-items.component";

const CollectionPreview = ({title,items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map(({id,...itemsProps}) => (
                <CollectionItems key={id} {...itemsProps} />
            ))}
        </div>
    </div>
)
export default CollectionPreview;