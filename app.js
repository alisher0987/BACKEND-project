const express = require("express");
const dotenv = require("dotenv");
const {sequelize} = require("./models");
const setupSwagger = require("./swagger/swagger")
const cors = require("cors");
const adminRouter = require("./Routes/adminRoute")
const Booking = require("./Routes/bookingRoute")
const Cart = require("./Routes/cartRoute")
const Event = require("./Routes/eventRoute")
const Discount = require("./Routes/discount_cuponRoute")
const Cart_item = require("./Routes/cart_itemRoute")
const Event_type = require("./Routes/event_typeRoute")
const Payment_method = require("./Routes/payment_methodRoute")
const Delivery_method = require("./Routes/delivery_methodRoute")
const District = require("./Routes/districtRoute")
const Region = require("./Routes/regionRoute")
const Customer = require("./Routes/customerRoute")
const Customer_address = require("./Routes/customer_addressRoute")
const Country = require("./Routes/countryRoute")
const Customer_Card = require("./Routes/customer_cardRoute")
const Language = require("./Routes/languageRoute")
const Lang = require("./Routes/langRoute")
const Seat = require("./Routes/seatRoute")
const Seat_type = require("./Routes/seat_typeRoute")
const Status = require("./Routes/statusRoute")
const Sector = require("./Routes/sectorRoute")
const Ticket = require("./Routes/ticketRoute")
const Ticket_type = require("./Routes/ticket_statusRoute")
const Venue_photo = require("./Routes/venue_photoRoute")
const Venue = require("./Routes/venueRoute")
const Venue_venue_type = require("./Routes/venue_venuetypeRoute")
const Flat = require("./Routes/flatRoute")
const Venue_type = require("./Routes/venue_typeRoute")
const Human_category = require("./Routes/human_categoryRoute")
const Gender = require("./Routes/genderRoute")
dotenv.config();

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "*"
    })
);        
app.use("/api", adminRouter)
app.use("/api", Booking)
app.use("/api", Human_category)
app.use("/api", Cart)
app.use("/api", Event)
app.use("/api", Cart_item)
app.use("/api", Event_type)
app.use("/api", Payment_method)
app.use("/api", Delivery_method)
app.use("/api", District)
app.use("/api", Region)
app.use("/api", Customer)
app.use("/api", Customer_address)
app.use("/api", Country)
app.use("/api", Customer_Card)
app.use("/api", Language)
app.use("/api", Lang)
app.use("/api", Seat)
app.use("/api", Seat_type)
app.use("/api", Status)
app.use("/api", Sector)
app.use("/api", Ticket)
app.use("/api", Venue_type)
app.use("/api", Ticket_type)
app.use("/api", Venue_photo)
app.use("/api", Venue)
app.use("/api", Venue_venue_type)
app.use("/api", Flat)
app.use("/api", Sector)
app.use("/api", Gender)
app.use("/api", Discount)
setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}` );
        
    })
})