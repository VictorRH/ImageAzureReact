import axios from 'axios';
import httpClient from '../services/HttpClient';


export const AddImage = (object) => {
    return new Promise((resolve, eject) => {
        httpClient.post('/AzureStorage/azure', object, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(response => {
            resolve(response)
        }).catch(error => {
            resolve(error.response)
        });
    })
}

export const AllImages = () => {
    return new Promise((resolve, eject) => {
        httpClient.get('/AzureStorage').then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        })
    })
}

export const RemoveImage = (id) => {
    return new Promise((resolve, eject) => {
        httpClient.delete(`/AzureStorage/${id}`).then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        })
    })
}