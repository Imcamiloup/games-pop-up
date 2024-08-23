import { Router } from "express";
/* import {
  getAllUsersHandler,
} from "../handlers/usersHandler.js";
 */

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
    res.send("Hello World");
});
//usersRouter.get("/:id", getUserByIdHandler);
//usersRouter.get("/dni/:dni", getUserByDNIHandler);
//usersRouter.get("/email-confirmation/:verificationCode", confirmEmail);
//usersRouter.get ("/name",getUserByNameHandler);
//usersRouter.post("/register", registerHandler);
//usersRouter.post("/register-auth0", genereteAuth0User);
//usersRouter.post("/login", loginHandler);
//usersRouter.patch("/reset-password", resetPassword);
//usersRouter.post("/request-password-reset", requestPasswordReset);
//usersRouter.patch("/:id", authenticateToken, updateUserHandler);
//usersRouter.patch("/profile/:id", updateProfileHandler)
//usersRouter.delete("/:id", authenticateToken, deleteUserHandler);

export default usersRouter;
