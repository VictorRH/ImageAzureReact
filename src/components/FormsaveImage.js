import { Button, Card, Container, CssBaseline, Grid, TextField } from '@material-ui/core';

const FormsaveImage = ({ saveImageBtn, saveImagen, valueInMemory }) => {

    return (
        <>
            <form style={{ width: '100%', marginTop: '3rem' }}>
                <Card>
                    <Container component="main" maxWidth="md">
                        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <CssBaseline />
                            <Grid container spacing={2} justifyContent="center" >
                                <Grid item xs={12} sm={6}>
                                    <TextField name="Name" value={saveImagen.Name} onChange={valueInMemory} variant="outlined" fullWidth placeholder="name image" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant="contained" component="label">
                                        Upload File  <input type="file" hidden accept=".jpg,.jpeg,.png" name="Picture" value={saveImagen.Picture} onChange={valueInMemory} />
                                    </Button>
                                    {/* Upload image<input type="file" accept=".jpg,.jpeg,.png" name="Picture" value={saveImagen.Picture} onChange={valueInMemory} /> */}
                                </Grid>
                                <Button variant="contained" onClick={saveImageBtn} color="primary" component="label" >Save Image</Button>
                            </Grid>
                            <br />
                        </div>
                    </Container>
                </Card>
            </form>

        </>
    );
}

export default FormsaveImage;