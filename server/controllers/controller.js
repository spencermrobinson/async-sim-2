module.exports = {
    createUser: (req, res) => {
        let db = req.app.get('db');
        db.createUser([req.body.username, req.body.password])
        .then( (response) => {
            req.session.user.user_id = response[0].id
            console.log(req.session);
            console.log(response[0]);
            res.status(200).send(response[0]);})
            },
    

    createProperty: (req, res) => {
        
        let db = req.app.get('db');
        let {name, description, address, city, state, zip, image, loan, mortgage, rent, recommended_rent}= req.body;
        let user_id = req.session.user.user_id;
        db.createProperty(user_id, name, description, address, city, state, zip, image, loan, mortgage, rent, recommended_rent)
        .then( ()=>{
            res.status(200).send('success')
            
        }).catch()
    },

    loginUser: ( req, res) => {
        let db = req.app.get('db');
        db.loginUser([ req.body.username, req.body.password])
        .then((response) => {
            req.session.user.user_id = response[0].id
            res.status(200).send(response[0])
            
        })
    },

    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send(req.session);
        console.log(req.session, 'session destroyed')
    }

    

}