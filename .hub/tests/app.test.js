import request from "../utils/request";
import { _setup, end, setEnv } from "../utils/serverRunner";
import sleep from "../utils/sleep";

jest.setTimeout(15000);

beforeAll(async () => {
  setEnv("DATABASE_URI", "postgres://postgres:root@localhost:5432/");
  await sleep(4000);
});

afterAll(() => {
  end();
});

describe("GET /api/products", () => {
  it("should respond with an empty array", async () => {
    await _setup();

    const response = await request.get("/api/products");

    expect(response.data).toEqual([]);
  });

  it("should responde with status 404", async () => {
    await _setup();

    const nonExistingId = "non-existing";

    const response = await request.get(`/api/products/${nonExistingId}`);

    expect(response.status).toBe(404);
  });

  it("should create a new product", async () => {
    await _setup();

    const response = await request.post("/api/products", {
      nome: "Tv",
      preco: "3800",
      condicao: "novo",
    });

    expect(response.status).toEqual(201);
  });

  it("should respond with the complete list of products", async () => {
    await _setup();

    const response = await request.get("/api/products");

    expect(response.data).toEqual([
      {
        id: expect.any(Number),
        nome: "Tv",
        preco: "3800",
        condicao: "novo",
      },
    ]);
  });

  it("should respond with given product", async () => {
    await _setup();

    const productId = (await request.get("/api/products")).data[0].id;
    const response = await request.get(`/api/products/${productId}`);

    expect(response.data).toEqual({
      id: productId,
      nome: "Tv",
      preco: "3800",
      condicao: "novo",
    });
  });
});