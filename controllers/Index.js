class Index {
    index(req, res) {
        const model = {
            
        };

        res.render('../views/index.pug', model);
    }
}

module.exports = Index;