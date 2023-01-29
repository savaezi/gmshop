/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "Bonk jumper",
      href: "#",
      price: 65,
      color: "Not hype, a movement",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/photo_5960854904346097955_y.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 2,
      name: "Bonk jumper",
      href: "#",
      price: 65,
      color: "Art by Mr.Picassauce",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/photo_5960854904346097956_y.jpg",
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    {
      id: 3,
      name: "Bonk mug",
      href: "#",
      price: 25,
      color: "Art by @Hexvgon808",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/photo_5960854904346097993_y.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 4,
      name: "Bonk jumper",
      href: "#",
      color: "Art by Oxycon",
      price: 65,
      quantity: 1,
      imageSrc: "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/photo_5960854904346097957_y.jpg",
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
      id: 5,
      name: "Bonk hoodie",
      href: "#",
      price: 75,
      color: "Art by @NFTgrillo",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/photo_5960854904346098023_y.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 6,
      name: "Bonk jumper",
      href: "#",
      price: 65,
      color: "Custom Bonkz NFT",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/photo_5960854904346097958_y.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
  ];
  const router = useRouter();
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Our latest demo products</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Pay with Solana, USDC and what not!</h1>
    </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <div
                onClick={() => {
                  router.push(`/items/${product.id}`);
                }}
                key={product.id}
                className="group text-sm"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="italic text-gray-500">{product.color}</p>
                <p className="mt-2 font-medium text-gray-900">
                  $ {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
