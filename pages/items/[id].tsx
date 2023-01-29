/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Disclosure, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  useContext,
  useEffect,
  useState,
} from "react";
import { Checkout } from "../../components/checkout";
import { ProductContext } from "../_app";
const products = [
  {
    name: "Bonk jumper",
    price: 65,
    images:
      "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/photo_5960854904346097955_y.jpg",
    description: `
      <p>Bonk jumper with logo and title on the chest in 2 colours and various sizes</p>
    `,
  },
  {
    name: "Bonk jumper",
    price: 65,
    images:
      "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/photo_5960854904346097956_y.jpg",
    description: `
        <p>Bonk jumper with Bonkz NFT art by Mr.Picassauce on the chest in various sizes</p>
      `,
  },
  {
    name: "Bonk mug",
    price: 25,
    images:
      "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/photo_5960854904346097993_y.jpg",
    description: `
        <p>Bonk mug with Bonkz NFT art by @Hexvgon808.</p>
      `,
  },
  {
    name: "Bonk jumper",
    price: 65,
    images:
      "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/photo_5960854904346097957_y.jpg",
    description: `
        <p>Bonk jumper with Bonkz NFT art by Oxycon on the chest in various sizes</p>
      `,
  },
  {
    name: "Bonk hoodie",
    price: 75,
    images:
      "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/photo_5960854904346098023_y.jpg",
    description: `<p>Bonk hoodie with Bonkz NFT art by @NFTgrillo on the chest in 2 colours and various sizes.</p>`,
  },
  {
    name: "Bonk jumper",
    price: 65,
    images:
      "https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/photo_5960854904346097958_y.jpg",
    description: `
        <p> Bonk jumper with custom Bonkz NFT art on the chest in various sizes</p>
      `,
  },
];
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
}

const Item = () => {
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const prodContext = useContext(ProductContext);
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState("S");

  useEffect(() => {
    if (router.query.id) {
      setProduct(products[parseInt(router.query.id as string) - 1]);
    }
  }, [router.query.id]);
  const [open, setOpen] = useState<boolean>(false);
  if (product !== null) {
    return (
      <>
        <Checkout products={prodContext.prod} open={open} setOpen={setOpen} />
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <Tab.Group as="div" className="flex flex-col-reverse">
                <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                  <Tab.Panel>
                    <img
                      src={product?.images}
                      alt="product Image"
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>

              {/* Product info */}
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h1
                  onClick={() => router.push("/")}
                  className="text-3xl font-bold tracking-tight text-gray-900"
                >
                  {product?.name}
                </h1>

                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-gray-900">
                    $ {product?.price}
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>

                  <div
                    className="space-y-6 text-base text-gray-700"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>

                <div className="flex text-base font-medium text-gray-900">
                  <div className="pr-10">
                    <h1 className="mb-3 mt-10">Quantity</h1>
                    <select
                      defaultValue={1}
                      onChange={(e) => {
                        setQuantity(parseInt(e.target.value));
                      }}
                      className="w-44 h-12 border rounded-lg px-2"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, index) => {
                        return <option value={val}>{val}</option>;
                      })}
                    </select>
                  </div>
                  <div>
                    <h1 className="mb-3 mt-10">Size</h1>
                    <select
                      defaultValue={1}
                      onChange={(e) => {
                        setSize(e.target.value);
                      }}
                      className="w-44 h-12 border rounded-lg px-2"
                    >
                      {["S", "M", "L", "XL", "XXL"].map(
                        (val, index) => {
                          return <option value={val}>{val}</option>;
                        }
                      )}
                    </select>
                  </div>
                </div>

                <div className="sm:flex-col1 mt-10 flex">
                  <button
                    onClick={() => {
                      prodContext.setProd([
                        ...prodContext.prod,
                        {
                          id: parseInt(router.query.id as string) - 1,
                          name: product?.name,
                          image: product.images,
                          price: product.price,
                          quantity: quantity,
                          size: size,
                        },
                      ]);
                      setOpen(true);
                    }}
                    className="flex max-w-[66%] flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  >
                    Add to bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }
};

export default Item;
