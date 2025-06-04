export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};
export const see = (req, res) => {
  return res.render("watch", { pageTitle: "Watch" });
};

export const edit = (req, res) => {
  return res.send("Video Edit");
};

export const search = (req, res) => {
  return res.send("Video Search");
};

export const deleteVideo = (req, res) => {
  return res.send("Video Delete");
};

export const upload = (req, res) => {
  return res.send("Video Upload");
};
