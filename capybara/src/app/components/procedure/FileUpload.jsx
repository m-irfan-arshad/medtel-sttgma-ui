"use client"
import { useState } from "react";
import {Button, Box} from "@mui/material";
import StyledBox from "../design_helpers/StyledBox";


export default function UploadButtons() {
  const [imageUrl, setImageUrl] = useState();

  // sets imageUrl variable
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <StyledBox backgroundColor="#f8f9fa" borderRadius= '10px'  width= '100%' height= '100%' >
        
        <label htmlFor="upload-image">
            <Box width="100%" alignItems = "left">
            <Button variant = "contained" component="span" sx={{ width: "100%", backgroundColor: "#DBF6FF", color: "grey"}}>
                Upload X-Ray Image
            </Button>
            </Box>
            <input
                id="upload-image"
                hidden
                accept="image/*"
                type="file"
                onChange={handleFileUpload}
            />
        </label>

        {/* dispay image using imageUrl variable */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {imageUrl && <img src={imageUrl} alt="Uploaded Image" style={{ width: "100%", height: "100%", objectFit: "contain" }} />}
        </div>  
        

    </StyledBox>

  );
}