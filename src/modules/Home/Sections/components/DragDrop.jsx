import { useState, useRef } from "react";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../firebase/firebaseConfig";

const DragDrop = () => {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();

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
    };

    if (files)
        return (
            <div className="uploads">
                <ul></ul>
                <div className="actions">
                    <button onClick={() => setFiles(null)}>Cancel</button>
                    <button onClick={handleUpload}>Upload</button>
                </div>
            </div>
        );

    return (
        <>
            <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
                <h1>Drag and Drop Files to Upload</h1>
                <h1>Or</h1>
                <input type="file" onChange={handleChange} hidden ref={inputRef} />
                <button onClick={() => inputRef.current.click()}>Select Files</button>
            </div>
        </>
    );
};

export default DragDrop;
