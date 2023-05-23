import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="grid md:grid-cols-2">
                <div className="bg-[#1F2937] p-12 lg:p-24 space-y-6">
                    <h3 className="text-3xl">CONTACT US</h3>
                    <p>
                        123 ABS Street, Uni 21, Bangladesh <br />
                        +88 123456789 <br />
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00
                    </p>
                </div>
                <div className="bg-[#111827] p-12 lg:p-24 space-y-6">
                    <h3 className="text-3xl">Follow US</h3>
                    <p>Join us on social media</p>
                    <div className="flex gap-3 items-center">
                        <FaFacebookF/>
                        <FaInstagram/>
                        <FaTwitter />
                    </div>
                </div>
            </div>
            <div className="bg-black text-center p-4">
                Copyright © {(new Date().getFullYear())} CulinaryCloud. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;