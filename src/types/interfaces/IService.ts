import {IconLookup} from "@fortawesome/fontawesome-svg-core";

export default interface IService {
    id: number; //DB index.tsx
    code: number;
    title: string;
    isAvailable: boolean;
    icon?: IconLookup
}
