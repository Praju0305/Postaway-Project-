import multer from "multer";

const storage = multer.diskStorage({
    destination:(req,res,cb) => {
        cb(null, "./uploads/");
    },
    filename:(req,res,cb) => {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-') + '-' + file.originalname;
        cb(null,timestamp);
    },
});

export const upload = multer({
    storage:storage,
});