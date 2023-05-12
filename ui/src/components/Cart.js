import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Order from './Order';
import AuthContext from './context/ContextProvider';
import './carosel.css'



function Cart() {

    const { userId } = useContext(AuthContext)
    const navigator = useNavigate()

    const [products, setproducts] = useState([])
    const [users, setusers] = useState([])
    const [userid, setuserid] = useState("")
    const [cartlist, setcartlist] = useState([])
    const [itemid, setitemid] = useState("")
    const [total, settotal] = useState("")

    const getproduct = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/product/")
            setproducts(result.data)

            console.log(products)

        } catch (error) {
            console.log(error);
        }
    }


    const getcartitem = async () => {
        try {
            await axios.get(`http://localhost:8000/cart/${userId}/`)
                .then(response => {
                    let arr = []

                    let sum = 0
                    for (const product of products) {
                        for (const cartitem of response.data) {
                            if (product.id === cartitem.productid) {
                                console.log(cartitem.id)
                                let itemprice = (product.price) * (cartitem.quantity)
                                const obj = {
                                    'name': product.name,
                                    'price': product.price,
                                    'quantity': cartitem.quantity,
                                    'productid': product.id,
                                    'itemtotal': itemprice
                                }
                                arr.push(obj)
                                sum += itemprice
                            }
                        }
                    }
                    settotal(sum)
                    console.log(arr)
                    return arr                // setcartitems(response.data)
                })
                .then(swdx => {
                    console.log(swdx)
                    setcartlist(swdx);

                })

        }
        catch (error) {
            console.log(error)
        }

    }



    useEffect(() => {
        // if (userid !== "") {


        // }
        getproduct()
    }, [userId]);

    useEffect(() => {
        if (products?.length !== 0) {

            getcartitem()
        }
    }, [products]);


    const add = async (e, id) => {
        e.preventDefault()
        let qty = 0;

        try {

            await axios.get(`http://localhost:8000/cart/${userId}/`)
                .then(response => {
                    // console.log(cartitems)
                    for (const cartitem of response.data) {
                        if (cartitem.productid === id) {
                            qty = cartitem.quantity

                            console.log("qty: " + qty)
                        }
                    }
                    // setcartitems(response.data)
                })

        }
        catch (error) {
            console.log(error)
        }

        qty = qty + 1
        console.log("qty>0: " + qty)
        const token = "0971ec5ae480ee59aee0a0f7ff6da785ef7b27cd"
        await axios.patch(`http://localhost:8000/cart/${userId}/`, {
            'quantity': qty,
            'userid': userId,
            'productid': id
        },
            // {itemid,userid},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // add your token here
                    // 'X-CSRFToken': token
                }
            })
            .then(response => { console.log(response.data); console.log("status:success") })
            .catch(error => {
                console.error(error);
            });

        window.location.reload()

    }


    const remove = async (e, id) => {
        e.preventDefault()
        let qty = 0;

        try {

            await axios.get(`http://localhost:8000/cart/${userId}/`)
                .then(response => {
                    // console.log(cartitems)
                    for (const cartitem of response.data) {
                        if (cartitem.productid === id) {
                            qty = cartitem.quantity
                            console.log("qty: " + qty)
                        }
                    }
                    // setcartitems(response.data)
                })

        }
        catch (error) {
            console.log(error)
        }




        if (qty > 1) {
            qty = qty - 1
            console.log("qty>0: " + qty)
            const token = "0971ec5ae480ee59aee0a0f7ff6da785ef7b27cd"
            await axios.patch(`http://localhost:8000/cart/${userId}/`, {
                'quantity': qty,
                'userid': userId,
                'productid': id
            },
                // {itemid,userid},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // add your token here
                        // 'X-CSRFToken': token
                    }
                })
                .then(response => { console.log(response.data); console.log("status:success") })
                .catch(error => {
                    console.error(error);
                });
            window.location.reload()
        }
        else {
            console.log("itemid:" + itemid)
            axios.delete(`http://localhost:8000/cart/${userId}/?productid=${id}`)
                .then(response => {
                    console.log('Deleted cart:', response.data);
                    window.location.reload()
                })
                .catch(error => {
                    console.error('Error deleting cart:', error);
                });


        }


    }


    const checkout = (e) => {
        e.preventDefault()

        let pid = 0

        for (const item of cartlist) {
            pid = item.productid
            // const citem = products.find(product => product.id === pid);
            // axios.post(`http://127.0.0.1:8000/api/order/order/${userid}/`)
            const token = "0971ec5ae480ee59aee0a0f7ff6da785ef7b27cd"
            axios.post(`http://127.0.0.1:8000/order/${userId}/`, {
                'userid': userId,
                'productid': pid,
                'status': false,
                'quantity': item.quantity,
            },
                // {itemid,userid},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // add your token here
                        // 'X-CSRFToken': token
                    }
                })
                .then(response => { console.log(response.data); console.log("status:success") })
                .catch(error => {
                    console.error(error);
                });

            axios.delete(`http://localhost:8000/cart/${userId}/?productid=${pid}`)
                .then(response => {
                    console.log('Deleted cart:', response.data);
                })
                .catch(error => {
                    console.error('Error deleting cart:', error);
                });

            navigator("/order")

        }


    }

    return (
        <div className="container-fluid carosel-container">
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#f0e0ff" />
                        </svg>

                        <div className="container">
                            <div className="carousel-caption text-start-top">
                                {cartlist?.length ?
                                    <div>
                                        <div>
                                            <table class="table" >
                                                <thead>
                                                    <tr>
                                                        <th>item name</th>
                                                        <th>quantity</th>
                                                        <th>price</th>
                                                        <th>total price</th>
                                                        <th>remove/add</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cartlist.map(i => (
                                                        <tr>
                                                            <td scope="row">{i.name}</td>
                                                            <td>{i.quantity}</td>
                                                            <td>{i.price}</td>
                                                            <td>{i.itemtotal}</td>
                                                            <td>
                                                                <div>
                                                                    <button type="submit" className='btn btn-outline-dark mt-2 m-3 p-1 center' name="remove" style={{ float: 'left' }} onClick={(e) => { remove(e, i.productid); setitemid(i.productid) }}> - </button>
                                                                    <button type="submit" className='btn btn-outline-dark mt-2  p-1' name="add" style={{ float: 'left' }} onClick={(e) => { add(e, i.productid); setitemid(i.productid) }}> + </button>
                                                                </div>

                                                            </td>
                                                        </tr>)
                                                    )}


                                                </tbody>
                                                <tr>
                                                    <th>Total:- </th>
                                                    <td>{total}</td>
                                                </tr>
                                            </table>
                                            <div className='mr-5 float-right'>
                                                <button type="button" className="btn btn-lg btn-primary " onClick={(e) => { checkout(e) }}>Checkout</button>
                                            </div>
                                        </div>

                                    </div> : <div>
                                        <h1>Oops!  Cart is Empty</h1>
                                        <p>  Start Shopping and Fill it Up Today! what are you waiting for?</p>
                                        <p><a className="btn btn-lg btn-primary" href="/store">Shop Now</a></p>
                                    </div>}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Cart