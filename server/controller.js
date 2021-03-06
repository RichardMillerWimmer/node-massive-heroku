module.exports = {

    getItems: (req, res) => {
        const db = req.app.get('db')

        db.get_all_items()
            .then(dbres => {
                res.status(200).send(dbres)
            })
            .catch(error => console.log(error))
    },

    addItem: (req, res) => {
        const db = req.app.get('db')
        const { itemName, itemSize } = req.body

        db.add_item(itemName, itemSize)
            .then(dbres => {
                res.status(200).send(dbres)
            })
            .catch(error => console.log(error))
    }
}