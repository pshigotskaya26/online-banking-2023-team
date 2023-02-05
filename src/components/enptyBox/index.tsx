import {faFolder} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const EmptyBox = ({text = "No data"}: { text?: string }) => {
  return <div className={"flex flex-col p-2.5 min-h-[200px]  text-center align-center border-dotted border-gray-200 border-2 w-full h-full"}>
    <div className="">
      <FontAwesomeIcon icon={faFolder} className={"text-gray-300 "} size={"2xl"}/>
    </div>
    <div className="text-gray-500">{text}</div>
  </div>
}

export default EmptyBox;