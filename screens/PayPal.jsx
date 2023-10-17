// import React from "react";
// import { PayPalScriptProvider } from "@paypal/react-native";
// import PaymentScreen from "../components/PaymentScreen";
// const CLIENTid="AdkTVxRzPPFSnK_v9qe6opT-_XEExRzM6VntvmopFGepug9ul2dqFgoaPWwxW_6zFTK43TMCYTplRPmX"
// const PayPalComponent = () => {
//   return (
//     <PayPalScriptProvider options={{ "client-id":CLIENTid }}>
//       <PaymentScreen  />
//     </PayPalScriptProvider>
//   );
// };

// export default PayPalComponent;

import { View, Text } from 'react-native'
import React from 'react'

const PayPalComponent = () => {
  return (
    <View>
      <Text>PayPal</Text>
    </View>
  )
}

export default PayPalComponent