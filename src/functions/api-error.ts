import { StateType } from "@/actions/login";

export default function apiError(error: unknown): StateType {
  if (error instanceof Error) {
    return {
      ok: false,
      error: error.message,
      data: null,
    };
  } else {
    return {
      ok: false,
      error: "Erro genérico",
      data: null,
    };
  }
}
