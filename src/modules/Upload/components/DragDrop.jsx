import { useState, useRef } from "react";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase/firebaseConfig";
import { Typography } from "../../../components";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { themePreferences } from "../../../redux/features/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const DragDrop = () => {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();
    const router = useRouter();

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleChange = (e) => {
        setFiles(e.target.files[0]);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(e.target.files[0]);
    };

    const handleUpload = () => {
        const storageRef = ref(storage, files.name);
        const uploadTask = uploadBytesResumable(storageRef, files);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                }
            },
            (error) => {},
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                });
            }
        );

        setTimeout(function () {
            router.push("/");
        }, 1000);
    };

    if (files)
        return (
            <div className="uploads">
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography color="#fff" size="h5">
                        Upload Complete
                    </Typography>
                    <Box>
                        <button onClick={() => setFiles(null)}>Cancel</button>
                        <button onClick={handleUpload}>Upload</button>
                    </Box>
                </Box>
            </div>
        );

    return (
        <>
            <Box
                sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}>
                <Typography weight="semiBold" color="#fff">
                    Drag and Drop Files to Upload
                </Typography>
                <Typography weight="semiBold" color="#fff">
                    Or
                </Typography>
                <input type="file" onChange={handleChange} hidden ref={inputRef} />
                <button onClick={() => inputRef.current.click()}>Select Files</button>
            </Box>
        </>
    );
};

export default DragDrop;
