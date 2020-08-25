import React from 'react';
import { Button } from 'react-bootstrap'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 250,
        // maxHeight: 300,
        margin: '10px',
    },
    cactions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
    },
    media: {
        padding: '5px',
        height: 175,
        width: 250,
    },
});

function Products({ cart, products, updateCart }) {
    const classes = useStyles()
    
    const addtocart = (item) => {
        let newCart = [...cart]
        let cartItem = newCart.find(i => i.name === item.name)
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cartItem = { ...item, quantity: 1 }
            newCart.push(cartItem)
        }
        updateCart(newCart)
    }

    return (
        <div className="proddiv">
            <h1> Shop with us! </h1>
            <div className="products">
                {
                    products.map((item, index) => (
                        <div className="product" key={index}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={item.url}
                                        title="Hi sticker"
                                    />
                                    <hr style={{ margin: 0, padding: 0, borderWidth: 0.5, borderColor: 'darkblue' }} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="h5" color="textPrimary" component="p">${item.price}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.cactions}>
                                    <Button onClick={() => addtocart(item)}> Cart it! </Button>
                                </CardActions>
                            </Card>

                        </div>
                    ))
                }
            </div>


        </div>
    )
}
export default Products;