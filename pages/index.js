import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Opentabs from "@/components/opentabs";
import Ftabout from "@/components/ftabout";
import Partners from "@/components/partners";
import Tweets from "@/components/tweets";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>
      <Head>
        <title>FindNext</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logomobile.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.scroll}>
        <div className={styles.main}>
          <Navbar />
          <Hero />
        </div>
        <div className={styles.opentabs}>
          <Opentabs />
        </div>
        <div className={styles.ftabout}>
          <Ftabout />
        </div>
        <div className={styles.ftabout}>
          <Partners />
        </div>
        <div className={styles.tweets}>
          <Tweets />
        </div>
        <div className={styles.pricing}>
          <Pricing />
        </div>
        <div className={styles.joinus}>
          <span className="px-[2rem] text-3xl sm:text-6xl font-semibold text-center text-black">
            Join us via email for,<br></br>{" "}
            <span className="text-green2">more trending topics</span>
          </span>
          <button class="text-sm py-2 px-6 my-8 text-white bg-black rounded-3xl">
            Join Us 📞
          </button>
        </div>
        <div className="w-full h-[80px] flex flex-col sm:flex-row justify-between items-center text-black">
          <div className="sm:ml-12 my-3">
            <img src="/logofooter.svg" alt="" />
          </div>
          <div className="flex flex-col sm:flex-row text-sm justify-between items-center text-black font-normal w-2/5 sm:mr-12">
            <a href="" className="my-2">
              About
            </a>
            <a href="" className="my-2">
              Privacy Policy
            </a>
            <a href="" className="my-2">
              Terms and Conditions
            </a>
            <a href="" className="my-2">
              Contact Us
            </a>
            <a href="" className="my-2">
              Careers
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
