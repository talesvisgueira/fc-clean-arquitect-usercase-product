import { app, sequelize } from "../express";
import request from "supertest";

describe("E2E test for product", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => {
    const response = await request(app)
      .post("/product")
      .send({
        name: "Cable",
        price: 5,
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Cable");
    expect(response.body.price).toBe(5);

  });

  // it("should not create a product", async () => {
  //   const response = await request(app).post("/product").send({
  //     name: "Cable",
  //   });
  //   expect(response.status).toBe(500);
  // });

  // it("should list all product", async () => {
  //   const response = await request(app)
  //     .post("/product")
  //     .send({
  //       name: "Mouse",
  //       price: 30.2,
  //     });
  //   expect(response.status).toBe(200);
  //   const response2 = await request(app)
  //     .post("/product")
  //     .send({
  //       name: "Mouse pad",
  //       price: 10.5,
  //     });
  //   expect(response2.status).toBe(200);

  //   const listResponse = await request(app).get("/product").send();

  //   expect(listResponse.status).toBe(200);
  //   expect(listResponse.body.products.length).toBe(2);
  //   const product = listResponse.body.products[0];
  //   expect(product.name).toBe("Mouse");
  //   expect(product.price).toBe(30.2);
  //   const product2 = listResponse.body.products[1];
  //   expect(product2.name).toBe("Mouse pad");
  //   expect(product2.price).toBe(10.5);

  //   const listResponseXML = await request(app)
  //   .get("/product")
  //   .set("Accept", "application/xml")
  //   .send();

  //   expect(listResponseXML.status).toBe(200);
  //   expect(listResponseXML.text).toContain(`<?xml version="1.0" encoding="UTF-8"?>`);
  //   expect(listResponseXML.text).toContain(`<products>`);
  //   expect(listResponseXML.text).toContain(`<product>`);
  //   expect(listResponseXML.text).toContain(`<name>Mouse</name>`);
  //   expect(listResponseXML.text).toContain(`<price>30.2</price>`);
  //   expect(listResponseXML.text).toContain(`</product>`);
  //   expect(listResponseXML.text).toContain(`<product>`);
  //   expect(listResponseXML.text).toContain(`<name>Mouse pad</name>`);
  //   expect(listResponseXML.text).toContain(`<price>10.5</price>`);
  //   expect(listResponseXML.text).toContain(`</product>`);
  //   expect(listResponseXML.text).toContain(`</products>`);
    

    
  // });
});
