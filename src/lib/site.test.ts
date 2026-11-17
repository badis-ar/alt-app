import { describe, expect, it } from "vitest";
import { isSignupRole, signupHref } from "./site";

describe("isSignupRole", () => {
  it("accepte les rôles ouverts à l'inscription", () => {
    expect(isSignupRole("candidat")).toBe(true);
    expect(isSignupRole("recruteur")).toBe(true);
  });

  it("refuse l'administrateur et les valeurs inconnues", () => {
    expect(isSignupRole("admin")).toBe(false);
    expect(isSignupRole("")).toBe(false);
    expect(isSignupRole(undefined)).toBe(false);
    expect(isSignupRole(["candidat"])).toBe(false);
  });
});

describe("signupHref", () => {
  it("construit le lien d'inscription du rôle", () => {
    expect(signupHref("candidat")).toBe("/inscription?role=candidat");
    expect(signupHref("recruteur")).toBe("/inscription?role=recruteur");
  });
});
