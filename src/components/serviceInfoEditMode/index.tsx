import {FC} from "react";
import IService from "../../types/interfaces/IService";

interface ServiceInfoEditModeProps {
  service: IService
}

const ServiceInfoEditMode: FC<ServiceInfoEditModeProps> = ({service}) => {

  return <div>
    ServiceInfoEditMode
  </div>
}

export default ServiceInfoEditMode