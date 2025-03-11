import { AppDataSource } from "@database/data-source";
import { Order } from "@entity/orders";
import { Detail_Order } from "@entity/order_details";
import { Repository } from "typeorm";
import  sendMail from "../utils/mailer";

export class OrderService {
    private orderRepository: Repository<Order>;
    private detailOrderRepository: Repository<Detail_Order>;

    constructor() {
        this.orderRepository = AppDataSource.getRepository(Order);
        this.detailOrderRepository = AppDataSource.getRepository(Detail_Order);
    }

    async createOrder(data: Partial<Order>): Promise<Order> {
        const order = this.orderRepository.create(data);
        return this.orderRepository.save(order);
    }

    // async sendOrderEmail(orderId: number, fullname: string, phone: string, address: string, email: string, price: number, total: number): Promise<string> {
    //     const carts = await this.detailOrderRepository.find({
    //         where: { id_order: { id: orderId } },
    //         relations: ["id_product"]
    //     });

    //     if (carts.length === 0) {
    //         return "Không tìm thấy đơn hàng";
    //     }

    //     let htmlContent = carts.map(cart => `
    //         <tr>
    //             <td>${cart.id_product.name_product}</td>
    //             <td><img src="${cart.id_product.image}" width="80" height="80"></td>
    //             <td>${cart.id_product.price_product}$</td>
    //             <td>${cart.count}</td>
    //             <td>${cart.size}</td>
    //             <td>${cart.id_product.price_product * cart.count}$</td>
    //         </tr>
    //     `).join("");

    //     const htmlResult = `
    //         <h1>Xin Chào ${fullname}</h1>
    //         <h3>Phone: ${phone}</h3>
    //         <h3>Address: ${address}</h3>
    //         <table style="width:50%">
    //             <tr>
    //                 <th>Tên Sản Phẩm</th>
    //                 <th>Hình Ảnh</th>
    //                 <th>Giá</th>
    //                 <th>Số Lượng</th>
    //                 <th>Size</th>
    //                 <th>Thành Tiền</th>
    //             </tr>
    //             ${htmlContent}
    //         </table>
    //         <h1>Phí Vận Chuyển: ${price}$</h1>
    //         <h1>Tổng Thanh Toán: ${total}$</h1>
    //         <p>Cảm ơn bạn!</p>
    //     `;

    //     await sendMail(email, "Hóa Đơn Đặt Hàng", htmlResult);
    //     return "Gửi Email Thành Công";
    // }

    async getOrdersByUser(userId: number): Promise<Order[]> {
        return this.orderRepository.find({
            where: { id_user: { id: userId } },
            relations: ["id_user", "id_note"]
        });
    }

    async getOrderDetail(orderId: number): Promise<Order | null> {
        return this.orderRepository.findOne({
            where: { id: orderId },
            relations: ["id_user", "id_note", "id_payment"]
        });
    }
}
