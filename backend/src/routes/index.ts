import express from "express";
import allRoutes from "../controllers/allRoutes";

const router: express.Router = express.Router();

router.use(allRoutes);

router.use("/health", (req, res) => {
    res.send({status: "OK"});
});

export default router;