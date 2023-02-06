import React, {FC, useEffect, useState} from "react";
import IService from "../../types/interfaces/IService";
import InputText from "../inputText";
import Button from "../button";
import SelectIcon from "../selectIcon";
import {IconLookup, IconProp} from "@fortawesome/fontawesome-svg-core";
import InputNumber from "../inputNumber";
import Checkbox from "../checkbox";
import {faReceipt} from "@fortawesome/free-solid-svg-icons";

interface ServiceCreateProps {
  title: string,
  service?: IService
  callback: (service: IService) => void,
  textButton: string,
  error: string,
  loadingCreateService: boolean
}

const ServiceCreate: FC<ServiceCreateProps> = ({title, service, callback, textButton, error, loadingCreateService}) => {

  const [name, setName] = useState<string>("");
  const [code, setCode] = useState<number>(0);
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [icon, setIcon] = useState<IconLookup>(faReceipt);

  useEffect(() => {
    setName(service?.title ? service.title : "")
    setCode(service?.code ? service.code : 0)
    setIsAvailable(service?.isAvailable ? service.isAvailable : false)
    setIcon(service?.icon ? service.icon : faReceipt)
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
    }

    callback(serviceObj)
  }

  const handleActiveIcon = (icon: IconLookup) => {
    setIcon(icon)
  }
  console.log(loadingCreateService)
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
                       setValue={setCode} type={"number"}/>
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
        {
          error && <div className={"text-red-400 font-medium"}>{error}</div>
        }
      </div>
      {/*{loadingCreateService &&*/}
      {/*  <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">*/}
      {/*    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"*/}
      {/*         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
      {/*      <path*/}
      {/*        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"*/}
      {/*        fill="currentColor"/>*/}
      {/*      <path*/}
      {/*        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"*/}
      {/*        fill="currentFill"/>*/}
      {/*    </svg>*/}
      {/*    <span className="sr-only">Loading...</span>*/}
      {/*  </div>}*/}
      <Button text={textButton} isLoading={loadingCreateService} isDisable={!(name.length && code.toString())} handleButton={handleForm}/>
    </form>
  </div>

}

export default ServiceCreate