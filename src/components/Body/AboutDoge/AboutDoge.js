import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styles from './styles.module.css'
import aboutDogePic from '../../../assets/body/aboutDoge/aboutImage.png'
import copyIcon from '../../../assets/body/arrow/copy-solid.svg'

const AboutDoge = () => {
  return (
    <div className={styles.container}>
        <div id='aboutMuskOnMars' className={styles.container__}>
            <div className={styles.content}>
                <h2>What is MuskOnMars?</h2>
                <p>ElonOnMask (MOM) is a groundbreaking crypto coin that embodies the innovative spirit of Elon Musk and his vision for the future of space exploration. With MOM, investors can support the development of space technologies and the eventual colonization of Mars. Join the movement towards a new frontier with ElonOnMask (MOM) and be a part of history in the making.
                </p>
            </div>
            <div className={styles.dogepic}>
                <img src={aboutDogePic}/>
            </div>
        </div>

        <div id='howToBuy' className={styles.gettingStarted}>
            <h2>Getting started</h2>
            <div className={styles.getting__container}>
                <div className={styles.getting__child}>
                    <span>01</span>
                    <span>choose  your wallet</span>
                    <p className={styles.pickwallet}>Create a wallet: metamask, coinbase... And choose a BNB network.</p>
                </div>

                <div className={styles.getting__child}>
                    <span>02</span>
                    <span>Go to Uniswap</span>
                    <p className={styles.pickwallet}>Go to Uniswap website: "https://app.uniswap.org/#/swap" <br /> Connect your wallet <br />
                    After Click "Select Token" and write "Musk on Mars" or  <br/>
                    <input className={styles.addressInput} type='text' value="0x0fd7793181aBe0d8b7Db9AAe8De354133d4B5EA3"/> 
                    <CopyToClipboard  text='0x0fd7793181aBe0d8b7Db9AAe8De354133d4B5EA3'>
                        <button className={styles.clipBoardButton}><img src={copyIcon}/></button>
                    </CopyToClipboard>
                     <br/> and import it.
                    </p>    
                </div>

                <div className={styles.getting__child}>
                    <span>03</span>
                    <span>Swap</span>
                    <p className={styles.pickwallet}>Write the suitable numbers and Click Swap!</p>
                </div>
            </div>  {/* end of .getting__container*/}
        </div>
    </div>
  )
}

export default AboutDoge