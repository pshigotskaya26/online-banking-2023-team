import React, {FC, useEffect, useState} from "react";
import IService from "../../types/interfaces/IService";
import InputText from "../inputText";
import Button from "../button";
import SelectIcon from "../selectIcon";
import {IconLookup} from "@fortawesome/fontawesome-svg-core";
import InputNumber from "../inputNumber";
import Checkbox from "../checkbox";

interface ServiceCreateProps {
  title: string,
  service?: IService
  callback: (service: IService) => void,
  textButton: string
}

const ServiceCreate: FC<ServiceCreateProps> = ({title, service, callback, textButton}) => {
  const [name, setName] = useState<string>("");
  const [code, setCode] = useState<number>(0);
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [icon, setIcon] = useState<IconLookup | undefined>(undefined);


  useEffect(() => {
    setName(service?.title ? service.title : "")
    setCode(service?.code ? service.code : 0)
    setIsAvailable(service?.isAvailable ? service.isAvailable : false)
    // @ts-ignore
    setIcon(service?.icon)
  }, [service])

  const handlerAvailability = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAvailable(e.target.checked)
  }

  const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let serviceObj: IService = {
      code: code,
      isAvailable: isAvailable,
      id: service?.id ? service.id : Date.now(),
      icon: icon,
      title: name,
      isActive: false
    }

    callback(serviceObj)
    setName("")
    setCode(0)
  }

  const handleActiveIcon = (icon: IconLookup) => {
    setIcon(icon)
  }


  return <div className={"w-full"}>
    {
      !service && <h2 className="mb-4 text-xl font-bold text-gray-900">{title}</h2>
    }
    <form action="#">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <InputText label={"Service Name"} placeholder={"Апельсины"} name={"name"}
            value={name} setValue={setName}/>
        </div>
        <div className="w-full">
          <InputNumber label={"Code"} name={"code"} value={code}
            setValue={setCode} type={"number"} />
        </div>

        <div>
          <Checkbox
              handleChange={handlerAvailability}
              isChecked={isAvailable}
              label="A"
          />

        </div>
        <div className="sm:col-span-2">
          <SelectIcon handleChangeIcon={handleActiveIcon} activeIcon={icon}/>
        </div>

      </div>
      <Button text={textButton} isDisable={!(name.length && code.toString())} handleButton={handleForm}/>
    </form>
  </div>

}

export default ServiceCreate