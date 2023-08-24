import { z } from "zod";

export const EditTechModalSchema = z.object({
  status: z.string().nonempty("É necessário selecionar o nível!"),
});
