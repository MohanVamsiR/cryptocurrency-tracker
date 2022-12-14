// Write your JS code here
import './index.css'

const CryptocurrencyItem = porps => {
  const {details} = porps
  const {currencyName, usdValue, euroValue, currencyLogo} = details
  return (
    <li className="lis">
      <div className="logo-name">
        <img src={currencyLogo} alt={currencyName} className="imga" />
        <p className="curren">{currencyName}</p>
      </div>
      <div className="val">
        <p className="USD">{usdValue}</p>
        <p className="EURO">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
