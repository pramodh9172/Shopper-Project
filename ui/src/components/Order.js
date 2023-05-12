import React, { useContext, useEffect, useState } from 'react'
import Cart from './Cart'
import axios from 'axios'
import AuthContext from './context/ContextProvider'
import './carosel.css'

function Order() {

   


    const { userId } = useContext(AuthContext)
    const [cartitem, setcartitem] = useState([])
    const [products, setproducts] = useState([])
    const [userid, setuserid] = useState("")
    

    const getproduct = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/product/")
            setproducts(result.data)

            console.log(products)

        } catch (error) {
            console.log(error);
        }
    }

    const getcart = async () => {

        try {
            console.log("userid:" + userId)
            await axios.get(`http://localhost:8000/order/${userId}/`)
                .then(response => {
                    let arr = []
                    console.log("response: ", response.data)
                    let sum = 0
                    console.log("products:", products)
                    for (const product of products) {
                        for (const citm of response.data) {
                            if (product.id === citm.productid) {
                                console.log("citem: ", citm)
                                const obj = {
                                    'name': product.name,
                                    'price': product.price,
                                    'status': citm.status,
                                    'productid': product.id,
                                    'date': citm.date_created,
                                    'quantity': citm.quantity,

                                }
                                arr.push(obj)

                            }
                        }
                    }
                    console.log("arr", arr)
                    return arr                // setcartitems(response.data)
                })
                .then(swdx => {
                    console.log(swdx)
                    setcartitem(swdx);


                })

        }
        catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getproduct()
    }, [userId]);

    useEffect(() => {
        getcart()
    }, [products, userId])



   

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
            {cartitem?.length ?( <div>
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Item name</th>
                                <th>Status</th>
                                <th>Quantity</th>
                                <th>Paid</th>
                                <th>Order Date</th>
            
            
                            </tr>
                        </thead>
                        <tbody>
                            {cartitem.map(i => (
                                <tr>
                                    <td scope="row">{i.name}</td>
                                    {i.status === true ? <td>completed</td> : <td>pending</td>}
                                    <td>{i.quantity}</td>
                                    <td>{(i.price)*(i.quantity)}</td>
                                    <td>{i.date}</td>
            
            
                                </tr>)
                            )}
            
            
                        </tbody>
                        
            
                    </table>
                </div>
            
            
            </div>):
            <div> 
                <h1>Oops!  No Orders Yet</h1>
                            <p>  Start Shopping and Fill it Up Today! what are you waiting for?</p>
                            <p><a className="btn btn-lg btn-primary" href="/store">Shop Now</a></p>
                </div>
            }
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

    )
}

export default Order