module.exports = {
    createUser: (req, res) => {
        console.log('hello')
        let db = req.app.get('db');
        db.createUser([req.body.username, req.body.password])
        .then( (response) => {
            req.session.user.user_id = response[0].id
            console.log(req.session);
            console.log(response[0]);
            res.status(200).send(response[0]);})
            },
    //dont use next on controllers because it throws off the fetching; also dont console.log after .send

    loginUser: ( req, res) => {
        let db = req.app.get('db');
        db.loginUser([ req.body.username, req.body.password])
        .then((response) => {
            req.session.user.user_id = response[0].id
            res.status(200).send(response[0])
            console.log(req.session.user.user_id)
        })
    },

    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send(req.session);
        console.log(req.session, 'session')
    }

    

}