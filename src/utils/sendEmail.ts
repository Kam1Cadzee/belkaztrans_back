import nodemailer from 'nodemailer'
import {IContact} from '../db/models/ContactModel';
import ProductModel, {IProduct} from '../db/models/ProductModel';
const config = require('../config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.emailUser,
    pass: config.emailPassword // naturally, replace both with your real credentials or an application-specific password
  }
});


const sendEmail = async (data: IContact) => {
  const product:IProduct = await ProductModel.findById(data.typeProduct);

  const mailOptions = {
    from: 'no_replay@gmail.com',
    to: 'vadim.vereketa@gmail.com',
    subject: 'Invoices due',
    html: `<div>
<p><b>Iм'я:</b>${data.firstName}</p>
<p><b>Прізвище:</b>${data.lastName}</p>
<p><b>Email:</b>${data.email}</p>
<p><b>Телефон:</b>${data.phone}</p>
<p><b>Коментар:</b>${data.comment}</p>
<p><b>Направлення:</b>${product.titleUA}</p>
</div>`
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  }
  catch (e) {
    return false;
  }
};

export default sendEmail;
