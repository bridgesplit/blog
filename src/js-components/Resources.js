import clsx from 'clsx';
import styles from './styles.module.css';
import React from 'react';

import DiscordLogo from "@site/static/img/discord_logo.svg";
import AppLogo from "@site/static/img/app_logo.svg";
import AnalyticsIcon from "@site/static/img/icons/analytics.svg";
import FeedbackIcon from "@site/static/img/icons/feedback.svg";

const resourceItems = [
    {
        title: "Markets",
        description: <>Borrow and lend </>,
        Image: AppLogo,
        slug: "https://app.loopscale.com"

    },
    {
        title: "Discord",
        description: <>Join community</>,
        Image: DiscordLogo,
        slug: "https://discord.com/invite/A9xnqqzACF"
    },
    // {
    //     title: "Analytics",
    //     description: <>Explore metrics</>,
    //     Image: AnalyticsIcon,
    //     slug: "https://dashboards.loopscale.com",
    // },

    {
        title: "Feedback",
        description: <>Submit requests</>,
        Image: FeedbackIcon,
        slug: "https://loopscale.canny.io"
    }
]


function Resource(resourceItem) {
    const { title, Image, slug, description } = resourceItem;
    return (
        <div className={clsx('col col--4 ')}>
            <a target="_blank" href={slug}>
                <div className={clsx('card', styles.resource)}>
                    <div className={clsx('card__body')}>
                        <div className={clsx(styles.resourceContent)}>
                            <Image className={styles.resourceIcon} role="img" />
                            <div>
                                <h4>{title}</h4>
                                <p className={styles.cardBody}>{description}</p>
                            </div>
                        </div>
                    </div>
                </div >
            </a>
        </div >
    );
}

export default function Resources() {
    return (
        <section>
            <div className={clsx("container", styles.resourcesContainer)}>
                <h3>More ways to explore</h3>
                <div className="row">
                    {resourceItems.map((props, idx) => (
                        <Resource key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section >
    );
}