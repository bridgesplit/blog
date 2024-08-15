import clsx from 'clsx';
import styles from './styles.module.css';
import React from 'react';
import sol from "@site/static/img/docs/product-cards/sol.png"
import lp from "@site/static/img/docs/product-cards/lp.png"
import usdc from "@site/static/img/docs/product-cards/usdc.png"
import earn from "@site/static/img/docs/product-cards/earn.png"
import OutwardArrowIcon from '@site/static/img/icons/outward_arrow.svg'



const productItems = [

    {
        slug: "https://app.loopscale.com/issuers/staked_sol/",
        imgPath: sol,
    },
    {
        slug: "https://app.loopscale.com/issuers/orca/",
        imgPath: lp
    },
    {
        slug: "https://app.loopscale.com/lend/USDC",
        imgPath: earn
    },
    {
        slug: "https://app.loopscale.com/markets/USDC",
        imgPath: usdc
    },
]


const Product = (productItem) => {
    const { slug, imgPath } = productItem;

    return (
        <a target="_blank" href={slug}>
            <div className={clsx('card', styles.product)}>
                <OutwardArrowIcon className={clsx(styles.productArrowIcon)} role="img" />
                <img src={imgPath} className={clsx(styles.productImage)} />
            </div>
        </a>
    )
};

export default function Products() {
    return (
        <div className="container">
            <div className="row">
                {productItems.map(productItem =>
                    <div className={clsx('col col--3')}>
                        <Product {...productItem} />
                    </div>)
                }
            </div>
        </div>
    );
}
