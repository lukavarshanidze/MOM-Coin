import React from 'react'
import styles from './styles.module.css'
import twitter from '../../../assets/body/socialLogos/twitter.svg'

const Footer = () => {
  return (
    <div className={styles.container}>
        <span className={styles.container_span}>Find out more about MuskOnMars</span>
        <div className={styles.container__}>
            
        </div>



        <div className={styles.nextContainer}>
            
            <div className={styles.childDiv}>
                <p className={styles.childTitle}>Contact</p>
                <div className={styles.childItem}>
                    <p>muskonmarscoin@gmail.com</p>
                    <a href='https://twitter.com/muskonmarscoin' target='_blank' id='community'>
                        <img src={twitter}/>
                    </a>
                </div>
            </div>
            <div className={styles.childDiv}>
                <p className={styles.childTitle}>Sitemap</p>
                <ul className={styles.childItem}>
                    <li>So Home</li>
                    <li>What is MOM?</li>
                    <li>How to buy?</li>
                    <li>Very Community</li>
                    <li>So MOM</li>
                </ul>
            </div>
            <div className={styles.childDiv}>
                <p className={styles.childTitle}>About</p>
                <ul className={styles.childItem}>
                    <li><a href='https://muskonmars.gitbook.io/muskonmars-mom/?fbclid=IwAR3--SBxZUVLHUHK2swgQCHy1aYHmrPxFAZbWC9BnhWrqv6gzFE1VfuO-uc' target='_blank'>About</a></li>
                    <li><a href='https://muskonmars.gitbook.io/muskonmars-mom/?fbclid=IwAR3YHoGjB5uZPTxeYRoQdGw22WnLB-pRDwbFAWS6q_MSjsBfeuC2KMZWjMI' target='_blank'>Whitepaper</a></li>
                    <li><a href='https://muskonmars.gitbook.io/muskonmars-mom/faq/what-is-usdmom-token?fbclid=IwAR29vSGbuzUfnuI8Mb8K7SkVhC7xHRrc-aEQM1tMelgBx-5k-Fj05ZSz-QU' target='_blank'>FAQ</a></li>
                    <li><a href='https://muskonmars.gitbook.io/muskonmars-mom/?fbclid=IwAR1mc9BxA5mqBKDvQJMgjgMvEu9oQ1BZljJDi_opKq_xc8Gt2nUeWcGLvuo' target='_blank'>Documentation</a></li>
                </ul>
            </div>
        </div>

        
        <div className={styles.lastContainer}>
            <p className={styles.lastBorder}></p>
            <p>Contributors</p>
            <p className={styles.lastEl}>© 2023 | The MuskOnMars Foundation & MuskOnMars Project. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer