import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from "@element-plus/icons-vue";

import { INavMenu } from "@/models/index";

export const useMenu = () => {
    const menuItems: INavMenu[] = [
        { name: '首页', url: '/index', icon: Document },
        { name: '订单管理', url: '/order', icon: Location },
        { name: '统计分析', url: '/census', icon: Setting },
    ]
    return menuItems
}

