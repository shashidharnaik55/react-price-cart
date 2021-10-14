import "./App.css";
import PriceCart from "./components/PriceCart";

function App() {
  return (
    <div className="card-container">
      <PriceCart
        cardType="Free"
        price="0"
        users="Single User"
        storage="5GB Storage"
        privatePro={false}
        support={false}
        domain={false}
        report={false}
      />
      <PriceCart
        cardType="Plus"
        price="9"
        users="5 Users"
        storage="50GB Storage"
        privatePro={true}
        support={true}
        domain={true}
        report={false}
      />
      <PriceCart
        cardType="Pro"
        price="49"
        users="Unlimited Users"
        storage="150GB Storage"
        privatePro={false}
        support={false}
        domain="Unlimited"
        report={false}
      />
    </div>
  );
}

export default App;
