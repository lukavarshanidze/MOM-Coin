import React, { useState } from 'react'
import styles from './styles.module.css'
import dogopedia from '../../../assets/body/socialLogos/dogepedia.png'
import downarrow from '../../../assets/body/arrow/downarrow.png'

const Dogepedia = () => {
    const [showHidden, setShowHidden] = useState([]);

  function toggleHidden(index) {
    setShowHidden(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }

  return (
    <div className={styles.container}>
        <div id='FAQ' className={styles.dogopediaCOntainer}>
            
            <div className={styles.middleContainer}>
                <p className={styles.padd}>FAQ</p>
                <p className={styles.border}></p>
                <p className={styles.padd}>Whitepaper</p>
                <p className={styles.border}></p>
                <p className={styles.padd}>About</p>
                <p className={styles.border}></p>
                <p className={styles.padd}>Documentation</p>
                <p className={styles.border}></p>
            </div>
            <div className={styles.last}>
                <div className={styles.lastPart_container}>
                    <div onClick={() => toggleHidden(0)} className={styles.lastPart}>
                        <img src={downarrow}/>
                        <p>What is $MOM token?</p>
                    </div>
                    { 
                        showHidden[0] &&
                        <div className={styles.lastPart__hidden}>The MOM token, short for "Musk on Mars" token, is a decentralized cryptocurrency that is designed to support and embody Elon Musk's vision of colonizing Mars and making humanity a multi-planetary species.</div>
                    }
                    
                </div>
                <div className={styles.lastPart_container}>
                    <div onClick={() => toggleHidden(1)} className={styles.lastPart}>
                        <img src={downarrow}/>
                        <p>Why is the totalSupply 420 billion?</p>
                    </div>
                    {
                        showHidden[1] &&
                        <div className={styles.lastPart__hidden}> The total supply of 420 billion MOM tokens, with 420 
                        being a significant number for Elon Musk, reflects his fondness for that particular numerical 
                        value.</div>
                    }
                </div>
                <div>
                    <div onClick={() => toggleHidden(2)} className={styles.lastPart}>
                        <img src={downarrow}/>
                        <p>On which exchanges  can we see the MOM token?</p>
                    </div>
                    {
                        showHidden[2] && 
                        <div className={styles.lastPart__hidden}>  Uniswap.</div>
                    }
                </div>
                <div>
                    <div onClick={() => toggleHidden(3)} className={styles.lastPart}>
                        <img src={downarrow}/>
                        <p>When was the project launched? </p>
                    </div>
                    {
                        showHidden[3] &&
                        <div className={styles.lastPart__hidden}>Apr-28-2023</div>
                    }
                </div>
                <div>
                    <div onClick={() => toggleHidden(4)} className={styles.lastPart}>
                        <img src={downarrow}/>
                        <p>General Market Risk!</p>
                    </div>
                    {
                        showHidden[4] &&
                        <div className={styles.lastPart__hidden}>Warning! Buying MOM token carries high risks. Consult with professionals before making a decision. We are not liable for any financial loss you may incur. Only transfer BNB from a wallet where you control the private key, not from an exchange or market. You can buy MOM token by transferring BNB to smart contracts or by using a decentralized exchange system (DEX) connected to Metamask. </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dogepedia