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
            
        }).catch( ()=> res.status(500).send())
    },

    getProperties: (req, res ) => {
        let db = req.app.get('db');
        let user_id = req.session.user.user_id;
        db.getAllProperties([ user_id ]).then( (resp) => {
            res.status(200).send(resp)
        })
        .catch(() => res.status(500).send())
    },

    loginUser: ( req, res) => {
        let db = req.app.get('db');
        db.loginUser([ req.body.username, req.body.password])
        .then((response) => {
            req.session.user.user_id = response[0].id
            res.status(200).send(response[0])
            console.log("user_id is:",req.session.user.user_id)
            
        })
    },

    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send(req.session);
        console.log(req.session, 'session destroyed')
    },

    deleteProperty: (req, res) => {
        let db = req.app.get('db');
        db.deleteProperty([req.params.id, req.session.user.user_id])
        .then( (resp) =>{ 
            res.status(200).send(resp)
            console.log(resp,'after delete')
        })
    }

    

}