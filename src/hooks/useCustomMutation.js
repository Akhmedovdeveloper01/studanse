import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useCustomMutation({
    mutationFn,
    invalidateKeys = [],
    onSuccess,
    onError,
    successMessage,
}) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: mutationFn ?? (() => Promise.reject("mutationFn yo'q")),
        onSuccess: (data) => {
            invalidateKeys.forEach((key) => {
                queryClient.invalidateQueries({ queryKey: [key] });
            });
            if (successMessage) {
                const message =
                    typeof successMessage === "function"
                        ? successMessage(data)
                        : successMessage;

                toast.success(message);
            }

            onSuccess?.(data);
        },

        onError: (error) => {
            toast.error(error?.response?.data?.message ?? "Xatolik yuz berdi");
            onError?.(error);
        },
    });
}
