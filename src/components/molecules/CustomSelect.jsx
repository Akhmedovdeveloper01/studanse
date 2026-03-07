import React from "react";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function CustomSelect({
  name,
  control,
  label,
  placeholder,
  selectData = [],
  loading = false,
  disabled,
  className,
  containerClassName,
  startIcon,
  endIcon,
  searchable = false,
}) {
  const [search, setSearch] = React.useState("");

  const filteredData = React.useMemo(() => {
    if (!searchable || !search.trim()) return selectData;
    return selectData.filter((item) =>
      (item.name || "").toLowerCase().includes(search.toLowerCase())
    );
  }, [selectData, search, searchable]);

  return (
    <div className={cn("space-y-2", containerClassName)}>
      {label && (
        <label className="text-white text-sm font-medium text-foreground">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <div className="relative">
              {/* Start Icon */}
              {startIcon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-muted-foreground">
                  {startIcon}
                </div>
              )}

              <Select
                value={field.value ?? ""}
                onValueChange={field.onChange}
                disabled={loading || disabled}
                onOpenChange={(open) => {
                  if (!open) setSearch("");
                }}
              >
                <SelectTrigger
                  className={cn(
                    "w-full text-textColor",
                    startIcon && "pl-9",
                    endIcon && "pr-9",
                    fieldState.error &&
                      "border-red-500 focus-visible:ring-red-500",
                    className
                  )}
                >
                  <SelectValue placeholder={placeholder || "Select..."} />
                </SelectTrigger>

                <SelectContent>
                  {/* Search input */}
                  {searchable && (
                    <div className="px-2 py-1.5 border-b">
                      <input
                        className="w-full text-sm bg-transparent outline-none placeholder:text-muted-foreground"
                        placeholder="Qidirish..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => e.stopPropagation()}
                      />
                    </div>
                  )}

                  <SelectGroup>
                    {loading ? (
                      <div className="px-2 py-4 text-sm text-center text-muted-foreground">
                        loading...
                      </div>
                    ) : filteredData.length === 0 ? (
                      <div className="px-2 py-4 text-sm text-center text-muted-foreground">
                      No data found
                      </div>
                    ) : (
                      filteredData.map((item, index) => (
                        <SelectItem
                          key={index}
                          value={item.value || item.name}
                        >
                          {item.name}
                        </SelectItem>
                      ))
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* End Icon */}
              {endIcon && !loading && (
                <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-muted-foreground">
                  {endIcon}
                </div>
              )}

              {/* Loading spinner */}
              {loading && (
                <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted border-t-primary" />
                </div>
              )}
            </div>

            {/* Error message */}
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