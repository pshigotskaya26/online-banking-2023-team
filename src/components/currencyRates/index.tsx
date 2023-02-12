import './index.css';

const CurrencyRates = () => {
  return (
    <div className="currency-rates__wrapper">
      <div className="currency-rates">
        <h2 className="currency-rates__title">The currency rates:</h2>
        <div className="currency-rates__content">
          <iframe
            frameBorder="0"
            height="131"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://admin.myfin.by/outer/informer/minsk/full"
            width="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default CurrencyRates;
