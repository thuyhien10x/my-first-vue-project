import {defineStore} from "pinia";

 export let useTeamStore = defineStore ('team', {
    state() {
        return {
            name:'',
            spots:0,
            members:[]
        }
    }
    actions: {
       fill() {
        
       }
    }
})