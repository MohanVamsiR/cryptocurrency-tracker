import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrencyList extends Component {
  state = {isLoading: true, currencyList: []}

  componentDidMount() {
    this.getCurrncyList()
  }

  getCurrncyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, currencyList} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="imagecurr"
            />
            <div className="dash-board">
              <div className="titles">
                <h1 className="coin-type">Coin Type</h1>
                <div className="va">
                  <p className="usd">USD</p>
                  <p className="euro">EURO</p>
                </div>
              </div>

              <ul className="unordered">
                {currencyList.map(each => (
                  <CryptocurrencyItem details={each} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyList
