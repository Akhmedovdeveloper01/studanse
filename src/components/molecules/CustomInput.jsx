import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function CustomInput({
    name,
    control,
    label,
    loading = false,
    className,
    containerClassName,
    disabled,
    ...props
}) {
    return (
        <div className={cn("space-y-2", containerClassName)}>
            {label && (
                <label className="text-sm font-medium text-foreground">
                    {label}
                </label>
            )}

            <Controller
                name={name}
                control={control}
                render={({ field, fieldState }) => (
                    <>
                        <div className="relative">
                            <Input
                                {...field}
                                {...props}
                                disabled={loading || disabled}
                                className={cn(
                                    fieldState.error &&
                                        "border-red-500 focus-visible:ring-red-500",
                                    className
                                )}
                            />

                            {loading && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted border-t-primary" />
                                </div>
                            )}
                        </div>

                        {fieldState.error && (
                            <p className="text-sm text-red-500">
                                {fieldState.error.message}
                            </p>
                        )}
                    </>
                )}
            />
        </div>
    );
}
