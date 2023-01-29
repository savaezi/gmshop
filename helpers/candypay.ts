import { CandyPay } from "@candypay/checkout-sdk";

export const candypay = new CandyPay({
  api_keys: {
    private_api_key: process.env.CANDYPAY_PRIVATE_API_KEY!,
    public_api_key: process.env.NEXT_PUBLIC_CANDYPAY_PUBLIC_API_KEY!
  },
  network: "mainnet",
  config: {
    collect_shipping_address: true,
    redirect_with_session_id: true
  },
});
