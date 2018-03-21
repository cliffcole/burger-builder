import React, {Component} from 'react'
//import classes from './Orders.css';
import Order from './../../components/Order/Order'
import axios from './../../axios-orders'
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('orders.json').then(response => {
            console.log(response.data);
            const fetchOrders = [];
            for(let key in response.data) {
                fetchOrders.push({
                    ...response.data[key],
                    id: key
                });
            }
            this.setState({loading: false, orders: fetchOrders});
        }).catch(error => {
            this.setState({loading: false});
        })
    }
    render() {

        return(
            <div>
                {this.state.orders.map(order => {
                    return (<Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                    )

                })}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);