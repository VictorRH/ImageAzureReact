import { CardContent, Container, CssBaseline } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { AddImage, AllImages, RemoveImage } from "../actions/imageAzureActions";
import CardImage from "./CardImage";
import FormsaveImage from "./FormsaveImage";
import swal from 'sweetalert';

const ImageComponent = () => {
    const [saveImagen, setSaveImagen] = useState({
        Name: '',
        Picture: ''
    });

    const [responseAllImage, setResponseAllImage] = useState([])


    const AllImagesAzure = React.useCallback(async () => {
        const abortStorage = new AbortController();

        const response = await AllImages();
        setResponseAllImage(response);
        return () => abortStorage.abort();

    }, []);

    useEffect(() => {
        AllImagesAzure();
    }, [])


    const valueInMemory = (e) => {
        const { name, value } = e.target;
        setSaveImagen(before => ({
            ...before,
            [name]: value
        }));

    }

    const saveImageBtn = (e) => {
        e.preventDefault();
        if (saveImagen.Picture === '' || saveImagen.Name === '') {
            swal("Error!", "Please complete data!", "error");
            return;
        }
        const formData = new FormData();
        formData.append('Name', saveImagen.Name);
        let imagedata = document.querySelector('input[type="file"]').files[0];
        formData.append('Picture', imagedata);

        AddImage(formData).then(response => {
            if (response?.status === 200) {
                swal("Success!", "Your image was saved successfully!", "success");
                AllImagesAzure();
                return;
            } if (response?.status === 400 || response?.status === 404 || response?.status === 500) {
                swal("Error!", "the image was not saved!", "error");
                return;
            }
        })

    }

    const deletBtnImage = (id) => {
        console.log('id image', id);
        if (!id) {
            swal("Error!", "Image Not Found!", "error");
            return;
        }
        RemoveImage(id).then(response => {
            if (response?.status === 200) {
                swal("Success!", "Your image was removed!", "success");
                AllImagesAzure();
                return;
            } if (response?.status === 400 || response?.status === 404 || response?.status === 500) {
                swal("Error!", "Image Not removed!", "error");
                return;
            }
        })
    }


    return (
        <>
            <Container component="main" maxWidth="lg">
                <div >
                    <CssBaseline />
                    <CardContent >
                        <div style={{ flexWrap: 'wrap', display: 'inline-flex' }}>
                            <h2 style={{ fontWeight: 'bold' }} >Example Save Image in Azure storage accounts </h2>
                        </div>
                    </CardContent>

                    <FormsaveImage
                        saveImageBtn={saveImageBtn}
                        saveImagen={saveImagen}
                        valueInMemory={valueInMemory}

                    /><br></br>


                    {responseAllImage?.status === 200 ?

                        Object.keys(responseAllImage.data).map((image, index) => (
                            <CardImage
                                key={index}
                                responseAllImage={responseAllImage.data[image]}
                                deletBtnImage={deletBtnImage}
                            />
                        ))
                        : <h3>database image is empty</h3>
                    }
                </div>
            </Container>
        </>

    );
}

export default ImageComponent;