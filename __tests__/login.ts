import mockAxios from "jest-mock-axios";
import { loginUser } from "../src/api/login";

describe("login user", () => {
  // afterEach(() => {
  //   mockAxios.reset();
  // });

  describe("when API call is successful", () => {
    it("should return access token", async () => {
      // given
      const users = { email: "eve.holt@reqres.in", password: "123" };
      mockAxios.post.mockResolvedValueOnce(users);

      // when
      const result = await loginUser(users);

      expect(result).toEqual({ token: "QpwL5tke4Pnpja7X4" });
    });
  });

  describe("when API call fails", () => {
    it("should return error message", async () => {
      // given
      const message = "Missing password";
      const users = { email: "peter@klaven", password: "" };

      mockAxios.post.mockRejectedValueOnce(new Error(message));

      // when
      const result = await loginUser(users);
      expect(result).toEqual({ error: "Missing password" });
    });
  });
});
