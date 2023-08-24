import { z } from "zod";

export const EditUserDataModalSchema = z.object({
  name: z.string().nonempty("Digitar o nome é obrigatório!"),
  contact: z.string().nonempty("O número é obrigatório!"),
  old_password: z.string().nonempty("Digitar senha é obrigatório!"),
  password: z
    .string()
    .nonempty("A Senha é obrigatória!")
    .min(8, "Crie uma senha de no mínimo 8 caracteres!")
    .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula!")
    .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra minúscula!")
    .regex(/[0-9]+/, "É necessário conter pelo menos um número!")
    .regex(
      /[!@#$%^&*()\-=_+[\]{}|;:'",.<>/?]/,
      "É necessário pelo menos um caracter especial!"
    ),
});
