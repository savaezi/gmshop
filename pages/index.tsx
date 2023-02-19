/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const products = [

    
        {
      id: 1,
      name: "DeHoodie",
      href: "#",
      price: 69,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675810664/IMG_20230207_014156_917_tzpoo7.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    
         {
      id: 2,
      name: "DeHoodie",
      href: "#",
      price: 69,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675810664/IMG_20230207_014154_178_ork7gn.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    
         {
      id: 3,
      name: "DeHoodie",
      href: "#",
      price: 69,
      color: "Black",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675810664/IMG_20230207_014129_428_pucxph.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    
             {
      id: 4,
      name: "DeMug",
      href: "#",
      price: 25,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675810665/IMG_20230207_014143_552_pj5qvi.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },

             {
      id: 5,
      name: "DeMug",
      href: "#",
      price: 25,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675810666/IMG_20230207_014149_926_jmlcvd.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    
              {
      id: 6,
      name: "DeHoodie",
      href: "#",
      price: 69,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675810665/IMG_20230207_014145_543_gzgpey.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    
    {
      id: 7,
      name: "DeHoodie",
      href: "#",
      price: 69,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675810665/IMG_20230206_223500_192_s7slew.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    
    {
      id: 8,
      name: "DeHoodie",
      href: "#",
      price: 69,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675810666/IMG_20230207_014133_482_retyo6.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 9,
      name: "y00ts Mug",
      href: "#",
      price: 25,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675810667/IMG_20230206_223444_928_k48s3x.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 10,
      name: "y00ts Hoodie",
      href: "#",
      price: 69,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675810668/IMG_20230206_223422_410_lfca11.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 11,
      name: "y00ts Hoodie",
      href: "#",
      price: 69,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675810668/IMG_20230114_011351_275_ozaern.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 12,
      name: "DeHoodie",
      href: "#",
      price: 69,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675810669/IMG_20230112_224922_406_pwls1o.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 13,
      name: "DeJumper",
      href: "#",
      price: 59,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675810670/IMG_20230112_224922_143_mrhp0g.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
     {
      id: 14,
      name: "y00ts Mug",
      href: "#",
      price: 25,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675810669/IMG_20230114_011314_192_zdh5qj.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 15,
      name: "y00ts Jumper",
      href: "#",
      price: 59,
      color: "Black",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675812294/IMG_20230208_025326_tlemou.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 16,
      name: "DeJumper",
      href: "#",
      price: 59,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675812294/IMG_20230208_025424_nrkx7v.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 17,
      name: "y00ts Jumper",
      href: "#",
      price: 59,
      color: "Black",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1675812294/IMG_20230114_011325_182_ccnzbo.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 18,
      name: "y00ts Hoodie",
      href: "#",
      price: 69,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1676371319/IMG_20230214_141023_779_dnb7jk.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },

    {
      id: 19,
      name: "Dey00tsHoodie",
      href: "#",
      price: 69,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1676371319/IMG_20230214_141018_644_fcq48z.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 20,
      name: "DeCap",
      href: "#",
      price: 29,
      color: "Black",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1676371320/IMG_20230214_141024_053_osoqgl.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 21,
      name: "y00ts cap",
      href: "#",
      price: 29,
      color: "Black",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1676371321/IMG_20230214_141023_774_x5he2z.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 22,
      name: "DeTag",
      href: "#",
      price: 8,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1676563555/IMG_20230216_193500_729_l8efgu.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 23,
      name: "y00ts Tag",
      href: "#",
      price: 8,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1676563556/IMG_20230216_193401_499_cy6lts.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 24,
      name: "DePack ($149 instead of $190)",
      href: "#",
      price: 149,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1676563557/IMG_20230216_193357_489_napeup.jpg",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 25,
      name: "y00ts Pack ($149 instead of $190)",
      href: "#",
      price: 149,
      color: "White",
      imageSrc:
        "https://res.cloudinary.com/dcqarogng/image/upload/v1676563557/IMG_20230216_193404_693_x25rnd.jpg",
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
