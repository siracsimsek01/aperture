import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import { PrimaryButton } from "./components/common/Buttons";

export default function Home() {
  return (
   <>
   {/* Navbar */}
   <nav className="inline-flex md:justify-around w-full mt-8">
      <Image src={"/logo.svg"} width={128} height={31} alt={"logo"} className=""/>

      <div className="inline-flex md:gap-14 items-center">
        <Link href="/">Businnes areas</Link>
        <Link href="/">Featured Images</Link>
        <Link href="/">Gear cage</Link>
        <Link href="/">Contact</Link>
        <button className="px-5 py-3 bg-white text-black rounded-xl inline-flex items-center">Get template</button>
      </div>
   </nav>

   {/* Header */}

   <header className={classes.header}>
      <div className="flex flex-col justify-end items-center text-center">
        <h3 className="text-center text-stone-300 text-sm font-normal uppercase leading-tight tracking-widest">Photographer & Filmmaker</h3>
        <h2 className="text-center text-white text-[54px] font-normal">Aperture Studios</h2>
        <p className="w-[580px] text-center text-stone-300 text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
      </div>
   </header>

   <main>
    {/* Section 1 */}
      <section>
        <div className="text-center">
          <h1 className="text-white text-[40px] font-normal leading-[42px]">What we do</h1>
          <h3 className="text-stone-300 text-2xl font-normal leading-[30px]">The areas that we're specialized in.</h3>
        </div>
        <div className="flex flex-wrap justify-center items-center px-36 mt-10 gap-4">

          <div className={classes.productPhotography}>
            <h5 className="text-white uppercase text-sm font-normal leading-tight tracking-wide">Product Photography</h5>
            <p className="text-stone-300 text-sm font-normal leading-tight py-3">Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
            <PrimaryButton>
              Read More
            </PrimaryButton>
          </div>
          <div className={classes.architecturePhotography}>
            <h5 className="text-white uppercase text-sm font-normal leading-tight tracking-wide">Architecture Photography</h5>
            <p className="text-stone-300 text-sm font-normal leading-tight py-3">Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.</p>
            <PrimaryButton>
              Read More
            </PrimaryButton>
          </div>
          <div className={classes.dronePhotography}>
            <h5 className="text-white uppercase text-sm font-normal leading-tight tracking-wide">Drone Photography</h5>
            <p className="text-stone-300 text-sm font-normal leading-tight py-3">Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
            <PrimaryButton>
              Read More
            </PrimaryButton>
          </div>
          <div className={classes.wildlifePhotography}>
            <h5 className="text-white uppercase text-sm font-normal leading-tight tracking-wide">Wildlife Photography</h5>
            <p className="text-stone-300 text-sm font-normal leading-tight py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.</p>
            <PrimaryButton>
              Read More
            </PrimaryButton>
          </div>

        </div>
      </section>
   </main>
   </>
  );
}
