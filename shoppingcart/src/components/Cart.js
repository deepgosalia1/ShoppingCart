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
        justifyContent: 'center',

    },
    media: {
        padding: '5px',
        height: 175,
        width: 250,
    },
});

function Cart({ cart, updateCart }) {
    const classes = useStyles()

    const sumTotal = () => {
        return Math.ceil(cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0))
    }


    const removefromcart = (item) => {
        updateCart(cart.filter(i => i !== item))
    }

    return (
        <div className="proddiv">
            <header><h2>Checkout Cart : </h2></header>
            {/* <div className="fullpage">
                <h4>Hi</h4>
            </div> */}
            {cart.length>0? <div>
                <div className="cart">
                    {
                        cart.map((item, index) => {
                            // console.log(item,'yehaaya')
                            return (
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
                                                <Typography variant="body1" color="textPrimary" component="p">Quantity: {item.quantity}</Typography>
                                                <Typography variant="body1" color="textPrimary" component="p">${item.price}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions className={classes.cactions}>
                                            <Button onClick={() => removefromcart(item)}> Remove! </Button>
                                        </CardActions>
                                    </Card>

                                </div>
                            )
                        })
                    }
                </div>
                <Button> Pay ${sumTotal()}</Button>
            </div>:
            <div className="empty"><h3 className="emptyname">Empty Cart found. Unacceptable!</h3></div>
            }
        </div>
    )
}
export default Cart;