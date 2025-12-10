import React, {useState} from 'react';

function FileInput(){
    const [selectedFile, setSelectedFiles] = useState(null);

    function handleChange(e){
        const file = e.target.files[0];
        setSelectedFiles(file);
        console.log("Selected file:", file);
    }

    return(
        <div>
            <input type='file' name='fileInput' onChange={handleChange}/>
        </div>
    )
}

export default FileInput;