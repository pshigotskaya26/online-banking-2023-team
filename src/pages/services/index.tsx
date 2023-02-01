import {useAppSelector} from "../../hooks/useAppSelector";
import {useEffect} from "react";
import {useActions} from "../../hooks/useActions";

export const ServicesPage = () => {
  const {fetchServices} = useActions()
  let {services} = useAppSelector(state => state.services)
  useEffect(() => {
    fetchServices()
  }, [])


  return <div>
    {
      services.map(el => {
        return el.title
      })
    }1
  </div>
}