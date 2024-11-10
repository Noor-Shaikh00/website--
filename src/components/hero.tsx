import Image from "next/image";
import "../style/hero.css";
function Hero(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left */}
                  <div>
                  <Image src={"/images/noor.webp"}
                  width={200}
                  height={200}
                  className="header-image"

                   alt="profile"/>
                  </div>
                {/* right */}
                 <div className="hero-right-div">
                    <h1 className="title-hero">I&apos;m Noor Shaikh
                        Front-end Developer </h1>
                        <p className="des-hero">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Reprehenderit in corrupti dolor exercitationem deserunt similique dignissimos magnam fugiat! .</p>
                         <button className="hero-btn">HIRE ME</button>
                 </div>
            </div>
        </div>
    )
}
export default Hero