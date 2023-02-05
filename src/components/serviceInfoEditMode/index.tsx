import React, {FC} from "react";
import IService from "../../types/interfaces/IService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuildingShield} from "@fortawesome/free-solid-svg-icons";
import InputText from "../inputText";

interface ServiceInfoEditModeProps {
  service: IService
}

const ServiceInfoEditMode: FC<ServiceInfoEditModeProps> = ({service}) => {
  const {id, title, icon, isAvailable, code} = service
  const values = [
    {
      title: "Id",
      value: id,
    },
    {
      title: "Title",
      value: title,
    },
    {
      title: "Code",
      value: code,
    },
    {
      title: "Service availability",
      value: isAvailable ? "Available" : "Not available",
    },
  ]
  return <div className={"flex flex-col w-full"}>
    <div className={"mb-2"}>
      <InputText
        label={"Title"}
        value={title}
        setValue={(c) => {
          console.log(c)
        }}
        name={"sdfs"}
        placeholder={"sdfds"}
        type={"text"}
      />
    </div>
    <div className={"mb-2"}>
      <InputText
        label={"Code"}
        value={title}
        setValue={(c) => {
          console.log(c)
        }}
        name={"sdfs"}
        placeholder={"sdfds"}
        type={"text"}
      />
    </div>
    <div>
      Icon
    </div>
  </div>
}

export default ServiceInfoEditMode