import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuildingShield} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Link} from "react-router-dom";

const Logo = () => {
  return <Link to={"/"}>
    <FontAwesomeIcon icon={faBuildingShield} size={"2x"} className={"text-blue-600"}/>
    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-1">Online-bank</span>
  </Link>
}

export default React.memo(Logo)