export default {
    navs: [
        {
            name: 'home',
            label: 'Home',
            url: '/'
        },
        {
            name: 'test2',
            label: 'Test 2',
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
                            name: "test2 sub2 sub2",
                            label: "test2 sub2 sub2",
                            url: "/test2"
                        }
                    ]
                }                
            ]
        }
    ]
};
