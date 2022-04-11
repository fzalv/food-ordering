import React from 'react'
import Image from 'next/image'
import styles from '../styles/Cart.module.css'

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image
                                    src="/img/pizza.png"
                                    layout='fill'
                                    objectFit='cover'
                                    alt=''
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Colorado</span>
                        </td>
                        <td>
                            <span className={styles.extras}>Keju Moza</span>
                        </td>
                        <td>
                            <span className={styles.price}>$20.00</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>4</span>
                        </td>
                        <td>
                            <span className={styles.total}>$80.00</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image
                                    src='/img/pizza.png'
                                    layout='fill'
                                    objectFit="cover"
                                    alt=''
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Colorado</span>
                        </td>
                        <td>
                            <span className={styles.extras}>Keju Moza</span>
                        </td>
                        <td>
                            <span className={styles.price}>$20.00</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>4</span>
                        </td>
                        <td>
                            <span className={styles.total}>$80.00</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Cart Total</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>
                        $16.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>
                        $0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>
                        $16.00
                    </div>
                    <button className={styles.button}>CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    )
}

export default Cart