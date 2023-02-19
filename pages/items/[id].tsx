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
      id: 1,
    name: "DeHoodie",
     href: "#",
    price: 69,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675810664/IMG_20230207_014156_917_tzpoo7.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>Degods hoodie with your own Degods customization on the chest in various sizes and colours, after purchasing check customization tab for further information.
#11334</p>
    `,
  },
{
      id: 2,
    name: "DeHoodie",
     href: "#",
    price: 69,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675810664/IMG_20230207_014154_178_ork7gn.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>Degods hoodie with season III style in various sizes and colours.(if need any changes in colour, design, etc, check customization tab after purchasing!)</p>
    `,
  },
  {
      id: 3,
    name: "DeHoodie",
     href: "#",
    price: 69,
    color: "Black",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675810664/IMG_20230207_014129_428_pucxph.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>Degods hoodie with Frank's pined tweet on the chest in various sizes and colours.(if need any changes in colour, design, etc, check customization tab after purchasing!)
#11335</p>
    `,
  },
 {
      id: 4,
    name: "DeMug",
     href: "#",
    price: 25,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675810665/IMG_20230207_014143_552_pj5qvi.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>Degods mug with DeColourful logo.</p>
    `,
  },
   {
      id: 5,
    name: "DeMug",
     href: "#",
    price: 25,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675810666/IMG_20230207_014149_926_jmlcvd.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p> Degods mug with season III style.</p>
    `,
  },
  {
      id: 6,
    name: "DeHoodie",
     href: "#",
    price: 69,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675810665/IMG_20230207_014145_543_gzgpey.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>Degods hoodie with DeColourful logo in various sizes and colours.(if need any changes in colour, design, etc, check customization tab after purchasing!)
#11338</p>
    `,
  },
   {
      id: 7,
    name: "DeHoodie",
     href: "#",
    price: 69,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675810665/IMG_20230206_223500_192_s7slew.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>Degods hoodie with Googod style on the chest in various sizes and colours.(if need any changes in colour, design, etc, check customization tab after purchasing!)
#11339</p>
    `,
  },
   {
      id: 8,
    name: "DeHoodie",
     href: "#",
    price: 69,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675810666/IMG_20230207_014133_482_retyo6.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p> Degods hoodie with Delogo on the chest in various sizes and colours.(if need any changes in colour, design, etc, check customization tab after purchasing!)
#11040</p>
    `,
  },
   {
      id: 9,
    name: "y00ts Mug",
     href: "#",
    price: 25,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675810667/IMG_20230206_223444_928_k48s3x.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>y00ts mug with 00 logo.
#11041</p>
    `,
  },
  {
      id: 10,
    name: "y00ts Hoodie",
     href: "#",
    price: 69,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675810668/IMG_20230206_223422_410_lfca11.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>y00ts hoodie with your own y00ts customization on the chest in various sizes and colours, after purchasing check customization tab for further information.
#11042</p>
    `,
  },
  {
      id: 11,
    name: "y00ts Hoodie",
     href: "#",
    price: 69,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675810668/IMG_20230114_011351_275_ozaern.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>y00ts hoodie with This is rare design on the chest in various sizes and colours.(if need any changes in colour, design, etc, check customization tab after purchasing!)
#11043</p>
    `,
  },
  {
      id: 12,
    name: "DeHoodie",
     href: "#",
    price: 69,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675810669/IMG_20230112_224922_406_pwls1o.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>Degods hoodie with Degods city design on the chest in various sizes and colours.(if need any changes in colour, design, etc, check customization tab after purchasing!)
#11044</p>
    `,
  },
  {
      id: 13,
    name: "DeJumper",
     href: "#",
    price: 59,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675810670/IMG_20230112_224922_143_mrhp0g.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>Degods Jumper with DeWorld design on the chest in various sizes and colours.(if need any changes in colour, design, etc, check customization tab after purchasing!)
#11045</p>
    `,
  },
  {
      id: 14,
    name: "y00ts Mug",
     href: "#",
    price: 25,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675810669/IMG_20230114_011314_192_zdh5qj.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>y00ts mug with y00t holder design.
#11046</p>
    `,
  },
  {
      id: 15,
    name: "y00ts Jumper",
     href: "#",
    price: 59,
    color: "Black",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675812294/IMG_20230208_025326_tlemou.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>y00ts Jumper with y00ts logo on the chest in various sizes and colours.(if need any changes in colour, design, etc, check customization tab after purchasing!)
#11047</p>
    `,
  },
  {
      id: 16,
    name: "DeJumper",
     href: "#",
    price: 59,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675812294/IMG_20230208_025424_nrkx7v.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>Degods jumper with Frank's pined tweet on the chest in various sizes and colours.(if need any changes in colour, design, etc, check customization tab after purchasing!)
#11048</p>
    `,
  },
  {
      id: 17,
    name: "y00ts Jumper",
     href: "#",
    price: 59,
    color: "Black",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1675812294/IMG_20230114_011325_182_ccnzbo.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>y00ts jumper with your own y00ts customization on the chest in various sizes and colours, after purchasing check customization tab for further information.
#11049</p>
    `,
  },
  {
      id: 18,
    name: "y00ts Hoodie",
     href: "#",
    price: 69,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1676371319/IMG_20230214_141023_779_dnb7jk.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p> y00ts hoodie with y00ts logo on the chest in various sizes and colours.(if need any changes in colour, design, etc, check customization tab after purchasing!)
#11050</p>
    `,
  },

  {
      id: 19,
    name: "DeHoodie",
     href: "#",
    price: 69,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1676371319/IMG_20230214_141018_644_fcq48z.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>Degods+y00ts hoodie with Dey00ts logo on the chest in various sizes and colours.(if need any changes in colour, design, etc, check customization tab after purchasing!)
#11052</p>
    `,
  },
  {
      id: 20,
    name: "DeCap",
     href: "#",
    price: 29,
    color: "Black",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1676371320/IMG_20230214_141024_053_osoqgl.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>Degods cap with De logo in best quality.(if need any changes in colour, design, etc, check customization tab after purchasing!)
#11053</p>
    `,
  },
    {
      id: 21,
    name: " y00ts cap",
     href: "#",
    price: 29,
    color: "Black",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1676371321/IMG_20230214_141023_774_x5he2z.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p> y00ts cap with 00 logo in best quality.(if need any changes in colour, design, etc, check customization tab after purchasing!)
#11054</p>
    `,
  },
  {
      id: 22,
    name: "DeTag",
     href: "#",
    price: 8,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1676563555/IMG_20230216_193500_729_l8efgu.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>Degods tag with De logo.
#11055</p>
    `,
  },
   {
      id: 23,
    name: "y00ts Tag",
     href: "#",
    price: 8,
    color: "White",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1676563556/IMG_20230216_193401_499_cy6lts.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>y00ts tag with 00 logo.
#11056</p>
    `,
  },
 {
      id: 24,
    name: "DePack ($149 instead of $190)",
     href: "#",
    price: 149,
    color: "",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1676563557/IMG_20230216_193357_489_napeup.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>Degods Pack included of a hoodie, a jumper, a mug,a tag and a cap.(Check customization tab after purchasing to choose your GMerchs and further information!)
#11057</p>
    `,
  }, 
  {
      id: 25,
    name: "y00ts Pack ($149 instead of $190)",
     href: "#",
    price: 149,
    color: "",
    images:
      "https://res.cloudinary.com/dcqarogng/image/upload/v1676563557/IMG_20230216_193404_693_x25rnd.jpg",
      imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    description: `
      <p>y00ts Pack included of a hoodie, a jumper, a mug,a tag and a cap.(Check customization tab after purchasing to choose your GMerchs and further information!)
#11058</p>
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
                      {["S", "M", "L", "XL", "XXL"].map((val, index) => {
                        return <option value={val}>{val}</option>;
                      })}
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
