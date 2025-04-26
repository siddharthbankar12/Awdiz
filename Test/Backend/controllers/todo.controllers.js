import Todo from "../model/todo.schema.js";

export const CreateTodo = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.send("title is required");
  }

  try {
    const newTodo = Todo({
      title: title,
    });

    await newTodo.save();

    return res.send("Todo create successfully");
  } catch (error) {
    return res.send(error);
  }
};

export const UpdateTodo = async (req, res) => {
  const { id } = req.params;
  const { updateTodo } = req.body;

  if (!id) {
    return res.send("Please send id");
  }

  if (!updateTodo) {
    return res.send("Please send updated todo");
  }

  try {
    const todoUpdate = await Todo.findByIdAndUpdate(
      id,
      { title: updateTodo },
      { new: true }
    );

    if (!todoUpdate) {
      return res.send("Todo not found");
    }

    return res.json(todoUpdate);
  } catch (error) {
    return res.send(error);
  }
};

export const DeleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.send("Please send id");
  }

  try {
    const todoDelete = await Todo.findByIdAndDelete(id);

    if (!id) {
      return res.send("Please send id");
    }

    if (!todoDelete) {
      return res.send("todo not found");
    }

    return res.send("Todo deleted successfully");
  } catch (error) {
    return res.send(error);
  }
};

export const ListTodo = async (req, res) => {
  try {
    const todoList = await Todo.find();

    return res.json(todoList);
  } catch (error) {
    return res.send(error);
  }
};
export const CompleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.send("Please send id");
  }

  try {
    const todoComplete = await Todo.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true }
    );

    return res.json(todoComplete);
  } catch (error) {
    return res.send(error);
  }
};
