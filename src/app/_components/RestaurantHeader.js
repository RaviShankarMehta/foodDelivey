import Link from "next/link";
import Image from "next/image";
import logoImg from "../images/logo.png";

const RestaurantHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <Image src={logoImg} alt="Restaurant Logo" width={100} height={100} />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Login/SignUp</Link>
        </li>
        <li>
          <Link href="/">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantHeader;
