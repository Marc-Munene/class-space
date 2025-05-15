export const getNotification = (req, res) => {
  res.json({
    message: "Getting notifications",
  });
};

export const addNotification = (req, res) => {
  res.json({
    message: "adding notifications",
  });
};

export const editNotification = (req, res) => {
  res.json({
    message: "editing notifications",
  });
};

export const deleteNotification = (req, res) => {
  res.json({
    message: "delete notification",
  });
};
