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
    {
      id: 7,
      name: "Bonk hoodie",
      href: "#",
      price: 75,
      color: "Art by broken Tyrant",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/0ecdbf02-41fc-4bed-b439-3208a0fe0171.jpeg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 8,
      name: "Bonk hoodie",
      href: "#",
      price: 75,
      color: "Toonies art on chest",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/download.png",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 9,
      name: "Bonk hoodie",
      href: "#",
      price: 75,
      color: "Bonkz NFT art on chest",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/f83865b1-8b61-43a6-be8e-2277e6aea836.jpeg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 10,
      name: "Bonk hoodie",
      href: "#",
      price: 75,
      color: "art by Bunjil",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/fb083aff-07e1-4c7a-923c-8a8ac06d2ca9.jpeg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 11,
      name: "Bonk hoodie",
      href: "#",
      price: 75,
      color: "art by @Jonoh_jon in black colour",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/b2aaa66a-7278-4d78-abaa-8a490deb8508.jpeg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 12,
      name: "Bonk hoodie",
      href: "#",
      price: 75,
      color: "art by @Jonoh_jon in white colour",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/32583f29-ce19-4304-9f73-0c4d2a5622af.jpeg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 13,
      name: "Bonk hoodie",
      href: "#",
      price: 75,
      color: "art by Calico",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/c2e96495-a6a0-4559-97fa-8ebd154e7cb9.jpeg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 14,
      name: "Bonk hoodie",
      href: "#",
      price: 75,
      color: "art by Degen Poet",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/21e8a756-5658-4e90-bf01-a9b220ce4762.jpeg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 15,
      name: "Bonk hoodie",
      href: "#",
      price: 75,
      color: "art by Matt Shell",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/3ca3d5ed-8ad0-4cb6-83c6-870e963334c7.jpeg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 16,
      name: "Bonk hoodie",
      href: "#",
      price: 75,
      color: "art by Scum",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/a9ac5ac5-3706-40f9-9017-79369ccd957d.jpeg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 17,
      name: "Bonk hoodie",
      href: "#",
      price: 75,
      color: "art by @belikehats",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/5c0b4284-2d3f-478b-bb0f-f7d65cbc4ac4.jpeg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 18,
      name: "Bonk hoodie",
      href: "#",
      price: 75,
      color: "art by Resist",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/1feed113-5a25-4f27-b683-d3d12bcc39b8.jpeg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 19,
      name: "Bonk hoodie",
      href: "#",
      price: 75,
      color: "art by Nyaumon",
      imageSrc:
        "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/8e8d706c-a2de-4dab-8d66-ea07b69296f1.jpeg",
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
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">GM isn't just a word it's a culture!</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Live your NFT character, GM!</h1>
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
