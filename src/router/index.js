import VueRouter from "vue-router"
import LibReg from "@/components/LibReg";
import LibSearch from "@/components/LibSearch"
import LibLogin from "@/components/LibLogin";
export default new VueRouter({
    routes:[
        {
            path:'/register',
            name:'register',
            component:LibReg
        },
        {
            path:'/search',
            component:LibSearch
        },
        {
            path:'/login',
            component:LibLogin
        }
    ]
})