import {useAppSelector} from "../../hooks/useAppSelector";
import {useEffect} from "react";
import {useActions} from "../../hooks/useActions";

export const ServicesPage = () => {
  const {fetchServices} = useActions()
  let {services, loadingServices, errorLoadingServices} = useAppSelector(state => state.services)
  useEffect(() => {
    fetchServices()
  }, [])


  return <div>
    {
      loadingServices
        ? " Загрузка "
        : services.map(el => {
          return el.title
        })
    }

  </div>
}