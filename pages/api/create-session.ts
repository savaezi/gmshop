import { NextApiRequest, NextApiResponse } from "next";

import { candypay } from "../../helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { items } = req.body;

    try {
      const response = await candypay.session.create({
        success_url: "https://solpayments.vercel.app/success",
        cancel_url: "https://solpayments.vercel.app/",
        tokens: ["bonk", "dust"],
        items: items,
        shipping_fees: 30,
        discounts: { 
          verified_creator_address:
            "GuDEZFxcox57oRdpKpbF72tZfNpKHkc6T2G89cBtcFYn", 
          discount: 0.05,
          name: "BONKz NFT",
          image:
            "https://bafybeiecuemcqxzuv4ti4sgffjlwvrqedr7golppwrbbu2u5yttglath3m.ipfs.nftstorage.link/0.png?ext=png",
        },
      });

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        error: "Internal server error, Error creating session",
      });
    }
  } else {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }
};

export default handler;
