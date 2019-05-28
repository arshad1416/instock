import React from 'react';

function ItemInfo(props) {
    return(
        <div className="info__card">
            <div className="info__card-description">
                <span className="info__card-description-label info__card-label">
                    ITEM DESCRIPTION
                </span>
                <span className="info__card-descripton-text">
                    {props.itemInfo.description}
                </span>
            </div>
            <div className="info__card-details">
                <div className="info__card-details-ordby">
                    <span className="info__card-details-ordby-label info__card-label">
                        ORDERED BY
                    </span>
                    <span className="info__card-details-ordby-text">
                        {props.itemInfo.description}
                    </span>
                </div>
                <div className="info__card-details-ref">
                    <span className="info__card-details-ref-label info__card-label">
                        REFERENCE NUMBER
                    </span>
                    <span className="info__card-details-ref-text">
                        {props.itemInfo.id}
                    </span>
                </div>
                <div className="info__card-details-ordlast">
                    <span className="info__card-details-ordlast-label info__card-label">
                        LAST ORDERED
                    </span>
                    <span className="info__card-details-ordlast-text">
                        {props.itemInfo.lastOrdered}
                    </span>
                </div>
                <div className="info__card-details-loc">
                    <span className="info__card-details-loc-label info__card-label">
                        LOCATION
                    </span>
                    <span className="info__card-details-loc-text">
                        {props.itemInfo.location}
                    </span>
                </div>
                <div className="info__card-details-quant">
                    <span className="info__card-details-quant-label info__card-label">
                        QUANTITY
                    </span>
                    <span className="info__card-details-quant-text">
                        {props.itemInfo.quantity}
                    </span>
                </div>
                <div className="info__card-details-cat">
                    <span className="info__card-details-cat-label info__card-label">
                        CATEGORIES
                    </span>
                    <span className="info__card-details-cat-text">
                        {props.itemInfo.categories}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ItemInfo;