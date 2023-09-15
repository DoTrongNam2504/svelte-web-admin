
export interface RouteItemType {
    hasSubMenu?: boolean;
    state?: string; // các route sẽ nhớ và active lại khi f5: [state,path+name]
    name?: string;
    path?: string;
    icon?: string;
  }
  export interface RouteSubMenu extends RouteItemType{
    sub?: RouteItemType[]
  }
  
  export interface ColumnsTable {
    key: string;
    title: string;
    dataIndex: string;
    width?: string;
    colspan?: string | number;
    className?: string;
    render?: any; 
    childrent?: ColumnsTable[];
  }