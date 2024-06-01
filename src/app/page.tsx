'use client'

import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import { PrimaryButton } from "./components/common/Buttons";
import { FaTwitter, FaInstagram, FaFacebook, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Navbar */}
      <nav className="inline-flex justify-around w-full mt-8">
        <Image src={"/logo.svg"} width={128} height={31} alt={"logo"} className="" />

        <div className="hidden md:inline-flex md:gap-14 items-center">
          <Link href="/">Businnes areas</Link>
          <Link href="/">Featured Images</Link>
          <Link href="/">Gear cage</Link>
          <Link href="/">Contact</Link>
          <button className="px-5 py-3 bg-white text-black rounded-xl inline-flex items-center">Get template</button>
        </div>

        <button onClick={toggleMenu}>
          <FaBars className="text-white text-2xl md:hidden" />
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-4">
            <Link href="/">Businnes areas</Link>
            <Link href="/">Featured Images</Link>
            <Link href="/">Gear cage</Link>
            <Link href="/">Contact</Link>
            <button className="px-5 py-3 bg-white text-black rounded-xl inline-flex items-center">Get template</button>
          </div>
        )}
      </nav>

      {/* Header */}

      <header className={classes.header}>
        <div className="flex flex-col justify-end items-center text-center">
          <h3 className="text-center text-stone-300 text-sm font-normal uppercase leading-tight tracking-widest">Photographer & Filmmaker</h3>
          <h2 className="text-center text-white text-3xl md:text-[54px] font-normal">Aperture Studios</h2>
          <p className=" text-center text-stone-300 text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
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
              <p className="text-stone-300 text-sm font-normal leading-tight py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna</p>
              <PrimaryButton>
                Read More
              </PrimaryButton>
            </div>
          </div>
        </section>

        {/* Section 2 */}

        <section className="mt-[100px]">
          <div className={classes.mountain}>
            <div>
              <h3 className="text-white text-sm font-normal leading-tight tracking-widest">Sunset at Mount Fuji</h3>
              <p className="text-stone-300 text-sm font-normal leading-tight w-[298px]">Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="pl-[100px]">
              <h3 className="text-stone-300 text-sm font-normal uppercase leading-tight tracking-widest">The Gear cage</h3>
              <h2 className="text-white text-[28px] font-normal leading-loose mb-[14px] mt-[6px]">The tools that we use.</h2>
              <p className="text-white text-sm font-normal leading-tight w-[514px] mb-5">The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
              <PrimaryButton>
                Check it out
              </PrimaryButton>
            </div>
            <div>
              <Image src="/cameras.png" width={720} height={540} alt="cameras" />
            </div>
          </div>

          <div className={classes.leafs}>
            <div>
              <h3 className="text-white text-sm font-normal leading-tight tracking-widest uppercase">Monstera Leafs</h3>
              <p className="text-stone-300 text-sm font-normal leading-tight w-[273px]">Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center h-[50vh]">
          <div className="text-center">
            <h1 className="text-white text-[40px] font-normal leading-[42px]">Past clients</h1>
            <h3 className="text-stone-300 text-2xl font-normal leading-[30px] py-4">Trusted by your favorite companies</h3>
          </div>
          <div className="inline-flex justify-around items-center w-full mt-10">
            <Image src="/client-1.png" width={128} height={30} alt="client-1" />
            <Image src="/client-2.png" width={128} height={30} alt="client-2" />
            <Image src="/client-3.png" width={128} height={30} alt="client-3" />
            <Image src="/client-4.png" width={128} height={30} alt="client-4" />
            <Image src="/client-5.png" width={128} height={30} alt="client-5" />
          </div>
        </section>

        <section>
          <div className={classes.starfall}>
            <div>
              <h3 className="text-white text-sm font-normal leading-tight tracking-widest uppercase">Star fall in himalayas</h3>
              <p className="text-stone-300 text-sm font-normal leading-tight w-[273px]">Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col justify-center items-center gap-2 w-full h-[50vh]">
            <h1 className="text-center text-white text-4xl font-normal leading-10">Need help with photography <br /> or videography?</h1>
            <h2 className="text-stone-300 text-2xl font-normal leading-loose text-center">We're here for you</h2>
            <PrimaryButton>
              Get in Touch
            </PrimaryButton>
          </div>
        </section>
      </main>

      <footer>
        <div className="py-[100px] px-[200px] flex justify-around">
        <div>
          <Image src="/logo.svg" width={128} height={31} alt="logo" />
          <p className="text-stone-300 text-xs font-normal leading-tight mt-5">Photographers & videographers capturing the world around us.</p>
        </div>
        <div className="flex gap-[94px]">
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-stone-300 text-sm font-normal uppercase leading-tight tracking-widest">Business Areas</h3>
            <Link href="/">Product Photography</Link>
            <Link href="/">Architecture Photography</Link>
            <Link href="/">Drone Photography</Link>
            <Link href="/">Wildlife Photography</Link>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-stone-300 text-sm font-normal uppercase leading-tight tracking-widest">Pages</h3>
            <Link href="/">Gear cage</Link>
            <Link href="/">Featured Images</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Style guide</Link>
            <Link href="/">Instructions</Link>
            <Link href="/">Changelog</Link>
          </div>
        </div>
        </div>

      <div className="w-full flex flex-col justify-center items-center">
        <span className="w-[1168px] h-0.5 bg-white block"></span>
        <div className="flex justify-around px-28 items-center w-full py-10">
          <div>
            <h3 className="text-white text-sm font-normal uppercase leading-tight tracking-widest pb-5">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <p className="text-stone-300 text-xs font-normal leading-tight">Read about all the things we do.</p>
          </div>
          <div className="relative">
            <input type="text" placeholder="Your email address" className="w-96 h-12 rounded-xl p-4 border-none outline-none text-black"/>
            <button className="absolute left-[16.8rem] top-1 text-white bg-black px-4 py-2 rounded-xl hover:bg-blue-500 transition-colors duration-300">Subscribe</button>
          </div>
        </div>
        <span className="w-[1168px] h-0.5 bg-white  flex items-center justify-center"></span>
        </div>

        <div className="flex justify-around items-center h-[20vh]">
          <p className="text-stone-300 text-xs font-normal leading-tight text-left">© 2024 Aperture Studios. All rights reserved.</p>
          <div className="flex">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-2xl mx-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer"/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl mx-2 hover:text-red-500 transition-colors duration-300 cursor-pointer"/>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-2xl mx-2  hover:text-blue-500 transition-colors duration-300 cursor-pointer"/>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
