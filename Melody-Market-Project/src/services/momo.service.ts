import crypto from "crypto";

export class MomoService {
    private secretKey = "uLb683H8g9dWuiyipZbLHgO6zjSDlVm5";

    verifySignature(data: any): boolean {
        const param = [
            `partnerCode=${data.partnerCode}`,
            `accessKey=${data.accessKey}`,
            `requestId=${data.requestId}`,
            `amount=${data.amount}`,
            `orderId=${data.orderId}`,
            `orderInfo=${data.orderInfo}`,
            `orderType=${data.orderType}`,
            `transId=${data.transId}`,
            `message=${data.message}`,
            `localMessage=${data.localMessage}`,
            `responseTime=${data.responseTime}`,
            `errorCode=${data.errorCode}`,
            `payType=${data.payType}`,
            `extraData=${data.extraData}`
        ].join("&");

        const signature = crypto.createHmac("sha256", this.secretKey).update(param).digest("hex");
        return signature === data.signature;
    }
}
