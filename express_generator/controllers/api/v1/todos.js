const Todo = require("../../../models/Todo");

const getAll = (req, res) => {
    Todo.find({ "user": "Joris" }, (err, docs) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "todos": docs
                }
            });
        }
    });
}

const create = (req, res) => {

    console.log(req.body);


    let todo = new Todo();
    todo.text = "my first nodejs";
    todo.user = "Joris";
    todo.completed = false;
    todo.save((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "could not save this todo item"
            });
        }

        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "todo": doc
                }
            });
        }
    })


}

module.exports.getAll = getAll;
module.exports.create = create;