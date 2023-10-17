import { PayPalButtons } from '@paypal/react-native';
const PaymentScreen = () => {
  
    const createOrder = (data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: '10.00', // The payment amount
              currency_code: 'USD',
            },
          },
        ],
      });
    };
  
    const onApprove = (data, actions) => {
      return actions.order.capture().then(function (details) {
        // Payment was successful, handle the success case
      });
    };
  
    return (
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
      />
    );
  };
  export default PaymentScreen