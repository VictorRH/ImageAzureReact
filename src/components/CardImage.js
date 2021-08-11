import { Button, Card, CardContent, CardActions } from '@material-ui/core';

const CardImage = ({ responseAllImage, deletBtnImage }) => {
    return (
        <>
            <Card>
                <CardContent>
                    <h4>{responseAllImage.name}</h4>
                    <img src={responseAllImage.picture} alt="picture" width="60%" height="20%"></img>
                    <CardActions >
                        <Button variant="contained" onClick={() => deletBtnImage(responseAllImage.idStorageFile)} color="secondary">Delete</Button>
                    </CardActions>
                </CardContent>
            </Card >
            <br></br>
        </>
    );
}

export default CardImage;