import Settings from './Settings';
import Test1 from './Test1';
import Test2 from './Test2';

const pageList = [
    // {
    //     name: "home",
    //     url: "/",
    // },
    {
        name: "category 1",
        url: "/test1",
        component: Test1
    },
    {
        name: "category 2",
        url: "/test2",
        component: Test2
    },
    {
        name: "Settings",
        url: "/settings",
        component: Settings
    }

];

export default pageList;