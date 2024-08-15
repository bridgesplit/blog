import clsx from 'clsx';
import styles from './styles.module.css';
import React from 'react';


import OutwardArrowIcon from '@site/static/img/icons/outward_arrow.svg'
import InfoIcon from '@site/static/img/icons/info.svg'
import CodeIcon from '@site/static/img/icons/code.svg'
import OpenBookIcon from '@site/static/img/icons/open_book.svg'



const featureItems = [
  {
    title: 'What is Loopscale',
    Icon: InfoIcon,
    description: (
      <>
        Learn about the core concepts of the Loopscale Protocol, Loopscale Markets Application, the Creditbook, and more.
      </>
    ),
    slug: "/concepts/overview",
    disabled: false
  },
  {
    title: 'User Guides',
    Icon: OpenBookIcon,
    description: (
      <>
        Learn how to get started borrowing and lending on Loopscale with easy-to-follow user guides.
      </>
    ),
    slug: "/user-guides/create-an-account",
    disabled: true

  },
  {
    title: 'Loopscale Protocol',
    Icon: CodeIcon,
    description: (
      <>
        Learn about the architecture of the Loopscale Protocol smart contracts through guided examples.
      </>
    ),
    slug: "/protocol",
    disabled: true

  },
];
function Tag({ text }) {
  return <div className={clsx(styles.tag)}><p>{text}</p></div>
}

function FeatureContent(featureItem) {
  const { title, Icon, description, disabled } = featureItem;
  return (
    <div className={clsx('card', disabled && 'disabled')}>
      <div className={clsx('card__body')}>
        <div className={clsx(styles.featureHeader)}>
          <Icon className={clsx(styles.featureIcon)} role="img" />
          {disabled ? <Tag text="Coming Soon" /> : <OutwardArrowIcon className={clsx(styles.featureArrowIcon)} role="img" />}
        </div>
        <h3>{title}</h3>
        <p className={clsx(styles.cardBody)}>{description}</p>
      </div>
    </div >
  )
}

function Feature(featureItem) {
  const { slug, disabled } = featureItem;
  return (
    <div className={clsx('col col--4 ')}>
      {
        disabled ? <FeatureContent {...featureItem} /> :
          <a target="_self" href={slug}><FeatureContent {...featureItem} /></a>

      }
    </div >
  )
};
export default function Features() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {featureItems.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section >
  );
}
