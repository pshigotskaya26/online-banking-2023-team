import React, { useState } from "react";
import Button from "../button";
import InputText from "../inputText";
import {useActions} from "../../hooks/useActions";
import IService from "../../types/interfaces/IService";
import {useAppSelector} from "../../hooks/useAppSelector";

const ServiceNew = () => {
  const {addService} = useActions()
  const [name, setName] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [isAvailable, setIsAvailable] = useState<boolean>(true);

  const { errorAddNewService } = useAppSelector(state => state.services)
  const handleNewService = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let service: IService = {
      code: +code,
      isAvailable: isAvailable,
      id: Date.now(),
      title: name,
      isActive: false
    }

    addService(service)
    setName("")
    setCode("")
  }
  return <div
    className="w-full bg-white border border-gray-200 rounded-lg shadow">
    <section className="bg-white dark:bg-gray-900">
      <div className="py-6  mx-auto max-w-2xl lg:py-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <InputText
                label={"Service Name"}
                placeholder={"Апельсины"}
                name={"name"}
                value={name}
                setValue={setName}/>
            </div>
            <div className="w-full">
              <InputText
                label={"Code"}
                placeholder={"123"}
                name={"code"}
                value={code}
                setValue={setCode}
                type={"number"}
              />
            </div>

            <div>
              <label htmlFor="category"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Available</label>
              <select id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected></option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

          </div>
          <Button text={"Add product"} isDisable={!(name.length && code.length)} handleButton={handleNewService}/>
        </form>
        <div>{errorAddNewService}</div>
      </div>
    </section>
  </div>
}

export default ServiceNew