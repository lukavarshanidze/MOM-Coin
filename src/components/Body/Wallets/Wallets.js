import React from 'react'
import styles from './styles.module.css'
import uniswap from './assets/uniswap.webp'
import gate from './assets/gate.io.webp'
import mexc from './assets/mexc.webp'
import huobi from './assets/huobi.webp'
import poloniex from './assets/poloniex.webp'
import okxdex from './assets/okxdex.webp'
import ibank from './assets/ibank.webp'
import bingx from './assets/bingx.webp'
import trustwallet from './assets/trustwallet.webp'
import digifinex from './assets/digifinex.webp'
import btcex from './assets/btcex.webp'
import dextools from './assets/dextools.webp'
import coinmarketcap from './assets/coinmarketcap.webp'
import coingecko from './assets/coingecko.webp'

const Wallets = () => {
  const items = [
    {name: 'uniswap', img: uniswap, href: 'https://app.uniswap.org/?fbclid=IwAR2q-pTB5qFsbRfmB-S5mixI9eNmPNXeGOsEduXvq9pkaX6vvzqWoGQciZg#/swap'},
    // {name: 'mexc', img: mexc},
    // {name: 'gate.io', img: gate},
    // {name: 'huobi', img: huobi},
    // {name: 'poloniex', img: poloniex},
    // {name: 'okx dex', img: okxdex},
    // {name: 'Ibank', img: ibank},
    // {name: 'bingx', img: bingx},
    // {name: 'trustwallet', img: trustwallet},
    // {name: 'digifinex', img: digifinex},
    // {name: 'btcex', img: btcex},
    // {name: 'dextools', img: dextools},
    // {name: 'coinmarketcap', img: coinmarketcap},
    // {name: 'coingecko', img: coingecko},
  ]
    

  return (
    <div className={styles.main_container}>
      <div className={styles.container} >
          <div className={styles.content}>
              <div className={styles.each}>
                {items.map(each => 
                  <div>
                      <a target='_blank' href={each.href}>
                        <div key={each.name} className={styles.each_map}>
                            <p>{each.name}</p>
                            <div>
                              <img src={each.img}/>
                            </div>
                        </div>
                      </a>
                    </div>
              )}
              </div>
          </div>
      </div>
    </div>
  )
}

export default Wallets