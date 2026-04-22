import React from "react";
import CustomSettings from "../CustomSettings/CustomSettings";
import { useQuery } from "@tanstack/react-query";
import { getUserSettingsQuery } from "@/query";

export default function SuperAdminSettings() {
    const { data } = useQuery({ ...getUserSettingsQuery() });
    const result = data?.data?.data || [];
    return (
        <div>
            <CustomSettings userData={result} />
        </div>
    );
}
