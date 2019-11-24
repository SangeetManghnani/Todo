import { ListItemData } from 'src/modal/list-item-data';
export class ListData {
    category:string;
    priority:string;
    date:string;
    time:string;
    isChecked: boolean;
    items: ListItemData[];
}