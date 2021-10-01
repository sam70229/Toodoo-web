export default {
    navs: [
        {
            name: 'home',
            label: 'home',
            url: '/react-app/'
        },
        {
            name: 'test2',
            label: 'test2',
            items: [
                { 
                    name: 'test2 sub1',
                    label: 'test2 sub1',
                    url: "/test1"
                },
                {
                    name: 'test2 sub2',
                    label: 'test2 sub2',
                    items: [
                        { 
                            name: "test2 sub2 sub1",
                            label: "test2 sub2 sub1",
                            url: "/test2"
                        }
                    ]
                }                
            ]
        }
    ]
};
