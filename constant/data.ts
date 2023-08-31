import { youngpeople1, youngpeople2, youngpeople3, youngpeople4, youngpeople5 } from "./images"

export interface Avatars {
    name:string,
    image:any
}
const avatars:Avatars[] = [
    {
        name:'avatar1',
        image: youngpeople1
    },
    {
        name:'avatar2',
        image: youngpeople2
    },
    {
        name:'avatar3',
        image: youngpeople3
    },
    {
        name:'avatar4',
        image: youngpeople4
    },
    {
        name:'avatar5',
        image: youngpeople5
    },
    {
        name:'avatar6',
        image: youngpeople4
    }
];


export const pageLinks = [
    {
        type: 'student',
        links: [
            {
                link:'/student/profile',
                name:'Profile',
                icon: ''
            },
            {
                link:'student/dashboard',
                name:'Dashboard',
                icon:''
            },
            {
                link:'/student/chat',
                name:'Chat',
                icon: ''
            },
            {
                link:'/student/mytutorial',
                name:'chat group',
                icon: ''
            },
            {
                link:'/student/chat',
                name:'chat group',
                icon: ''
            }
            
        ]
    }
];

const allGroupcolumns = [
    {
        Header:'id',
        accessor:'id'
    },
    {
        Header:'Name',
        accessor:'name'
    },
    {
        Header:'Taken',
        accessor:'taken'
    },
    {
        Header: 'Won',
        accessor:'won'
    },
    {
        Header: 'Member',
        accessor:'member'
    }
]

export {
    avatars,
    allGroupcolumns
}