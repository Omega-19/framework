let app = new Vue({//une instanciation constitué d'objet
    el:'#app',//permet de greffer vue sur un élément du DOM, avec el une propriété.
    data : {
        age : 10,
        message : `Bonjour Nicole, comment tu vas? J'ai`,
        name : "Rosa",
        note : {
            math : 15,
            philo : 20, 
            svt : 17,
            anglais : 12
        },
        seen : 19852,
        notes : " 30 en français; 20 en anglais",
        tab : [15, 30, 80, 12],
   
    }
})