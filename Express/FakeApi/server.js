const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;
    

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );

class User{
    constructor(){
        this.id=faker.datatype.uuid();
        this.firstName=faker.name.firstName();
        this.lastName=faker.name.lastName();
        this.phone=faker.phone.phoneNumber();
        this.email=faker.internet.email();
         this.password=faker.internet.password();
    }
}

class Company{
    constructor(){
        this.id=faker.datatype.uuid();
        this.companyName=faker.company.companyName();
        this.adress={
            street:faker.address.streetName(),
            city: faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    const user1=new User();
    res.json(user1);
});
app.get("/api/companies/new", (req, res) => {
    const company1=new Company;
    res.json(company1);
});
app.get("/api/user/company", (req, res) => {
    const asd={
        company1:new Company,
        user1:new User
    }
    res.json(asd);
    // res.json(user1);
});