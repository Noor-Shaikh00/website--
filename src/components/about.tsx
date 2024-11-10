import Image from "next/image";
import "../style/hero.css";
import "../style/about.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
function About(){
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
                   <div className="social-icons">
                   <Link href={""}> <FaYoutube className="s-icon-1"/></Link>
                   <Link href={""}> <FaFacebook className="s-icon-2"/></Link>
                   <Link href={""}> <FaInstagram className="s-icon-3"/></Link>
                   </div>
                  </div>
                {/* right */}
                 <div className="hero-right-div">
                    <h1 className="title-hero">About Us</h1>
                        <p className="des-hero">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Reprehenderit in corrupti dolor exercitationem deserunt similique dignissimos magnam fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Reprehenderit in corrupti dolor exercitationem deserunt similique dignissimos magnam fugiat!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         </p>
                         
                 </div>
            </div>
        </div>
    )
}
export default About