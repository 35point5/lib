import VueRouter from "vue-router"
import LibReg from "@/components/LibReg";
import LibSearch from "@/components/LibSearch"
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
        }
    ]
})