import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";
import "reflect-metadata"
import { AppDataSource } from "@database/data-source";
import fileUpload from "express-fileupload";

import categoryRouter from '@routes/categories.router'
import userRouter from '@routes/users.router'
import productRouter from '@routes/products.router';
import orderRouter from '@routes/orders.router';
import momoRouter from '@routes/momo.router';
import noteRouter from '@routes/note.router'
import detail_ordersRouter from '@routes/detail_orders.router'
import deliveryRouter from '@routes/delivery.router'
import commentRouter from '@routes/comment.router'

import adminUsersRouter from '@routes/admin.router/adminUsers.router'
import adminSalesRouter from '@routes/admin.router/adminSales.router'
import adminProductsRouter from '@routes/admin.router/adminProducts.router'

import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(fileUpload());
app.use("/img", express.static("public/img")); // Cho phép truy cập ảnh qua URL

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

AppDataSource.initialize().then(() => {
  console.log('initialized db')
}).catch(() => {
  console.error('Error while connecting to the database')
  process.exit(1)  // exit with error code 1 to indicate failure to connect to the database
});

app.use("/", userRouter, productRouter, orderRouter, momoRouter,
  noteRouter, detail_ordersRouter, deliveryRouter, commentRouter,
  categoryRouter, adminUsersRouter, adminSalesRouter, adminProductsRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
