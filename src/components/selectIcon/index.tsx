import {IconLookup} from "@fortawesome/fontawesome-svg-core";
import {
  faBuildingShield,
  faClose,
  faEdit,
  faPenClip,
  faFloppyDisk,
  faReceipt,
  faHashtag,
  faCheck,
  faHouse,
  faLandmark,
  faAppleAlt,
  faAdd,
  faAngleRight,
  faAnglesUp,
  faDeafness,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {FC} from "react";


const iconsData = [faReceipt, faDeafness, faBuildingShield, faClose, faEdit, faPenClip, faFloppyDisk, faHashtag, faCheck, faHouse, faLandmark, faAppleAlt, faAdd, faAngleRight, faAnglesUp]


interface SelectIconProps {
  icons?: IconLookup[],
  activeIcon?: IconLookup | undefined,
  handleChangeIcon: (icon: IconLookup) => void
}

const SelectIcon: FC<SelectIconProps> = (props) => {
  const {icons = iconsData, handleChangeIcon, activeIcon = icons[0]} = props
  const handleActiveIcon = (e: React.MouseEvent<HTMLButtonElement>,icon: IconLookup) => {
    e.preventDefault()
    handleChangeIcon(icon)
  }

  return <div className={"flex"}>
    {icons.map((icon) => {
      return <button key={icon.iconName}
                     onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleActiveIcon(e, icon)}
        className={` mr-1 p-2 w-14 rounded-xl ${icon.iconName === activeIcon?.iconName && "bg-gray-200"}`}>
          <FontAwesomeIcon
          icon={icon}
          key={icon.iconName}
        />
      </button>
    })}
  </div>

}

export default SelectIcon