export const getRooms = (req, res) => {
  res.json({
    message: "Getting rooms",
  });
};

export const addRooms = (req, res) => {
  res.json({
    message: "adding rooms",
  });
};

export const editRooms = (req, res) => {
  res.json({
    message: "editing rooms",
  });
};

export const deleteRooms = (req, res) => {
  res.json({
    message: "deleting rooms",
  });
};
