import React, { useState } from 'react';
import axios from 'axios';
import { deleteFile } from '../../modules/apiCaller';

const ImageForm = ({ form ,setForm }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const image = form['filename'];

    const upload = async (file) => {
        try {
            setError(null);
            setLoading(true);

            let formData = new FormData();
            formData.append("file", file);

            const response = await axios.post("/api/v1/file/upload", formData, {
                headers : {
                    "Content-Type" : "multipart/form-data",
                }
            });
            
            const filename = response.data['fullName'];
            setForm({
                ...form,
                filename : filename,
            })

        } catch(e){
            setError(e);
        }

        setLoading(false);
    }

    const handleImage = e => {
        const file = e.target.files[0]
        if(!file||!file.name) {
            return;
        }
        upload(file);
    }

    const handleClick = () => {
        if(image) {
            deleteFile(image);
            setForm({
                ...form,
                filename : '',
            });
        }
        
    }

    return (
        <>
            <label className="btn btn-secondary"
                style = {{ 
                    color : "white",
                    textAlign : "center"}}>
                    <input 
                    type ="file"
                    accept = "image/*" 
                    style = {{ display : "none", cursor : "pointer"}}
                onChange = {handleImage}
                onClick = {handleClick}
                />
                이미지 업로드 
            </label>
            <span style = {{ color : "black", fontSize: "13px" }}>
                {image ? image : " 이미지를 업로드하세요."}
            </span>
            <p style = {{ color : "red", fontSize: "11px" }}>
                {error ? <Error error = {error} /> : ""}
            </p>
            <p style = {{ color : "green", fontSize: "11px" }}>
                {loading ?  "업로드중..." : ""}
            </p>
        </>
    );
}

const Error = ({ error }) => {
    if(error.includes('413')){
        return "파일 용량 초과입니다."
    } 
    return "업로드에 실패했습니다. 에러 : " + error;
}

export default React.memo(ImageForm);